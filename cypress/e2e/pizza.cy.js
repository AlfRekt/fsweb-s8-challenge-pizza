describe("Sipariş Test", () => {

    beforeEach(() => {
        cy.visit("/");
        cy.get("[data-testid='siparis-buton']").first().click();
    });

    // TEST 1 — İsim inputuna metin girilebiliyor mu?
    it("isim alanına metin girebilmeli", () => {
        cy.get("[data-testid='isim-input']")
            .type("Ahmet")
            .should("have.value", "Ahmet");
    });

    // TEST 2 — Birden fazla malzeme seçilebiliyor mu?
    it("birden fazla malzeme seçilebilmeli", () => {
        cy.get("[data-testid='malzeme-secim']").within(() => {
            cy.get("input[type='checkbox']").eq(0).check();
            cy.get("input[type='checkbox']").eq(1).check();
            cy.get("input[type='checkbox']").eq(2).check();
            cy.get("input[type='checkbox']").eq(3).check();
        });

        cy.get("[data-testid='malzeme-secim'] input[type='checkbox']:checked")
            .should("have.length", 4);
    });

    // TEST 3 — Form eksiksiz gönderilince onay sayfasına geçilmeli
    it("formu eksiksiz doldurunca sipariş onay sayfasına geçmeli", () => {
        cy.intercept("POST", "https://reqres.in/api/users", {
            statusCode: 201,
            body: { id: "999", isim: "Ahmet" },
        }).as("siparisGonder");

        cy.get("[data-testid='isim-input']").type("Ahmet");
        cy.get("[data-testid='boyut-orta']").check({ force: true });
        cy.get("[data-testid='hamur-select']").select("ince");

        cy.get("[data-testid='malzeme-secim'] input[type='checkbox']").eq(0).check();
        cy.get("[data-testid='malzeme-secim'] input[type='checkbox']").eq(1).check();
        cy.get("[data-testid='malzeme-secim'] input[type='checkbox']").eq(2).check();
        cy.get("[data-testid='malzeme-secim'] input[type='checkbox']").eq(3).check();

        cy.get("[data-testid='siparis-ver-btn']").should("not.be.disabled").click();
        cy.wait("@siparisGonder");

        cy.contains("SİPARİŞ").should("be.visible");
    });

    // TEST 4 — Eksik bilgiyle buton disabled kalmalı
    it("form geçersizken sipariş ver butonu disabled olmalı", () => {
        cy.get("[data-testid='siparis-ver-btn']").should("be.disabled");
    });

    // TEST 5 — İsim 3 karakterden az ise buton disabled kalmalı
    it("isim 3 karakterden kısa olunca buton disabled olmalı", () => {
        cy.get("[data-testid='isim-input']").type("Ab");
        cy.get("[data-testid='boyut-orta']").check({ force: true });
        cy.get("[data-testid='hamur-select']").select("ince");

        cy.get("[data-testid='malzeme-secim'] input[type='checkbox']").eq(0).check();
        cy.get("[data-testid='malzeme-secim'] input[type='checkbox']").eq(1).check();
        cy.get("[data-testid='malzeme-secim'] input[type='checkbox']").eq(2).check();
        cy.get("[data-testid='malzeme-secim'] input[type='checkbox']").eq(3).check();

        cy.get("[data-testid='siparis-ver-btn']").should("be.disabled");
    });

    // TEST 6 — 4'ten az malzeme seçilince buton disabled kalmalı
    it("4'ten az malzeme seçilince buton disabled olmalı", () => {
        cy.get("[data-testid='isim-input']").type("Ahmet");
        cy.get("[data-testid='boyut-orta']").check({ force: true });
        cy.get("[data-testid='hamur-select']").select("ince");

        cy.get("[data-testid='malzeme-secim'] input[type='checkbox']").eq(0).check();
        cy.get("[data-testid='malzeme-secim'] input[type='checkbox']").eq(1).check();
        cy.get("[data-testid='malzeme-secim'] input[type='checkbox']").eq(2).check();

        cy.get("[data-testid='siparis-ver-btn']").should("be.disabled");
    });

    // TEST 7 — Onay sayfasında sipariş özeti görünmeli
    it("onay sayfasında sipariş bilgileri görünmeli", () => {
        cy.intercept("POST", "https://reqres.in/api/users", {
            statusCode: 201,
            body: { id: "42", createdAt: "2025-01-01" },
        }).as("siparisGonder");

        cy.get("[data-testid='isim-input']").type("Mehmet");
        cy.get("[data-testid='boyut-buyuk']").check({ force: true });
        cy.get("[data-testid='hamur-select']").select("kalin");

        cy.get("[data-testid='malzeme-secim'] input[type='checkbox']").eq(0).check();
        cy.get("[data-testid='malzeme-secim'] input[type='checkbox']").eq(1).check();
        cy.get("[data-testid='malzeme-secim'] input[type='checkbox']").eq(2).check();
        cy.get("[data-testid='malzeme-secim'] input[type='checkbox']").eq(3).check();

        cy.get("[data-testid='siparis-ver-btn']").click();
        cy.wait("@siparisGonder");

        cy.contains("L").should("be.visible");
        cy.contains("Pepperoni").should("be.visible");
        cy.contains("105.50₺").should("be.visible");
    });

    // TEST 8 — Ağ hatası bildirim mesajı gösterilmeli
    it("API hata verince kullanıcıya hata mesajı gösterilmeli", () => {
        cy.intercept("POST", "https://reqres.in/api/users", {
            forceNetworkError: true,
        }).as("agHatasi");

        cy.get("[data-testid='isim-input']").type("Ahmet");
        cy.get("[data-testid='boyut-orta']").check({ force: true });
        cy.get("[data-testid='hamur-select']").select("ince");

        cy.get("[data-testid='malzeme-secim'] input[type='checkbox']").eq(0).check();
        cy.get("[data-testid='malzeme-secim'] input[type='checkbox']").eq(1).check();
        cy.get("[data-testid='malzeme-secim'] input[type='checkbox']").eq(2).check();
        cy.get("[data-testid='malzeme-secim'] input[type='checkbox']").eq(3).check();

        cy.get("[data-testid='siparis-ver-btn']").click();
        cy.wait("@agHatasi");

        cy.get("[data-testid='api-hata']").should("be.visible");
        cy.contains("TEBRİKLER").should("not.exist");
    });

});

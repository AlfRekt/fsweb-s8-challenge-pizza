import { defineConfig } from "cypress";

export default defineConfig({
    e2e: {
        // Vite dev sunucusunun çalıştığı adres
        baseUrl: "http://localhost:5173",
        setupNodeEvents(on, config) {
            // ileride event listener eklenebilir
        },
    },
});

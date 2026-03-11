import './SiparisFormu.css';
import { useState } from "react";
import axios from "axios";
import Footer from './Footer';

function SiparisFormu({ setSiparisData, setSayfa }) {
    const [formData, setFormData] = useState({
        isim: "",
        boyut: "",
        kalinlik: "",
        malzemeler: [],
        ozel: "",
    });

    const [adet, setAdet] = useState(1);
    const [hata, setHata] = useState(null);

    const boyutlar = [
        {value:"kucuk", text: "S"},
        {value:"orta", text:"M"},
        {value:"buyuk", text:"L"},
    ];

    const hamurlar = [
        {text: "Hamur Kalınlığı",value: ""},
        {text: "İnce",value: "ince"},
        {text: "Normal", value: "normal"},
        {text: "Kalın", value: "kalin"}
    ];

        const malzemeList = [
        "Pepperoni", "Domates", "Biber",
        "Sosis",     "Mısır",   "Sucuk",
        "Kanada Jambonu", "Ananas", "Tavuk Izgara",
        "Jalapeno",  "Kabak",   "Soğan", "Sarımsak"
    ];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleMalzemeChange = (e) => {
        const value = e.target.value;
        if (e.target.checked) {
            if (formData.malzemeler.length >= 10) return;
            setFormData({ ...formData, malzemeler: [...formData.malzemeler, value] });
        } else {
            setFormData({
                ...formData,
                malzemeler: formData.malzemeler.filter((item) => item !== value)
            });
        }
    };
    const isValid =
        formData.isim.trim().length >= 3 &&
        formData.boyut !== "" &&
        formData.kalinlik !== "" &&
        formData.malzemeler.length >= 4 &&
        formData.malzemeler.length <= 10;


    const pizzaFiyat = 85.50;
    const malzemeFiyat = formData.malzemeler.length * 5;
    const toplamFiyat = (pizzaFiyat + malzemeFiyat) * adet;

    const handleAdetAzalt = () => setAdet((prev) => Math.max(1, prev - 1));
    const handleAdetArttir = () => setAdet((prev) => prev + 1);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!isValid) return;
        setHata(null);

        axios.post(
            "https://reqres.in/api/users",
            { ...formData, adet },
            { headers: { "x-api-key": "reqres_884b021160c348a99df9d073dd683731" } }
        )
        .then((res) => {
            console.log("Sipariş Özeti:", res.data);
            setSiparisData({
                ...formData,
                adet,
                toplamFiyat,
                apiId: res.data.id,          
                createdAt: res.data.createdAt
            });
            setSayfa("onay");
        })
        .catch((err) => {
            console.error("API Hatası:", err.response?.status, err.message);
            if (!err.response) {
                setHata("İnternet'e bağlanılamadı. Lütfen bağlantınızı kontrol edin.");
            } else {
                setHata(`Sipariş gönderilemedi. Sunucu hatası: ${err.response.status}`);
            }
        });
    };

    return (
        <>
        <form onSubmit={handleSubmit} data-testid="siparis-form">
            <section className="siparisPage dflexc">
                <header className="siparis-header">
                    <img
                        src="../images/iteration-1-images/logo.svg"
                        alt="Teknolojik Yemekler"
                        className="siparis-logo"
                    />
                </header>
                <div className='pizza-ozet'>
                        <div className='wrapper'>
                            <img
                            src="../images/iteration-2-images/pictures/form-banner.png"
                            alt="Position Absolute Acı Pizza"
                            className="pizza-form-banner"
                        />
                        <div className="breadcrumb-bar">
                            <div className="breadcrumb-icerik">
                                <span>Anasayfa</span>
                                <span className="bc-ayrac"> &gt; </span>
                                <span className="activePageName">Sipariş Oluştur</span>
                            </div>
                        </div>
                        <h1 className="pizza-baslik">Position Absoulute Acı Pizza</h1>

                        <div className="siparis-info dflexr">
                            <div className="siparis-info-numbers">
                                <span className="pizza-fiyat">{pizzaFiyat.toFixed(2)}₺</span>
                                <span className="rating">4.9</span>
                                <span className="commentCount">(200)</span>
                            </div>
                            <p className="siparis-info-content">
                                Frontend Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre.
                                Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra
                                geleneksel olarak odun ateşinde yüksek sıcaklıkta pişirilen, yuvarlak, düzleştirilmiş
                                mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir.
                            </p>
                        </div>
                        </div>
                    </div>

                <div className="siparis-content">

                    <div className="secimler-alani">
                        <div className="sol-panel">
                            <div className="siparis-boyut">
                                <h2>Boyut Seç <span className='red-pointer'>*</span></h2>
                                <div className='siparis-boyut-secim'>
                                    {boyutlar.map((b) => (
                                    <label key={b.value} className="radio-label" data-label={b.text}>
                                        <input
                                            data-testid={`boyut-${b.value}`}
                                            type="radio"
                                            name="boyut"
                                            value={b.value}
                                            onChange={handleChange}
                                            checked={formData.boyut === b.value}
                                        />
                                    </label>
                                ))}
                                </div>
                            </div>

                            <div className="siparis-kalinlik">
                                <h2>Hamur Seç <span className='red-pointer'>*</span></h2>
                                <select
                                    name="kalinlik"
                                    value={formData.kalinlik}
                                    onChange={handleChange}
                                    data-testid="hamur-select"
                                >
                                    {hamurlar.map((h,index)=>(
                                        <option key={index} value={h.value}>{h.text}</option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        <div className="siparis-ek">
                            <h2>Ek Malzemeler <span className='red-pointer'>*</span></h2>
                            <p className="malzeme-bilgi">
                                En fazla 10 malzeme seçebilirsiniz. +5₺
                                <span className={formData.malzemeler.length < 4 ? " malzeme-uyari" : " malzeme-tamam"}>
                                    {" "}({formData.malzemeler.length}/10 seçildi, min. 4)
                                </span>
                            </p>
                            <div className="malzeme-grid" data-testid="malzeme-secim">
                                {malzemeList.map((malzeme) => (
                                    <label key={malzeme} className="malzeme-label">
                                        <input
                                            type="checkbox"
                                            value={malzeme}
                                            onChange={handleMalzemeChange}
                                            checked={formData.malzemeler.includes(malzeme)}
                                            disabled={
                                                !formData.malzemeler.includes(malzeme) &&
                                                formData.malzemeler.length >= 10
                                            }
                                        />
                                        {malzeme}
                                    </label>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="siparis-notu">
                        <div className="input-grup">
                            <h2>İsim <span className='red-pointer'>*</span></h2>
                            <input
                                data-testid="isim-input"
                                type="text"
                                name="isim"
                                placeholder="Adınızı giriniz (min. 3 karakter)"
                                value={formData.isim}
                                onChange={handleChange}
                            />
                            {formData.isim.length > 0 && formData.isim.trim().length < 3 && (
                                <span className="hata-mesaj">İsim en az 3 karakter olmalıdır.</span>
                            )}
                        </div>

                        <div className="input-grup">
                            <h2>Sipariş Notu</h2>
                            <textarea
                                data-testid="ozel-not"
                                name="ozel"
                                value={formData.ozel}
                                onChange={handleChange}
                                placeholder="Siparişinize özel notunuzu buraya yazabilirsiniz..."
                                rows={4}
                            />
                        </div>
                    </div>
                    <div className='siparis-section'>
                        <div className="siparis-alt-satir">
                            <p className='counter-text'>Adet:</p>
                            <div className="counter-alan">
                                <button type="button" className="counter-btn" onClick={handleAdetAzalt}>−</button>
                                <span className="counter-sayi">{adet}</span>
                                <button type="button" className="counter-btn" onClick={handleAdetArttir}>+</button>
                            </div>
                        </div>
                        <div className="siparis-ver">
                            <div className="siparis-ozet">
                                <h2>Sipariş Toplamı</h2>
                                <div className="ozet-satir">
                                    <span>Seçimler</span>
                                    <span>{(malzemeFiyat * adet).toFixed(2)}₺</span>
                                </div>
                                <div className="ozet-satir toplam-satir">
                                    <span>Toplam</span>
                                    <span>{toplamFiyat.toFixed(2)}₺</span>
                                </div>
                            </div>
                            {hata && (
                                <p className="hata-mesaj api-hata" data-testid="api-hata">
                                    {hata}
                                </p>
                            )}
                            <button
                                type="submit"
                                className="siparis-ver-buton"
                                disabled={!isValid}
                                data-testid="siparis-ver-btn"
                            >
                                SİPARİŞ VER
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </form>
        <Footer />
        </>
    );
}

export default SiparisFormu;

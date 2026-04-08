import './SiparisOnay.css';
import Footer from './Footer';

const boyutLabel = { kucuk: "S", orta: "M", buyuk: "L" };
const hamurLabel  = { ince: "İnce", normal: "Normal", kalin: "Kalın" };

// siparisData: { isim, boyut, kalinlik, malzemeler, ozel, adet, toplamFiyat, apiId }

function SiparisOnay({ siparisData }) {
    const malzemeFiyat = siparisData ? siparisData.malzemeler.length * 5 * siparisData.adet : 0;

    return (
        <div className="onay-page">
            <div className="onay-icerik">
                <img
                    src="/images/iteration-1-images/logo.svg"
                    alt="Teknolojik Yemekler"
                    className="onay-logo"
                />

                <p className="onay-slogan">lezzetin yolda</p>
                <h1 className="onay-baslik">SİPARİŞ ALINDI</h1>

                <hr className="onay-separator" />

                <p className="onay-pizza-isim">Position Absolute Acı Pizza</p>

                {siparisData && (
                    <>
                        <div className="onay-detaylar">
                            <p>
                                <span className="onay-label">Boyut: </span>
                                <strong>{boyutLabel[siparisData.boyut] || siparisData.boyut}</strong>
                            </p>
                            <p>
                                <span className="onay-label">Hamur: </span>
                                <strong>{hamurLabel[siparisData.kalinlik] || siparisData.kalinlik}</strong>
                            </p>
                            <p>
                                <span className="onay-label">Ek Malzemeler: </span>
                                <strong>{siparisData.malzemeler.join(", ")}</strong>
                            </p>
                        </div>

                        <div className="onay-ozet-kart">
                            <h3 className="onay-ozet-baslik">Sipariş Toplamı</h3>
                            <div className="onay-ozet-satir">
                                <span>Seçimler</span>
                                <span>{malzemeFiyat.toFixed(2)}₺</span>
                            </div>
                            <div className="onay-ozet-satir onay-toplam-satir">
                                <span>Toplam</span>
                                <span>{siparisData.toplamFiyat.toFixed(2)}₺</span>
                            </div>
                        </div>
                    </>
                )}
            </div>

            <Footer/>
        </div>
    );
}

export default SiparisOnay;

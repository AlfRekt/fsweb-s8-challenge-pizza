import './Main.css';
import Footer from './Footer'
function Main({ setSayfa }){
    return (
    <>
        <section className="home-page dflexc">
          <div className="home-page-content">
            <img src="../images/iteration-1-images/logo.svg" alt="logo" className="home-page-logo" />
            <p>fırsatı kaçırma</p>
            <p>KOD ACIKTIRIR </p>
            <p> PIZZA, DOYURUR</p>
            <button data-testid="siparis-buton" onClick={() => setSayfa("siparis")} className="home-page_button">ACIKTIM</button>

          </div>
        </section>
        <section className="menu-section">
          <nav>
            <ul className="dflexr">
              <li><a href="#">
                  <img src="../images/iteration-2-images/icons/1.svg" alt="kore"/>
                  <span className="menu-text">YENİ! Kore</span>
                </a>
              </li>
              <li><a href="#">
                  <img src="../images/iteration-2-images/icons/2.svg" alt="pizza"/>
                  <span className="menu-text">Pizza</span>
                </a>
              </li>
              <li><a href="#">
                  <img src="../images/iteration-2-images/icons/3.svg" alt="burger"/>
                  <span className="menu-text">Burger</span>
                </a>
              </li>
              <li><a href="#">
                  <img src="../images/iteration-2-images/icons/4.svg" alt="kızartmalar"/>
                  <span className="menu-text">Kızartmalar</span>
                </a>
              </li>
              <li><a href="#">
                  <img src="../images/iteration-2-images/icons/5.svg" alt="fast food"/>
                  <span className="menu-text">Fast food</span>
                </a>
              </li>
              <li><a href="#">
                  <img src="../images/iteration-2-images/icons/6.svg" alt="gazlı içecek"/>
                  <span className="menu-text">Gazlı İçecek</span>
                </a>
              </li>
            </ul>
          </nav>
        </section>

        <section className="main-container dflexc">
          <div className="main-content main-cards dflexr">
            <div className="card-item quick_pizza">
              <div className="card-text-area">
                <h1>Özel Lezzetus</h1>
                <p>Acı Burger</p>
                <button data-testid="siparis-buton" onClick={() => setSayfa("siparis")} className="order_button">SİPARİŞ VER</button> 
              </div>
            </div>
            <section className="small_cards dflexc">
              <div className="card-item quick_hackathlon">
                <div className="card-text-area">
                  <h1>Hackathlon Burger Menü</h1>
                  <button data-testid="siparis-buton" onClick={() => setSayfa("siparis")} className="order_button">SİPARİŞ VER</button> 
                </div>
              </div>
              <div className="card-item quick_order">
                <div className="card-text-area">
                  <h1><span className="emphasis">Çoooooook</span> hızlı npm gibi kurye</h1>
                  <button data-testid="siparis-buton" onClick={() => setSayfa("siparis")} className="order_button">SİPARİŞ VER</button> 
                </div>
              </div>
            </section>
          </div>
          <div className="main-content menu-header">
            <p>en çopk paketlenen menüler</p>
            <p>Acıktıran Kodlara Doyuran Lezzetler</p>
          </div>
          <nav className="menu-nav">
            <ul className="dflexr">
              <li><button href="#">
                    <img src="../images/iteration-2-images/icons/1.svg" alt="kore"/>
                    <span className="menu-text">Ramen</span>
                  </button>
                </li>
                <li><button href="#" className="active">
                    <img src="../images/iteration-2-images/icons/2.svg" alt="pizza"/>
                    <span className="menu-text">Pizza</span>
                  </button>
                </li>
                <li><button href="#">
                    <img src="../images/iteration-2-images/icons/3.svg" alt="burger"/>
                    <span className="menu-text">Burger</span>
                  </button>
                </li>
                <li><button href="#">
                    <img src="../images/iteration-2-images/icons/4.svg" alt="kızartmalar"/>
                    <span className="menu-text">Kızartmalar</span>
                  </button>
                </li>
                <li><button href="#">
                    <img src="../images/iteration-2-images/icons/5.svg" alt="fast food"/>
                    <span className="menu-text">Fast food</span>
                  </button>
                </li>
                <li><button href="#">
                    <img src="../images/iteration-2-images/icons/6.svg" alt="gazlı içecek"/>
                    <span className="menu-text">Gazlı İçecek</span>
                  </button>
                </li>
            </ul>
          </nav>
          <div className="main-content menu">
            <div className="menu-item dflexc">
                <img src="../images/iteration-2-images/pictures/food-1.png" alt="terminal"/>
                <div className="label dflexc">
                  <h2>Terminal Pizza</h2>
                  <div className="info dflexr">
                    <p>4.9</p>
                    <div className="dflexr price">
                      <p>(200)</p>
                      <p>60₺</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="menu-item dflexc">
                <img src="../images/iteration-2-images/pictures/food-2.png" alt="aci"/>
                <div className="label dflexc">
                  <h2>Position Absolute Acı Pizza</h2>
                  <div className="info dflexr">
                    <p>4.9</p>
                    <div className="dflexr price">
                      <p>(200)</p>
                      <p>60₺</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="menu-item dflexc">
                <img src="../images/iteration-2-images/pictures/food-3.png" alt="burger"/>
                <div className="label dflexc">
                  <h2>useEffect Tavuklu Burger</h2>
                  <div className="info dflexr">
                    <p>4.9</p>
                    <div className="dflexr price">
                      <p>(200)</p>
                      <p>60₺</p>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </section>

        <Footer/>
    </>
  )
};

export default Main;
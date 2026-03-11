import './Footer.css';

function Footer(){
    return(
        <>
        <footer className="dflexc">
          <div className="footer-content dflexr">
            <div className="contacts-section">
              <img src="../images/iteration-2-images/footer/logo-footer.svg" alt="logo" className="footer-logo" />
              <ul>
                <li>
                  <img src="../images/iteration-2-images/footer/icons/icon-1.png"/>
                  <p>341 Londonderry Road, Istanbul Türkiye</p>
                </li>
                <li>
                  <img src="../images/iteration-2-images/footer/icons/icon-2.png"/>
                  <p>aciktim@teknolojikyemekler.com</p>
                </li>
                <li>
                  <img src="../images/iteration-2-images/footer/icons/icon-3.png"/>
                  <p>+90 216 123 45 67</p>
                </li>
              </ul>
            </div>
            <div className="footer-menu-section">
              <h2>Hot Menu</h2>
              <ul>
                <li><p>Terminal Pizza</p></li>
                <li><p>5 Kişilik Hackathlon Pizza</p></li>
                <li><p>useEffect Tavuklu Pizza</p></li>
                <li><p>Beyaz Console Frosty</p></li>
                <li><p>Testler Geçti Mutlu Burger</p></li>
                <li><p>Position Absolute Acı Burger</p></li>
              </ul>
            </div>
            <div className="instagram-section dflexc">
              <h2>Instagram</h2>
              <div className="pics dflexr">
                <img src="../images/iteration-2-images/footer/insta/li-0.png" />
                <img src="../images/iteration-2-images/footer/insta/li-1.png"/>
                <img src="../images/iteration-2-images/footer/insta/li-2.png"/>
                <img src="../images/iteration-2-images/footer/insta/li-3.png" />
                <img src="../images/iteration-2-images/footer/insta/li-4.png"/>
                <img src="../images/iteration-2-images/footer/insta/li-5.png"/>
              </div>
            </div>
          </div>
          <div className="copyright-section">
            <div className="copyright dflexr">
              <p>© 2023 Teknolojik Yemekler.</p>
              <i className="fa-brands fa-twitter"></i>
            </div>
          </div>
        </footer>
    </>
    );
}

export default Footer;
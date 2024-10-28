import logoDesktopFooter from "../../assets/Logo-Kasa-Desktop-Footer.png"


function Footer () {
    return (
        <footer className="footer">
        <img src={logoDesktopFooter} alt="logo Kasa" className="footer__logo" />
        <p className="footer__text">© 2020 Kasa. All rights reserved</p>        
        </footer>
    )
}

export default Footer
import "./Footer.scss"
import logo from "../../assets/kasa-logo-footer.svg"

export default function Header() {
    return (
        <footer className="footer">
            <img className="footer__logo" src={logo} alt="Kasa, location immobilière" />
            <span className="footer__legal">© 2020 Kasa. All rights reserved</span>
        </footer>
    )
}
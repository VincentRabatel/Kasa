import React from "react";

import "../styles/Header.scss";
import logo from "../assets/kasa-logo.svg";

export default function Header() {
    return (
        <header className="header">
            <img className='header__logo' src={logo} alt='Kasa, location immobilière' />
            <nav className="header__nav-bar">
                <ul className="header__nav-bar__list">
                    <li>
                        <a className="header__nav-bar__element" href="./">Accueil</a>
                    </li>
                    <li>
                        <a className="header__nav-bar__element" href="./about">A propos</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
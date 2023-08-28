import { Fragment } from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"

import "./Error404.scss"

export default function Error404() {
    return (
        <Fragment>
            <Header />
            <main className="error-404">
                <div className="error-404__title">404</div>
                <div className="error-404__text">Oups! La page que vous demandez n'existe pas.</div>
                <a className="error-404__link"href="./">Retourner à la page d'accueil</a>
            </main>
            <Footer />
        </Fragment>
    )
} 
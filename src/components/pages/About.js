import React from "react"
import Header from "../Header"
import Footer from "../Footer"
import Banner from "../Banner"
import Collapse from "../Collapse"

import "./About.scss"

// Data to setup the banner
import bannerImage from "../../assets/banner-about.jpg"
const bannerText = ""
const bannerAlt = "Mountains and a river in the background"

// Texts that will fill the Collapse components
const fiabilityText = "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
const respectText = "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
const serviceText = "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
const securityText = "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."

export default function About() {
    return (
        <React.Fragment>
            <Header />
            <main className="about-container">
                {/* Banner */}
                <Banner image={bannerImage} text={bannerText} alt={bannerAlt} />

                {/* Collapses */}
                <div className="collapse-container">
                    <Collapse title="Fiabilité" content={<p>{fiabilityText}</p>} />
                    <Collapse title="Respect"   content={<p>{respectText}</p>} />
                    <Collapse title="Service"   content={<p>{serviceText}</p>} />
                    <Collapse title="Sécurité"  content={<p>{securityText}</p>} />
                </div>
            </main>
            <Footer />
        </React.Fragment>
    )
} 
import React from "react"
import Header from "./Header"
import Footer from "./Footer"
import Banner from "./Banner"
import Collapse from "./Collapse"

import "../styles/About.scss"

// Setup banner data
import bannerImage from "../assets/banner-about.jpg"
const bannerText = ""
const bannerAlt = "Mountains and a river in the background"

export default function About() {
    return (
        <React.Fragment>
            <Header />
            <main>
                <Banner image={bannerImage} text={bannerText} alt={bannerAlt} />

                <div className="collapse-container">
                    <Collapse title="Fiabilité" />
                    <Collapse title="Respect" />
                    <Collapse title="Service" />
                    <Collapse title="Sécurité" />
                </div>
            </main>
            <Footer />
        </React.Fragment>
    )
} 
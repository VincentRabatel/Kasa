import React from "react"
import Header from "./Header"
import Footer from "./Footer"
import Banner from "./Banner"

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

                
            </main>
            <Footer />
        </React.Fragment>
    )
} 
import React from "react"
import Header from "./Header"
import Footer from "./Footer"
import Banner from "./Banner"
import Gallery from "./Gallery"

import "../styles/Home.scss"

// Setup banner data
import bannerImage from "../assets/banner-home.jpg"
const bannerText = "Chez vous, partout et ailleurs"
const bannerAlt = "Mountains and a river in the background"

export default function Home() {
    return (
        <React.Fragment>
            <Header />
            <main>
                <Banner image={bannerImage} text={bannerText} alt={bannerAlt} />
                <Gallery />
            </main>
            <Footer />
        </React.Fragment>
    )
} 
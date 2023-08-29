import { Fragment } from "react"
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import Banner from "../components/Banner/Banner"
import Gallery from "../components/Gallery/Gallery"

import "./Home.scss"

// Setup banner data
import bannerImage from "../assets/banner-home.jpg"
const bannerText = "Chez vous, partout et ailleurs"
const bannerAlt = "Mountains and a river in the background"

export default function Home() {
    return (
        <Fragment>
            <Header />
            <main className="home-container">
                <Banner image={bannerImage} text={bannerText} alt={bannerAlt} />
                <Gallery />
            </main>
            <Footer />
        </Fragment>
    )
} 
import React from "react"
import Header from "./Header"
import Footer from "./Footer"
import Banner from "./Banner"
import Gallery from "./Gallery"

import "../styles/Home.scss"

export default function Home() {
    return (
        <React.Fragment>
            <Header />
            <main>
                <Banner />
                <Gallery />
            </main>
            <Footer />
        </React.Fragment>
    )
} 
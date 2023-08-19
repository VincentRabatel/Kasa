import React from "react"
import Header from "./Header"
import Footer from "./Footer"
import Banner from "./Banner"

import "../styles/Home.scss"

export default function Home() {
    return (
        <React.Fragment>
            <Header />
            <Banner />
            <Footer />
        </React.Fragment>
    )
} 
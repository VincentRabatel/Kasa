import React from "react"
import Header from "./Header"
import Footer from "./Footer"

import "../styles/Home.scss"

export default function Home() {
    return (
        <React.Fragment>
            <Header />
            <main>This is the home page</main>
            <Footer />
        </React.Fragment>
    )
} 
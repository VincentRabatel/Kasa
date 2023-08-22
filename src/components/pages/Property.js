import React from "react"
import Header from "../Header"
import Footer from "../Footer"

import "./Property.scss"

import propertiesData from "../../datas/properties.json"

export default function Property() {

    const id = getPropertyIDFromUrl();
    const property = propertiesData.find((p) => p.id === id); console.log(property)

    return (
        <React.Fragment>
            <Header />
                <main>
                    <h1>{property.title}</h1>
                </main>
            <Footer />
        </React.Fragment>
    )
}

function getPropertyIDFromUrl() {
    const url = window.location.href;
    const id = url.slice(url.length - 8, url.length);

    return id;
}
import React from "react"

import "../styles/PropertyCard.scss"

import propertiesData from "../datas/properties.json"

export default function PropertyCard() {
    // let properties [];

    return (
        <div className="property-card">
            <div className="property-card__overlay"></div>


            <h2 className="property-card__title">Titre de la location</h2>
        </div>
    );
}
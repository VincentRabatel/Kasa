import React from "react"

import "../styles/HousingCard.scss"

export default function HousingCard() {
    return (
        <div className="housing-card">
            <div className="housing-card__overlay"></div>
            <h2 className="housing-card__title">Titre de la location</h2>
        </div>
    );
}
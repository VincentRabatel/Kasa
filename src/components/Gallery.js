import React from "react"
import HousingCard from "./HousingCard";

import "../styles/Gallery.scss"

export default function Gallery() {
    return (
        <div className="gallery">
            <HousingCard />
            <HousingCard />
            <HousingCard />
            <HousingCard />
            <HousingCard />
            <HousingCard />
            <HousingCard />
        </div>
    );
}
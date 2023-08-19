import React from "react"
import PropertyCard from "./PropertyCard";

import "../styles/Gallery.scss"

export default function Gallery() {
    return (
        <div className="gallery">
            <PropertyCard />
            <PropertyCard />
            <PropertyCard />
            <PropertyCard />
            <PropertyCard />
            <PropertyCard />
            <PropertyCard />
        </div>
    );
}
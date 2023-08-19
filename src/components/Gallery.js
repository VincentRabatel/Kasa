import React from "react"
import PropertyCard from "./PropertyCard";

import "../styles/Gallery.scss"

import propertiesData from "../datas/properties.json"

export default function Gallery() {
     return (
        <div className="gallery">
            {propertiesData.map(({id, title, pictures}) => (
                <PropertyCard key={id}
                    id={id}
                    title={title}
                    picture={pictures[0]} />
            ))} 
        </div>
    );
}
import React from "react"

import "../styles/Rating.scss";

export default function Rating({rating}) {
    const stars = [];
    
    for (let i = 0; i < 5; i++) {
        i < rating ? stars.push(1) : stars.push(0); 
    }

    console.log(stars);

    return (
        <div className="rating">
            {stars.map((star) => (
                star === 1 ? <i className="fa-solid fa-star rating__star--full"></i> : <i className="fa-solid fa-star rating__star--empty"></i>
            ))} 
        </div>
    )
}
import React from "react"

import "../styles/Slideshow.scss"

import arrow from "../assets/slideshow-arrow.svg"

export default function Slideshow({pictures}) {
    return (
        <div className="slideshow">
            <img className="slideshow__arrow slideshow__arrow--left" src={arrow} alt="Left arrow"></img>
            <img className="slideshow__picture" src={pictures[0]} alt=""></img>
            <img className="slideshow__arrow slideshow__arrow--right" src={arrow} alt="Right arrow"></img>            
        </div>
    )
}

// function updateSlideshow() {

// }
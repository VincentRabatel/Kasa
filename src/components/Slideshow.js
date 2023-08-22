import { useState } from "react";

import "../styles/Slideshow.scss"

import arrow from "../assets/slideshow-arrow.svg"

export default function Slideshow({pictures}) {
    const [slideshowState, setSlideshowState] = useState(0);

    function previousSlide() {
        slideshowState <= 0 ? setSlideshowState(pictures.length - 1) : setSlideshowState(slideshowState - 1);
    }

    function nextSlide() {
        slideshowState >= pictures.length - 1 ? setSlideshowState(0) : setSlideshowState(slideshowState + 1);
    }

    return (
        <div className="slideshow">
            <img className="slideshow__arrow slideshow__arrow--left" onClick={previousSlide} src={arrow} alt="Left arrow"></img>
            <img className="slideshow__picture" src={pictures[slideshowState]} alt=""></img>
            <img className="slideshow__arrow slideshow__arrow--right" onClick={nextSlide} src={arrow} alt="Right arrow"></img>            
        </div>
    )
}
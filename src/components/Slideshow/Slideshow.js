import { useState } from "react"

import "./Slideshow.scss"

import arrow from "../../assets/slideshow-arrow.svg"

export default function Slideshow({pictures}) {
    const [slideshowState, setSlideshowState] = useState(0);

    function previousSlide() {
        slideshowState <= 0 ? setSlideshowState(pictures.length - 1) : setSlideshowState(slideshowState - 1);
    }

    function nextSlide() {
        slideshowState >= pictures.length - 1 ? setSlideshowState(0) : setSlideshowState(slideshowState + 1);
    }

    // The arrows and the picture count are not visible if there is only one image
    if (pictures.length === 1) {

        return (
            <div className="slideshow">
                <img className="slideshow__picture" src={pictures[slideshowState]} alt=""></img>
            </div>
        )

    } else {

        return (
            <div className="slideshow">
                <img className="slideshow__picture" src={pictures[slideshowState]} alt=""></img>
    
                <img className="slideshow__arrow slideshow__arrow--left" onClick={previousSlide} src={arrow} alt="Left arrow"></img>
                <img className="slideshow__arrow slideshow__arrow--right" onClick={nextSlide} src={arrow} alt="Right arrow"></img>
    
                <div className="slideshow__count"> {slideshowState + 1}/{pictures.length}</div>
            </div>
        )
        
    }
}
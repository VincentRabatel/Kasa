import React from "react"

import "../styles/Banner.scss"
import banner from "../assets/banner.jpg"

export default function Banner() {
    return (
        <div className="banner">
            <img className="banner__img" src={banner} alt="Mountains and sea in the background"></img>
            <div className="banner__img-overlay"></div>
            <h1 className="banner__txt">Chez vous, partout et ailleurs</h1>
        </div>
    );
}
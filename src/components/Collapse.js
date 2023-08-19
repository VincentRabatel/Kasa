import React from "react"

import "../styles/Collapse.scss"
import arrow from "../assets/arrow.svg"

export default function Collapse({title}) {
    return (
        <div className="collapse">
            <h2 className="collapse__title">{title}</h2>
            <img className="collapse__arrow" src={arrow} alt =""></img>
        </div>
    )
}
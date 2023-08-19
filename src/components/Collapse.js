import { useState } from "react";

import "../styles/Collapse.scss";
import arrow from "../assets/arrow.svg";

export default function Collapse({title, text}) {
    const [collapseState, setCollapseState] = useState(false);

    function UpdateCollapse() {
        switch(collapseState) {
            case false:
                setCollapseState(true);
                console.log("Was false, going to true")
            break;
    
            case true:
                setCollapseState(false); 
                console.log("Was true, going to false")
            break;
    
            default:
                console.error("What the f")
        }
    }

    return (
        <div className="collapse">
            <button className="collapse__btn" onClick={UpdateCollapse}>
                <h2 className="collapse__btn__title">{title}</h2>
                <img className={`collapse__btn__arrow ${collapseState ? "collapse__btn__arrow--open" : "collapse__btn__arrow--close"}`} src={arrow} alt =""></img>
            </button>
            <p className={`collapse__text ${collapseState ? "collapse__text--open" : "collapse__text--close"}`}>{text}</p>
        </div>

    )
}
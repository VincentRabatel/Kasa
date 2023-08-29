import "./Collapse.scss"
import arrow from "../../assets/collapse-arrow.svg"

import { useState } from "react"

export default function Collapse({title, content}) {
    const [collapseState, setCollapseState] = useState(false);

    function updateCollapse() {
        switch(collapseState) {
            case false:
                setCollapseState(true);
            break;
    
            case true:
                setCollapseState(false); 
            break;
    
            default:
                console.error("What the f")
        }
    }

    return (
        <div className="collapse">
            <button className="collapse__btn" onClick={updateCollapse}>
                <h2 className="collapse__btn__title">{title}</h2>
                <img 
                    className={`collapse__btn__arrow ${collapseState ? "collapse__btn__arrow--open" : "collapse__btn__arrow--close"}`} 
                    src={arrow} 
                    alt={collapseState ? "Arrow to open the menu" : "Arrow to open the menu"}>
                </img>
            </button>
            <div className={`collapse__content ${collapseState ? "collapse__content--open" : "collapse__content--close"}`}>{content}</div>
        </div>
    )
}
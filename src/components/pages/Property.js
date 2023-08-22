import React from "react"
import Header from "../Header"
import Footer from "../Footer"
import Slideshow from "../Slideshow"
import Collapse from "../Collapse"

import "./Property.scss"

import propertiesData from "../../datas/properties.json"

export default function Property() {
    const id = getPropertyIDFromUrl();
    const property = propertiesData.find((p) => p.id === id);

    return (
        <React.Fragment>
            <Header />
                <main className="property-container">

                    {console.log("This will be printed twice")}

                    <Slideshow pictures={property.pictures} />

                    <div className="infos">
                        {/* Left tab */}
                        <div>
                            <h2 className="infos__title">{property.title}</h2>
                            <h3 className="infos__location">{property.location}</h3>
                            <div className="infos__tags-container">
                                <div>Tag 1</div>
                                <div>Tag 2</div>
                                <div>Tag 3</div>
                            </div>
                        </div>

                        {/* Right tab */}
                        <div>
                            <div className="infos__host">
                                <h3 className="infos__host__name">{property.host.name}</h3>
                                <img className="infos__host__picture" src={property.host.picture} alt="Profile of the host"></img>
                            </div>
                        </div>
                    </div>

                    <div className="collapses-container">
                        <Collapse title="Description" text={property.description}/>
                        <Collapse title="Équipements" text={property.equipments}/>
                    </div>
                </main>
            <Footer />
        </React.Fragment>
    )
}

function getPropertyIDFromUrl() {
    const url = window.location.href;
    const id = url.slice(url.length - 8, url.length);

    return id;
}

// async function fetchProperties() {
//     const response = await fetch("./../datas/properties.json"); console.log(response);
//     const ppp = await response.json(); console.log(ppp);

//     return null;
// }
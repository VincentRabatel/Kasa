import { Fragment, useEffect, useState } from "react"
import { useParams, Navigate, useNavigate } from "react-router-dom"

import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import Slideshow from "../components/Slideshow/Slideshow"
import Collapse from "../components/Collapse/Collapse"
import Rating from "../components/Rating/Rating"

import "./Property.scss"

import propertiesData from "../datas/properties.json"
import PropertyTag from "../components/PropertyTag/PropertyTag"

export default function Property() {
    const { id } = useParams();
    const [property, setProperty] = useState(null);
    const [isLoading, setLoading] = useState(true);
   
    const isNotLoadingWithoutProperty = !property && !isLoading;
    const isLoadingWithoutProperty = !property && isLoading;

    useEffect(() => {
        const data = propertiesData.find((p) => p.id === id);
        setProperty(data);
        setLoading(false);
    }, [id]);
    
    if (isNotLoadingWithoutProperty) {
        return <Navigate to="/error" />
    }

    if (isLoadingWithoutProperty) {
        return (
            <h1>Chargement</h1>
        )
    }

    return (
        <Fragment>
            <Header />

            <main className="property-container">
                <Slideshow pictures={property && property.pictures} />

                <div className="infos">
                    {/* Left tab */}
                    <div className="infos__l-tab">
                        <h2 className="infos__title">{property.title}</h2>
                        <h3 className="infos__location">{property.location}</h3>
                        <div className="infos__tags-container">
                            {property.tags.map((tag) => (
                                <PropertyTag title={tag} key={crypto.randomUUID()} />
                            ))} 
                        </div>
                    </div>

                    {/* Right tab */}
                    <div className="infos__r-tab">
                        <div className="infos__host">
                            <h3 className="infos__host__name">{property.host.name}</h3>
                            <img className="infos__host__picture" src={property.host.picture} alt="Profile of the host"></img>
                        </div>

                        <div className="infos__rating-container">
                            <Rating rating={property.rating} />
                        </div>
                    </div>
                </div>

                <div className="collapses-container">
                    <Collapse title="Description" content={<p>{property.description}</p>}/>
                    <Collapse title="Équipements" content={
                        <ul>
                            {property.equipments.map((equipement) => (
                                <li key={crypto.randomUUID()}>{equipement}</li>
                            ))}
                        </ul>
                    }/>
                </div>
            </main>
        
            <Footer />
    </Fragment>
    )
}
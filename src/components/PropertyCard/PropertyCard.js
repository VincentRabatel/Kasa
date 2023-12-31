import "./PropertyCard.scss"

export default function PropertyCard({id, title, picture}) {
    return (
        <a className="property-card" href={`../property/${id}`}>
            <img className="property-card__img" src={picture} alt="Indide of a property to rent"></img>
            <div className="property-card__overlay"></div>
            <h2 className="property-card__title">{title}</h2>
        </a>
    );
}
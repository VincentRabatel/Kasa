import "../styles/PropertyTag.scss"

export default function PropertyTag({title}) {
    return (
        <div className="property-tag">
            <span className="property-tag__text">{title}</span>
        </div>
    )
}
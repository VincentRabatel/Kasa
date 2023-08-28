import "../styles/Banner.scss";

export default function Banner({image, text, alt}) {
    return (
        <div className="banner">
            <img className="banner__img" src={image} alt={alt}></img>
            <div className="banner__img-overlay"></div>
            <h1 className="banner__txt">{text}</h1>
        </div>
    );
}
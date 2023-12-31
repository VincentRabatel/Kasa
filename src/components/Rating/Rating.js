import "./Rating.scss"

export default function Rating({rating}) {
    const stars = [];
    
    for (let i = 0; i < 5; i++) {
        i < rating ? stars.push(1) : stars.push(0); 
    }

    return (
        <div className="rating">
            {stars.map((star) => (
                star === 1 ? 
                <i key={crypto.randomUUID()} className="fa-solid fa-star rating__star--full"></i>
                :
                <i key={crypto.randomUUID()} className="fa-solid fa-star rating__star--empty"></i>

            ))} 
        </div>
    )
}
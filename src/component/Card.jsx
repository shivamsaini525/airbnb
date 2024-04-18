import { Link } from 'react-router-dom';

const Card = ({ id, title, image, description }) => {
    return (
        <div className="card" style={{ width: '18rem', cursor: 'pointer' }}>
            <Link to={`/cards/${id}`} className="card-link">
                <img src={image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}.</p>
                    <button className="btn btn-primary">View Details</button>
                </div>
            </Link>
        </div>
    );
}

export default Card;

import FavouriteButton from "../FavouriteButton/FavouriteButton";
import "./PropertyCard.css";
import {Link} from "react-router";


export default function PropertyCard (props) {

    const property = props.property;

    return (
        <Link to={`/properties/${property.property_id}`} className="property-card">
            <img className="property-img" src="/src/assets/StockPropertyImage.jpg" alt={`Image of ${property.property_name}`} width="120" height ="120"></img>
            <div className="property-info">
                <h2 className="manage-overflow">{property.property_name}</h2>
                <p className="manage-overflow">{property.location}</p>
            </div>
            <div className="property-favourite">
                <FavouriteButton/>
            </div>
        </Link>
    );
};
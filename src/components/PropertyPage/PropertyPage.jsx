import "./PropertyPage.css";
import {useState, useEffect} from "react";
import axios from "axios";
import { useParams } from "react-router";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import PropertyReview from "../PropertyReview/PropertyReview";

export default function PropertyPage () {

    const {id} = useParams();
    const [property, setProperty] = useState([]);
    const [reviews, setReviews] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
    axios.get(`https://airbnc-um3u.onrender.com/api/properties/${id}`)
    .then(res => setProperty(res.data.property[0]))
    .catch(err => setError(err));
    }, [])

    useEffect(() => {
    axios.get(`https://airbnc-um3u.onrender.com/api/properties/${id}/reviews`)
    .then(res => setReviews(res.data.reviews))
    .catch(err => setError(err));
    }, [])


    if (error) {
        return (<ErrorMessage/>)
    }

    return (
        <div className="property-page">
            <div className="property-image-container">
                <img src="/src/assets/StockPropertyImage.jpg" alt={`Image of ${property.property_name}`} className="property-image"></img>
            </div>
            <h2> {property.property_name} </h2>
            <p> {property.location} </p>
            <p> Description: {property.description}</p>
            <div className="property-reviews">
                <p className="reviews-header"> Reviews </p>
                
                <ul className="review-list">
                    {reviews.map((review) => {
                        return (
                            <li key={review.review_id}>
                                <PropertyReview review={review}/>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );

};
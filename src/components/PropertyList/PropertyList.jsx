import "./PropertyList.css";
import {useState, useEffect} from "react";
import axios from "axios";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import {Link} from "react-router";
import PropertyCard from "../PropertyCard/PropertyCard";

export default function PropertyList (){

    const [properties, setProperties] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
    axios.get("https://airbnc-um3u.onrender.com/api/properties")
    .then(res => setProperties(res.data.properties))
    .catch(err => setError(err));
    }, []);

    if (error) {
        return <ErrorMessage/>
    };

    return (
        <ul className="property-list"> 
            {properties.map((property) => {
                return (
                    <li key={property.property_id}>
                        <PropertyCard property={property}/>
                    </li>
                );
            })}
        </ul>
    );

};
import {useState, useEffect} from "react";
import axios from "axios";
import ErrorMessage from "./ErrorMessage";
import {Link} from "react-router";

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

    console.log(properties);

    return (
        <ul className="property-list"> 
            {properties.map((property) => {
                return (
                    <li key={property.property_id} className="property" onClick={() => {console.log(`load property page for ${property.property_name}`)}}>
                        <Link to={`/properties/${property.property_id}`}>
                            <p>INSERT IMAGE HERE</p>
                            <h2>{property.property_name}</h2>
                            <p>{property.location}</p>
                        </Link>
                    </li>
                )
            })}
        </ul>
    );

};
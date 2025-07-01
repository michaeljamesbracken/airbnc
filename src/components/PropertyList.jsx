import {useState, useEffect} from "react";
import axios from "axios";

export default function PropertyList (){

    const [properties, setProperties] = useState([]);

    useEffect(() => {
    axios.get("https://airbnc-um3u.onrender.com/api/properties")
    .then(res => setProperties(res.data.properties))
    .catch(err => console.log(err));
    }, [])

    console.log(properties);
    return (
        <ul>
            {properties.map((property) => {
                return (
                    <li key={property.property_id} className="property" onClick={() => {console.log(`load property page for ${property.property_name}`)}}>
                        <p>INSERT IMAGE HERE</p>
                        <h2>{property.property_name}</h2>
                        <p>{property.location}</p>
                    </li>
                )
            })}
        </ul>
    );

};
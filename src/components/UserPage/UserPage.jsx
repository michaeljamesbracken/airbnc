import "./UserPage.css";
import {useState, useEffect} from "react";
import axios from "axios";
import {useParams} from "react-router";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import PropertyCard from "../PropertyCard/PropertyCard";

export default function UserPage () {

    const {id} = useParams();
    const [user, setUser] = useState([]);
    const [properties, setProperties] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get(`https://airbnc-um3u.onrender.com/api/users/${id}`)
        .then(res => setUser(res.data.user[0]))
        .catch(err => setError(err));
    }, []);

    useEffect(() => {
        axios.get(`https://airbnc-um3u.onrender.com/api/properties/?host=${id}`)
        .then(res => setProperties(res.data.properties))
        .catch(err => setError(err));
    }, []);

    if (error) {
        return <ErrorMessage />;
    };

    console.log(user)

    return (
        <div className="user-page">
            <div className="user-image-container">
                <img src={user.avatar} alt={`Profile of ${user.username}`} className="user-image"/>
            </div>
            <h2>{user.first_name} {user.surname}</h2>
        <ul className="property-list">
            <h2> Properties </h2>
                {properties.map((property) => {
                    return (
                        <li key={property.property_id}>
                            <PropertyCard property={property}/>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
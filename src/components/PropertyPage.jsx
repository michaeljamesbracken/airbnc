import {useState, useEffect} from "react";
import axios from "axios";
import { useParams } from "react-router";
import ErrorMessage from "./ErrorMessage";

export default function PropertyPage () {

    const {id} = useParams();
    const [property, setProperty] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
    axios.get(`https://airbnc-um3u.onrender.com/api/properties/${id}`)
    .then(res => setProperty(res.data.property[0]))
    .catch(err => setError(err));
    }, [])

    if (error) {
        return (<ErrorMessage/>)
    }

    return (
        <div>
            <p> Image of {property.property_name} </p>
            <h2> {property.property_name} </h2>
            <p> {property.location} </p>
            <p> Description: {property.description}</p>
        </div>
    );

};
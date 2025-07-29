import "./Navigation.css";
import { Link } from "react-router";
import { FaHome, FaSearch, FaUser } from "react-icons/fa";


export default function Navigation () {
    return (
        <div className="nav-bar">
            <Link to="/">
                <FaHome className="nav-button"/>
            </Link>
            <Link>
                <FaSearch className="nav-button"/>
            </Link>
            <Link to="/user/1">
                <FaUser className="nav-button"/>
            </Link>
        </div>
    );
}
import "./Navigation.css";
import { Link } from "react-router";

export default function Navigation () {
    return (
        <div className="nav-bar">
            <Link to="/">
                Home
            </Link>
            <Link>
                Search
            </Link>
            <Link to="/user/1">
                User
            </Link>
        </div>
    );
}
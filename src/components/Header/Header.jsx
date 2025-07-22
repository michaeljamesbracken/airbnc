import "./Header.css";
import Navigation from "../Navigation/Navigation";

export default function Header () {
    return (
        <header>
            <h1 className="header-text"> airbnc </h1>
            <Navigation/>
        </header>
    );
};

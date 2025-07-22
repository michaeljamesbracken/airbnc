import "./app.css";
import PropertyList from "./components/PropertyList/PropertyList";
import Header from "./components/Header/Header";
import {Routes, Route} from "react-router";
import PropertyPage from "./components/PropertyPage/PropertyPage";
import UserPage from "./components/UserPage/UserPage";

const App = () => {

  return (
    <div className="container">
    <Header/>
    <Routes>
      <Route path="/" element={<PropertyList/>}/>
      <Route path="/properties/:id" element={<PropertyPage/>}/>
      <Route path="/user/:id" element={<UserPage/>}/>
    </Routes>
    </div>
  );

};

export default App;
import {useState, useEffect} from "react";
import axios from "axios";
import PropertyList from "./components/PropertyList";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {

  return (
    <>
    <Header/>
    <PropertyList/>
    <Footer/>
    </>
  );

};

export default App;
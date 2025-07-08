import PropertyList from "./components/PropertyList";
import Header from "./components/Header";
import {Routes, Route} from "react-router";
import PropertyPage from "./components/PropertyPage";

const App = () => {

  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<PropertyList/>}/>
      <Route path="/properties/:id" element={<PropertyPage/>}/>
    </Routes>
    </>
  );

};

export default App;
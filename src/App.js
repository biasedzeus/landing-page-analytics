import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
//// Components
import NavBar from "./Components/NavBar/NavBar";
import HeroPage from "./Components/HeroPage/HeroPage";
import AboutUs from "./Components/AboutUs/AboutUs";
import Technology from "./Components/Technology/Technology";
import Vision from "./Components/Vision/Vision";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="Apsp">
      <NavBar />
      <HeroPage />
      <AboutUs />
      <Technology />
      <Vision />
      <Footer />
    </div>
  );
}

export default App;

import React from "react";
import "./App.css";
//import all files going to use 
 import Header from "./components/Header.js";
 import Footer from "./components/Footer";
// import Portfolio from "./Pages/portfolio";
import PortContainer from './components/PortContainer';

function App () {
    return(
        <div className="app">
        <Header/>
        <PortContainer />
        <Footer/>
        </div>
    );
};

export default App;
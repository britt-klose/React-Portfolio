import React from "react";
//import Navigation from "../components/Navigation";
import Jumbotron from 'react-bootstrap/Jumbotron';

function Header (){

    return(
        <div className="col-xs-12 col-sm-12 col-md-12 justify-content-center"> 
        <Jumbotron className='jumbo'>
          <h1 className="nameHeader">Brittany Klose</h1>  
        </Jumbotron>
        </div>
    )
};

export default Header;
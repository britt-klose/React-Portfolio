import React from "react";
import Project from "../components/Project"

function Portfolio (){
    return(
        <div>
        <p>Portfolio</p>
        <Project name="musicStore"/>
        <Project name="techblog"
        github="https://github.com/britt-klose/MVC-Tech_Blog-14"/>
        </div>
    )
};

export default Portfolio;
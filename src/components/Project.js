import React from "react";


function Project (props){
    return(
        <div>
        <h2>{props.name}</h2>
        <p>{props.github}</p>
        <p>{props.deploy}</p>
        <img id='img-cards'src={props.img}/>
        
        </div>
    )
};

export default Project;
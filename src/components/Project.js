import React from "react";


function Project (props){
    return(
        <div>
        <p>Project card</p>
        <p>{props.name}</p>
        <p>{props.github}</p>
        <p>{props.deploy}</p>
        <p>{props.img}</p>
        
        </div>
    )
};

export default Project;
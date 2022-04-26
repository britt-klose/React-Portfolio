import React from "react";
import compDB from '../Assets/images/comp-db.png';
import electric from '../Assets/images/electric.png';
import blog from '../Assets/images/blog.png';
// import  from '../Assets/images/';
// import  from '../Assets/images/';
// import  from '../Assets/images/';


function Project (props){
    return(
        <div>
        <p>project card</p>
        <p>{props.name}</p>
        <p>{props.github}</p>
        
        </div>
    )
};

export default Project;
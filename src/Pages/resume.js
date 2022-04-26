import React from "react";
import resume from '../Assets/images/Brittany';

function Resume (){
    return(
        <div>
             <a class="link" href={resume} target="_blank">
                 <p>Download my resume</p>
             </a>
             <h5>Front End Proficiencies</h5>
             <ul>
                 <li>
                     HTML
                 </li>
                 <li>
                     CSS
                 </li>
                 <li>
                     JavaScript
                 </li>
                 <li>
                     JQuery
                 </li>
                 <li>Bootstrap
                     
                 </li>
                 <li>
                     React
                 </li>
                 </ul>
                <h5>Back End Proficiencies</h5>
            <ul>
                 <li>APIs</li>
                 <li>Nodes</li>
                 <li>Express</li>
                 <li>
                     MySQL, Sequelize
                 </li>
                 <li>
                     NoSQL
                 </li>
                 <li>
                     GraphQL
                 </li>
             </ul>
        </div>
    )
};

export default Resume;
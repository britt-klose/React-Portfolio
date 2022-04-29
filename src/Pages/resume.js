import React from "react";
import resume from '../Assets/images/resume.PDF';
import {Button} from 'react-bootstrap';

function Resume (){
    return(
        <div id="resumePg">
             <a className="link" href={resume} target="_blank">
             <Button variant="outline-secondary" id='resume'>Download Resume</Button>
             </a>
             <br/>
             <br/>
             <h5>Front End Proficiencies</h5>
             <ul>
                 <li>HTML</li>
                 <li>CSS</li>
                 <li>JavaScript</li>
                 <li>JQuery </li>
                 <li>Bootstrap</li>
                 <li>React</li>
             </ul>

            <h5>Back End Proficiencies</h5>
            <ul>
                 <li>APIs</li>
                 <li>Nodes</li>
                 <li>Express</li>
                 <li>MySQL, Sequelize</li>
                 <li>NoSQL</li>
                 <li>GraphQL</li>
             </ul>
             <br/>
        </div>
    )
};

export default Resume;
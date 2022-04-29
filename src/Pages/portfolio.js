import React from "react";
import Project from "../components/Project";
import {Button} from 'react-bootstrap';
import compDB from '../Assets/images/comp-db.png';
import electric from '../Assets/images/electric.png';
import blog from '../Assets/images/blog.png';
import travel from '../Assets/images/travelplan.png';
import profileGen from '../Assets/images/prof-gen.png';
import social from '../Assets/images/socialnet.png';

function Portfolio (){
    return(
     <div className='container' id='portfolioo'>
        <div className="col-xs-12 col-sm-12 col-md-12 justify-content-center">

           <div className="contentBox" id="projects-page">
            <Project name="Tech Blog"
                img={blog}/>
            <Button variant="outline-light"  id="prjct-btn" href="https://github.com/britt-klose/MVC-Tech_Blog-14" target="_blank">See Github</Button>
            <Button variant="outline-light"  id="prjct-btn" href="https://britt-blog-heroku.herokuapp.com/" target="_blank">View App</Button>    
            </div> 
       
            <div className="contentBox" id="projects-page">
            <Project name="Music Store"
                    img={electric}/>
            <Button variant="outline-light"  id="prjct-btn" href="https://github.com/smeske10/Electric-Wipeouts-Mortal-Instruments" target="_blank">See Github</Button>
            <Button variant="outline-light"  id="prjct-btn" href="https://mortal-instruments-music-shop.herokuapp.com/" target="_blank">View App</Button>  
            
            </div>
     
            <div className="contentBox" id="projects-page">
            <Project name="Company Database"
                    img={compDB}/>
            <Button variant="outline-light"  id="prjct-btn" href="https://github.com/britt-klose/Company-Database-12" target="_blank">See Github</Button>
            <Button variant="outline-light"  id="prjct-btn" href="https://drive.google.com/file/d/1FR4t7W4jol459Yst3KbmyvcDxxbv8dVm/view" target="_blank">View App</Button>  
            
            </div>

            <div className="contentBox" id="projects-page">
            <Project name="NoSQL Social Network"
                    img={social}/>
            <Button variant="outline-light"  id="prjct-btn" href="https://github.com/britt-klose/NoSql-Social-Network" target="_blank">See Github</Button>
            <Button variant="outline-light"  id="prjct-btn" href="https://drive.google.com/file/d/1909L42ZT_VOZjcwt8BlB1MLTNz0DBS_W/view" target="_blank">View App</Button> 
           
            </div>

            <div className="contentBox" id="projects-page">
            <Project name="Team Profile Generator"
                    img={profileGen}/>
            <Button variant="outline-light"  id="prjct-btn" href="https://github.com/britt-klose/Team-Profile-Generator" target="_blank">See Github</Button>
            <Button variant="outline-light"  id="prjct-btn" href="https://drive.google.com/file/d/1RHcetlh4kK_cuEdhCoqpMIUx96VB2d0Y/view" target="_blank">View App</Button> 
            
            </div>

            <div className="contentBox" id="projects-page">
            <Project name="Travel Planner"
                    img={travel}/>
            <Button variant="outline-light"  id="prjct-btn" href="https://github.com/britt-klose/Project-1-griffins" target="_blank">See Github</Button>
            <Button variant="outline-light"  id="prjct-btn" href="https://britt-klose.github.io/Project-1-griffins/index.html" target="_blank">View App</Button> 
            </div>
            <br/>
            <br/>

        </div>
     </div>
    )
};

export default Portfolio;
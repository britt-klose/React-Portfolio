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
     <div class='container'>
        <div className="col-xs-12 col-sm-12 col-md-12 justify-content-center">

           <div className="contentBox" id="projects-page">
            <Project name="techblog"></Project>
            <Project github="https://github.com/britt-klose/MVC-Tech_Blog-14">
            <Button className="portfolioBtn projectBtn">GitHub</Button>
            </Project>
            <Project deploy='https://britt-blog-heroku.herokuapp.com/'>
            <Button className="portfolioBtn projectBtn">Deployed</Button>
            </Project>
            <Project img={blog}></Project>
            <p>Languages Used:</p>
            <ul>
                <li>Javascript</li>
                <li>CSS and Bootstrap</li>
                <li>MySQL</li>
                <li>Handlebars</li>
                <li>Node.js</li>
            </ul>
            </div> 
       
            <div className="contentBox" id="projects-page">
            <Project name="musicStore"
                    github="https://github.com/smeske10/Electric-Wipeouts-Mortal-Instruments"
                    deploy='https://mortal-instruments-music-shop.herokuapp.com/'
                    img={electric}/>
            <p>Languages Used:</p>
            <ul>
                <li>Javascript</li>
                <li>CSS and Bootstrap</li>
                <li>MySQL</li>
                <li>Handlebars</li>
                <li>Node.js</li>
                <li>Nodemailer</li>
            </ul>
            </div>
     
            <div className="contentBox" id="projects-page">
            <Project name="Company Database"
                    github="https://github.com/britt-klose/Company-Database-12"
                    deploy='https://drive.google.com/file/d/1FR4t7W4jol459Yst3KbmyvcDxxbv8dVm/view'
                    img={compDB}/>
            <p>Languages Used:</p>
            <ul>
                <li>Javascript</li>
                <li>MySQL</li>
                <li>Node.js</li>
            </ul>
            </div>

            <div className="contentBox" id="projects-page">
            <Project name="NoSQL Social Network"
                    github="https://github.com/britt-klose/NoSql-Social-Network"
                    deploy='https://drive.google.com/file/d/1909L42ZT_VOZjcwt8BlB1MLTNz0DBS_W/view'
                    img={social}/>
            <p>Languages Used:</p>
            <ul>
                <li>Javascript</li>
                <li>NoSQL</li>
                <li>APIs</li>
                <li>Node.js</li>
            </ul>
            </div>

            <div className="contentBox" id="projects-page">
            <Project name="Team Profile Generator"
                    github="https://github.com/britt-klose/Team-Profile-Generator"
                    deploy='https://drive.google.com/file/d/1RHcetlh4kK_cuEdhCoqpMIUx96VB2d0Y/view'
                    img={profileGen}/>
            <p>Languages Used:</p>
            <ul>
                <li>Javascript</li>
                <li>CSS and Bootstrap</li>
                <li>HTML</li>
                <li>Node.js</li>
            </ul>
            </div>

            <div className="contentBox" id="projects-page">
            <Project name="Travel Planner"
                    github="https://github.com/britt-klose/Project-1-griffins"
                    deploy='https://britt-klose.github.io/Project-1-griffins/index.html'
                    img={travel}/>
            <p>Languages Used:</p>
            <ul>
                <li>Javascript</li>
                <li>CSS and Bulma</li>
                <li>HTML</li>
                <li>JQuery</li>
                <li>APIs</li>
            </ul>
            </div>

        </div>
     </div>
    )
};

export default Portfolio;
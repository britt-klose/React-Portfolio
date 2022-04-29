import React from "react";
import './about.css';
import bioPic from '../Assets/images/linkedinpic.jpg';

function About (){
    return(
      <div className='container'>

        <div className="col-xs-12 col-sm-12 col-md-12 justify-content-center">

          <div className="content" id='about-me'>
            <div className="aboutBox">
              <h4> Welcome!</h4>
              <img src={bioPic} alt="Profile"/>
              <p>
                 Hi! I'm Brittany Klose. College graduate from the University of Tampa, class of 2021 with a degreee in marketing.
                After school I moved back home to Pennsylvania and began searching for my career. I worked two internships for a while to get my foot in the grand door of marketing, and had a great time living my passion in real time.
                So much so, that soon I was motivated to take it further and learn more. It was the perfect time too, so I decided I was going to dive deeper into technology.
                Coding was something I always wanted to try. I had taken a couple classes for it in highschool, but never had the opportunity to really divulge in the field. 
              The University of Pennsylvania offered me that opportunity in their extensive coding bootcamp. Computer programming was a big change from marketing, but I
              quickly found it both helpful and fascinating to be on the other end of the user experience. The skills I have obtained from each have definately strengthened my abilities all around in both fields.
              Don't take my word for it though. Head over to my portfolio page to see some of my best projects first hand! 
              </p>
              
              <br/>
          </div>
          
          </div>
        
        </div>
      </div>
    )
};

export default About;
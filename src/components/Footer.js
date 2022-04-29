import React from "react";
import{Icon} from '@iconify/react';

function Footer (){
    return(
        <div class="container">
           <footer className="footerContent">

                <div className="row">
                    <div className="col d-flex justify-content-end text-end">
                        <a href="mailto: brittany.klose@yahoo.com">
                            <Icon icon="dashicons:email" id='icons' style={{fontSize:'30px'}}/>
                        </a>
                    </div>
                    <div className="col d-flex justify-content-center text-center">
                        <a href="https://www.linkedin.com/in/brittany-klose-3a25a7143/" target="_blank">
                            <Icon icon= "fa-brands:linkedin"  id='icons'style={{fontSize:'30px'}}/>
                        </a>
                    </div>
                    <div className="col d-flex justify-content-start text-start">
                        <a href="  https://github.com/britt-klose" target="_blank">
                            <Icon icon="ant-design:github-filled" id='icons' style={{fontSize:'30px'}}/>
                        </a>
                    </div>
                </div>
             
                <br/>
                <br/>
            </footer>
        </div>
               
    )
};

export default Footer;


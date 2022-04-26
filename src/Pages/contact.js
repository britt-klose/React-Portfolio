import React from "react";
import {FormLabel, InputGroup, Textarea} from 'react-bootstrap';

function Contact (){
    return(
    <div class="contactForm">
        <div>
            <p>Write a message to me!</p>
        </div>

        <div class="mb-3">
            <FormLabel class="form-label">Username</FormLabel>
            <InputGroup type='name' class='form-control' id='forminput1' placeholder="John Smith"></InputGroup>
        </div> 
        <div class="mb-3">
        <FormLabel class="form-label">Email</FormLabel>
        <InputGroup type='email' class='form-control' id='forminput1' placeholder="name@example.com"></InputGroup>
        </div>
        <div class="mb-3">
        <FormLabel class="form-label">Message</FormLabel>
        <Textarea class="form-control" id="exformtext" rows='3'></Textarea>
        </div>
    </div>
    )
};

export default Contact;
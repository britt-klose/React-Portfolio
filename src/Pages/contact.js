import React, {useState} from "react";

import {Form, Button} from 'react-bootstrap';

function Contact (){
    const[validated, setValidated]=useState(false);
    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
    
        setValidated(true);
      };
    return(
    <div className="contactForm">
        <div id='title'>
            <h4>Write a message to me!</h4>
        </div>
        <br/>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="validationCustom01">
            <Form.Label id='label'>Name</Form.Label>
            <Form.Control required type="name" placeholder="John Smith" id="contact"/>
            <Form.Text className='text-muted'></Form.Text>
            <Form.Control.Feedback type="invalid" id='message'>
                Please enter a name
            </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="validationCustom02">
            <Form.Label id='label'>Email address</Form.Label>
            <Form.Control required type="email" placeholder="name@example.com" id="contact" />
            <Form.Text className='text-muted'></Form.Text>
            <Form.Control.Feedback type="invalid" id='message'>
            Please enter a valid email address.
        </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="validationCustom03">
            <Form.Label id='label'>Message</Form.Label>
            <Form.Control required as="textarea" rows={7} id="contact"/>
            <Form.Control.Feedback type="invalid" id='message'>
               Message field is blank
            </Form.Control.Feedback>
        </Form.Group>
         <Button variant="primary" type="submit" id="cont-btn">
                Submit
            </Button>
        </Form>
        <br/>
        <br/>
        </div>
    )
};

export default Contact;
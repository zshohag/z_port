import React from 'react';
import emailjs  from 'emailjs-com'
import { Form , Button, Row, Col } from 'react-bootstrap';
import Contact from "../../../Images/Contact/20943953.jpg"

const Mailer = () => {
   
    const sendEmail = e => {

        e.preventDefault()
       
         emailjs.sendForm(
             'service_fhglvie',
             'template_1uj72kg',
             e.target,
             'user_row3du6q2otGcFNO4SPe7'
             ).then(res => { console.log(res) 
            }).catch(err=> console.log(err) )

        }



    return (
        <div  className="m-4 " >
            <h1>Contact With Me</h1>

            <Row>
                <Col>

                <img style={{height:'400px',width:'550px'}} src={Contact} alt="" />
                
                </Col>


                <Col>
                <Form onSubmit={sendEmail}  >

                <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" name="name" placeholder="Enter Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" type="email" name="user_email"  placeholder="Enter email" />
                
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" name="message"  rows={3} />
                </Form.Group>

                <Button variant="primary" type="submit" value="send" >
                SEND MESSAGE 
                </Button>
                </Form>
                </Col>

            </Row>

               
        </div>
    );
};

export default Mailer;
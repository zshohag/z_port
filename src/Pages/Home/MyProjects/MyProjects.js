import React from 'react';
import { Row ,Col, Card, CardGroup } from 'react-bootstrap';
import One from '../../../Images/Top/1.png'
import Two from '../../../Images/Top/2.png'
import Three from '../../../Images/Top/3.png'

const MyProjects = () => {
    return (
        <div className="m-4"  >
            <h3> MY PROJECTS </h3>
             <h3>  </h3> 
            
             <Row xs={1} md={2} className="g-4  ">
  
    <Col>
      <Card className='m-4 p-4 ' >
        <Card.Img variant="top" img-fluid src={One} />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
 
</Row>

        </div>
    );
};

export default MyProjects;
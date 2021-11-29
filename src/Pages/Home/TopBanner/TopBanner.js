import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Typical from 'react-typical'
import './TopBanner.css'
import Z from '../../../Images/z-removebg-preview.png'
import ParticleBackground from '../../../ParticleBackground';

const TopBanner = () => {
    return (
        <div  className="p-3 top " >

            <div className="m-1" >
                

            <Row   >
                
                <Col className='mt-5 pt-5 ' >
                <div className='mt-3   '  >
                <p></p>
                <h1>I'M ZAHIDUL  HAQUE  </h1>
                <h3> <span className='me-1' ></span> 

               <Typical
                loop={Infinity}
                wrapper='b'
                steps={[
                
                   'Web developer', 2000, 
                  'React js developer', 2000, 
                  'Frontend developer', 1000, 
                  
                  
            ]}
              
            />
          </h3> 
          <p>I have extensive knowledge of HTML 5, CSS 3,
            Bootstrap, JavaScript , Es6 , React , React
            Router, Tailwind CSS & Material UI . Combined
            with my communication and problem-solving
            skills, I think I would be an excellent candidate
            for the Web Developer . I am constantly seeking
            out new technologies and staying up-to-date on
            trends in the industry .
          </p>

                
                <h4 ><a href="https://drive.google.com/file/d/1_fKGpFiybLassokv0_XioI8z5FSjpAB0/view?usp=sharing"
                target="_blank" >Download Resume</a></h4>
            
                </div>
                </Col>

                <Col >
                     
                    <div className='image '  >

                     <img style={{width:'400px'}} src={Z} alt="" />
                    </div>
                    
                </Col>


            </Row>
      
                  </div>

        </div>
    );
};

export default TopBanner;
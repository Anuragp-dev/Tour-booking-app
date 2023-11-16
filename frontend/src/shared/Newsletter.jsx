import React from 'react';
import './newsletter.css';
import { Container, Row, Col} from 'reactstrap';
import maleTourist from '../assets/images/male-tourist.png';







const Newsletter = () => {
  return <section className='newsletter'>
    <Container>
        <Row>
            <Col lg='6'>
                <div className="newsletter__content">
                    <h2>Subscribe now to get useful traveling information.</h2>
                    

                    <div className="newsletter__input">
                        <input type="email" placeholder='Enter your email' />

                        <button className='btn newsletter__btn'>Subscribe</button>
                        </div> 
                        <p>
                        Your tourism email newsletter is a way to provide subscribers with fresh content and the inside scoop with tips and promotions. As the most 
                        interacted with methods of digital marketing, email is both accessible and user-friendly.
                        </p>

                    </div>

            </Col>
            <Col lg='6'> 
              <div className="newsletter__img">
                <img src={maleTourist} alt="new" />
              </div>
            </Col>
        </Row>
    </Container>
  </section>
    
  
}

export default Newsletter

import React, { useState , useContext } from 'react';
import '../style/login.css';
import { Container, Row, Col, Form,  FormGroup, Button } from 'reactstrap';
import {Link, useNavigate} from "react-router-dom";
import regImg from '../assets/images/register.png';
import userIcon from '../assets/images/user.png';
import { AuthContext } from '../context/AuthContext';
import { BASE_URL } from '../utils/config';




const Register = () => {


  const [credentials , setCredentials] = useState({
    username :undefined,
    email : undefined,
    password:undefined,
    
});

const navigate = useNavigate();


const {dispatch} = useContext(AuthContext)

  const handleChange = (event) => {
    setCredentials(prev => ({...prev,[event.target.id]:event.target.value}))
}

const handleClick = async event => {
  event.preventDefault();
  try {

    const res = await fetch(`${BASE_URL}/auth/register`, {
    method : 'post',
    headers:{
      'content-type':'application/json'
    },

    body : JSON.stringify(credentials)
  });
    const result = await res.json();

    if(!res.ok) alert(result.message)

    dispatch({type:'REGISTER_SUCCESS'})
    navigate('/login');

  } catch(err) {

  alert(err.message);

  }

}


  return<section>
    <Container>
      <Row>
        <Col lg='8' className='m-auto'>
          <div className="login__container d-flex justify-content-between">
            <div className="login__img">
              <img src={regImg} alt="login" />
            </div>


            <div className="login__form">
              <div className="user">
                <img src={userIcon} alt="n" />
              </div>
              <h2>Register</h2>
              <Form onSubmit={handleClick}>

              <FormGroup>
                  <input type="text" placeholder='Username' required id='username' onChange={handleChange} />
                </FormGroup>


                <FormGroup>
                  <input type="email" placeholder='Email' required id='email' onChange={handleChange} />
                </FormGroup>

                <FormGroup>
                  <input type="password" placeholder='Password' required id='password' onChange={handleChange} />
                </FormGroup>

                <Button className='btn secondary__btn auth__btn' type='submit'>Create Account</Button>
              </Form>
              <p> Already have an account? <Link to='/login'>Login</Link></p>
            </div>
          </div>

        </Col>
      </Row>
    </Container>
  </section>
}

export default Register;
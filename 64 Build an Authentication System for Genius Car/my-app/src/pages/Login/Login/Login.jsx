/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react';
import { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProvider';

const Login = () => {
    const {signIn} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/category/0'
    console.log(location)

    const handleSignIn =(event)=>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        
        // ====================
        signIn(email, password)
        .then(result=>{
            const LoggedUser = result.user;
            console.log(LoggedUser);
            navigate(from, {replace:true});
        })
        .catch(error=>console.log(error));
    }
    return (
        <Container className='w-50 mx-auto'>
            <h3>Please Login</h3>
            <Form  onSubmit={handleSignIn}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control required name="email" type="email" placeholder="Enter email" />
                    
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control required name="password" type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>


                <Button variant="primary" type="submit">
                    Login
                </Button>
                <br />
                <Form.Text className="text-secondary">
                    Don't Have an Account <Link to="/register">Register</Link>
                </Form.Text>

                <Form.Text className="text-danger">
                </Form.Text>
                <Form.Text className="text-success">
                </Form.Text>
            </Form>
        </Container>
    );
};

export default Login;
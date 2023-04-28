/* eslint-disable no-unused-vars */
import React from 'react';
import { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProvider';
import { useState } from 'react';

const Register = () => {
    const {createUser, profileUpdate} = useContext(AuthContext);
    const [accepted, setAccepted] = useState(false);

    const handleRegister = (event)=>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photo, email, password);

        // =========================
        createUser(email, password)
        .then(result=>{
            const LoggedUser = result.user;
            console.log(LoggedUser);

            // =========================
            profileUpdate(LoggedUser, name, photo)
            .then(()=>{})
            .catch(error=>{console.log(error)});
        })
        .catch(error=>{console.log(error.message)});
    }
    const handleAccepted = (event) =>{
        const form = event.target;
        const check  = form.checked;
        setAccepted(check);
    }

    return (
        <Container className='w-50 mx-auto'>
            <h3>Please Register</h3>
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control required name="name" type="text" placeholder="Enter name" />
                    
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control required name="photo" type="text" placeholder="Enter photo" />
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Email</Form.Label>
                    <Form.Control required name="email" type="email" placeholder="Enter email" />
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control required name="password" type="password" placeholder="Password" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check onClick={handleAccepted} type="checkbox" name="accept" label={<>Accept <Link to="/terms"> terms and Conditions</Link> </>} />
                </Form.Group>


                <Button variant="primary" type="submit" disabled={!accepted}>
                    Login
                </Button>
                <br />
                <Form.Text className="text-secondary">
                    Already Have an Account? <Link to="/login">Login </Link>
                </Form.Text>

                <Form.Text className="text-danger">
                </Form.Text>
                <Form.Text className="text-success">
                </Form.Text>
            </Form>
        </Container>
    );
};

export default Register;
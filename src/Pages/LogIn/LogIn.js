import React, { useRef } from 'react';
import { Button, Form, Spinner } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';

import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const LogIn = () => {
    // protecting private route
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";

    const navigate = useNavigate()
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    
    const emailRef = useRef('');
    const passwordRef = useRef('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const email = emailRef.current.value; // get email from input
        const password = passwordRef.current.value; // get password from input

        signInWithEmailAndPassword(email, password);
    }


    if (user) {
        navigate(from, { replace: true });
    }



    if (loading) {
        return <div className='p-5 m-5 d-flex align-items-center justify-content-center'>
            <Spinner animation="border" size="sm" />
            <Spinner animation="border" />
            <Spinner animation="border" size="sm" />
        </div>;
    }


    return (
        <section className='p-5'>
            <div className="container p-5">
                <h2 className='text-center text-primary my-4'>Please Log In</h2>

                <Form onSubmit={handleSubmit} className='w-75 mx-auto'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <small>Not registered yet? <Link to="/register">register now</Link></small>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Log IN
                    </Button>
                </Form>

            </div>
        </section>
    );
};

export default LogIn;
import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Register = () => {

const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value; // get name from input
    const email = e.target.email.value; // get email from input
    const password = e.target.password.value; // get password from input

    console.log(email, password, name);
}

    return (
        <section className='p-5'>
            <div className="container p-5">
                <h2 className='text-center text-primary my-4'>Please Register</h2>

                <Form onSubmit={handleSubmit} className='w-75 mx-auto'>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control name='name' type="text" placeholder="Enter name"  />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control name='email' type="email" placeholder="Enter email" required  />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control name='password' type="password" placeholder="Password" required  />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <small>Already registered? <Link to="/login">login now</Link></small>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Register
                    </Button>
                </Form>

            </div>
        </section>
    );
};

export default Register;
import React from 'react';
import { Card, Col } from 'react-bootstrap';

const SingleExpart = ({ expart }) => {
    const { name, id, img } = expart || {};
    return (
        <Col>
            <Card>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>
                        <h3 className='text-center'>{name}</h3>
                    </Card.Title>
                    <button className='btn btn-outline-primary d-block mx-auto w-75 mt-4'>View Profile</button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default SingleExpart;
import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const SingleService = ({ service }) => {
    const navigate = useNavigate()
    const { id, name, description, img } = service || {};
    return (
        <Col>
            <Card>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {description.slice(0, 150)}
                    </Card.Text>
                    <button onClick={() => navigate(`/service/${id}`)} className='btn btn-outline-primary d-block mx-auto w-75 mt-4'>View Details</button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default SingleService;
import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import useServices from '../../../customHooks/useServices';
import SingleService from '../SingleService/SingleService';

const Services = () => {
    const { services, setServices } = useServices();
    return (
        <div id='services' className='py-5'>
            <h1 className='text-center mb-5'>Our Services = {services.length}</h1>
            <Row xs={1} md={2} className="g-4">
                
            {
                services.map(service => <SingleService 
                    key={service.id}
                    service={service} />)
            }
            </Row>
        </div>
    );
};

export default Services;
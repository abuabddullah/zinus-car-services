import React from 'react';
import { Link, useParams } from 'react-router-dom';

const DirectDynamicRoutingForDetail = () => {
    const { id } = useParams();
    return (
        <div>
            DirectDynamicRoutingForDetail({id})

            <div className='p-5 d-flex justify-content-center align-items-center'>
                <Link to='/checkOut' className='btn btn-primary rounded-3'>Proceed Check Out</Link>
            </div>
        </div>
    );
};

export default DirectDynamicRoutingForDetail;
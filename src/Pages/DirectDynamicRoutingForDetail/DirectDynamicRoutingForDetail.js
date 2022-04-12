import React from 'react';
import { useParams } from 'react-router-dom';

const DirectDynamicRoutingForDetail = () => {
    const { id } = useParams();
    return (
        <div>
            DirectDynamicRoutingForDetail({id})
        </div>
    );
};

export default DirectDynamicRoutingForDetail;
import React from 'react';
import { Row } from 'react-bootstrap';
import expart1 from '../../../resources/exparts-img/expert-1.jpg';
import expart2 from '../../../resources/exparts-img/expert-2.jpg';
import expart3 from '../../../resources/exparts-img/expert-3.jpg';
import expart4 from '../../../resources/exparts-img/expert-4.jpg';
import expart5 from '../../../resources/exparts-img/expert-5.jpg';
import expart6 from '../../../resources/exparts-img/expert-6.png';
import SingleExpart from '../SingleExpart/SingleExpart';

let exparts = [
    {id:1, name:'expart1', img:expart1},
    {id:2, name:'expart2', img:expart2},
    {id:3, name:'expart3', img:expart3},
    {id:4, name:'expart4', img:expart4},
    {id:5, name:'expart5', img:expart5},
    {id:6, name:'expart6', img:expart6},
]

const Exparts = () => {
    return (
        <div id='exparts' className='py-5'>
            <h1 className='text-center mb-5'>Our exparts = {exparts.length}</h1>
            <Row xs={1} md={2} className="g-4">
                
            {
                // exparts.map(expart => console.log(expart))
                exparts.map(expart => <SingleExpart 
                    key={expart.id}
                    expart={expart} />)
            }
            </Row>
        </div>
    );
};

export default Exparts;
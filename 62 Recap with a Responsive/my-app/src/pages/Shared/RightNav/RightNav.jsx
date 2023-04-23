// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaFacebook , FaTwitter, FaInstagram } from 'react-icons/fa';
import QZone from '../QZone/QZone';
import bg from '../../../assets/my-assets/bg.png'

const RightNav = () => {
    return (
        <div>
            <h4 className='mt-4'>Login With</h4>
            <Button className="mb-2" variant="outline-primary"> <FaGoogle/> Login with Google</Button>
            <Button variant="outline-secondary"> <FaGithub/> Login with GitHub</Button>
            <h4>Find us on</h4>
            <ListGroup>
                <ListGroup.Item> <FaFacebook/> Facebook </ListGroup.Item>
                <ListGroup.Item> <FaTwitter/> Twitter </ListGroup.Item>
                <ListGroup.Item> <FaInstagram/> Instagram </ListGroup.Item>
                <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
            </ListGroup>
            <QZone></QZone>
            <div>
                <img src={bg} alt="" />
            </div>
        </div>
    );
};

export default RightNav;
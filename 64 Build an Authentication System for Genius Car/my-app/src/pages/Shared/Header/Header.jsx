/* eslint-disable no-unused-vars */
import React from 'react';
import logo from '../../../assets/my-assets/logo.png'
import moment from 'moment/moment';
import { Button, Container } from 'react-bootstrap';
import Marquee from "react-fast-marquee"
import { AuthContext } from '../../../Providers/AuthProvider';

const Header = () => {
    
    return (
        <Container className='mt-4'>
            <div className='text-center'>
                <img src={logo} alt="" />
                <p className='text-secondary'> <small>Journalism Without Fear or Favour</small> </p>
                {/* Moment.js */}
                <p>{moment().format("dddd, MMMM D, YYYY")}</p>
            </div>
            <div className='d-flex'>
                <Button variant='danger'>Latest</Button>

                {/* npm install react-fast-marquee */}
                <Marquee className='text-danger fw-bold' speed={50}>
                Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...
                </Marquee>
            </div>

           
        </Container>
    );
};

export default Header;
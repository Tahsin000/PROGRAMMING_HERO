import React from 'react';
import {Outlet} from 'react-router-dom';
import Header from '../Header/Header';
import Container from 'react-bootstrap/Container';

const Hader = () => {
    return (
        <Container  >
            <Header></Header>
            <Outlet/>
        </Container >
    );
};

export default Hader;
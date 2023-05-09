import React from 'react';
import useTitle from '../../hooks/hooks';

const Home = () => {
    useTitle('Home');
    return (
        <div>
            This is Home Page
        </div>
    );
};

export default Home;
import React, { useEffect, useState } from 'react';
import'./LoadData.css';
import User from './User';

const LoadData = () => {
    const [data, setData] = useState([]);
    useEffect(()=>{
        const url = 'https://jsonplaceholder.typicode.com/posts'
        fetch(url)
        .then(res => res.json())
        .then(data => setData(data));
    },[])
    return (
        <div>
            {
               data.map(post => <User userId={post.userId} id={post.id} title={post.title} body={post.body} ></User>) 
            }
        </div>
    );
};

export default LoadData;
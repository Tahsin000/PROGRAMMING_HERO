import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './post.css'

const Post = ({post}) => {
    const {id, title, body} = post;
    const naigate = useNavigate();

    const handlNavigation = () =>{
        naigate(`/post/${id}`)
    }
    return (
        <div className='post'>
            <h5>ID: {id}</h5>
            <h5>{title}</h5>
            <p>{body}</p>
            <Link to={`/post/${id}`}>Show Details</Link>
            <Link to={`/post/${id}`}><button>Show post Details</button></Link>
            <button onClick={handlNavigation}>With Button Handler</button>
        </div>
    );
};

export default Post;
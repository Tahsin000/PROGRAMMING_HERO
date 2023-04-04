import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const PostDetail = () => {
    const post = useLoaderData();
    const {id, title, useId, body} = post;
    const nagigation = useNavigate();


    const handleGoBack = ()=>{
        nagigation(-1);
    }
    return (
        <div>
            <h3>Detail about your post of : {id}</h3>
            <h5>{title}</h5>
            <p><small>{body}</small></p>
            <button onClick={handleGoBack}>Go Back</button>
        </div>
    );
};

export default PostDetail;
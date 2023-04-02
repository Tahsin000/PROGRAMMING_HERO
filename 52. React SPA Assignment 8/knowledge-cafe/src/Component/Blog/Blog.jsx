import React from 'react';
import './Blog.css'
import { TagInfo } from './Tag';

const Blog = (props) => {
    const {id, AuthorName, BlogTitle, BlogCoverImage, AuthorImage, ReadTime, PublishDate, Tag} = props.blog;
    const MarkAsRead = props.MarkAsRead;
    const BookMarkAction = props.BookMarkAction;

    return (
        <div>
            <img className='img-fluid BlogImg' src={BlogCoverImage} alt="" />
                <div className="d-flex align-items-end justify-content-between">
                    <div className='mt-3 d-flex align-items-center'>
                        <img style={{width:"60px"}} className='img-fluid rounded-circle' src={AuthorImage} alt="" />
                        <div className="ms-3 mt-3">
                            <h4 className='AuthorName'>{AuthorName}</h4>
                            <p className='PublishDate'>{PublishDate}</p>
                        </div>
                    </div>
                    <div>
                        <p className='text-secondary'>{ReadTime} min read <span onClick={()=> {BookMarkAction(props.blog)}} className='ms-2 BookMarkStyle'><i className="bi bi-bookmark"></i></span> </p>
                    </div>
                </div>
                <div className="">
                    <h1 className='mt-3 fw-bold'>{BlogTitle}</h1>
                    <div className="my-2">   
                    {
                        Tag.map((tg, index) =><TagInfo key={index} tg={tg}></TagInfo>)
                    }
                    </div>
                    <p href="" className='MarkAsRead' onClick={()=> {MarkAsRead(props.blog)}}>Mark as read</p>
                </div>
                <hr className='my-5' />
        </div>
    );
};

export default Blog;
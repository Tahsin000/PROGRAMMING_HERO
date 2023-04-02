import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';
import Bookmarks from '../Bookmarks/Bookmarks';
import './Blogs.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Blogs = () => {
    const [data, setData] = useState([]);
    const [MarkAsReadTimer, setMarkAsReadTimer] = useState(0);
    const [bookmark, setBookmark] = useState([]);
    let newBookmark;
    useEffect(()=>{
        const url = '../../../public/assets/data.json'
        fetch(url)
        .then(res => res.json())
        .then(data => setData(data));
    }, []);
    const MarkAsRead = (BlogsInfo) =>{
        const MarkAsReadSum = parseInt(MarkAsReadTimer) + BlogsInfo.ReadTime
        // console.log(BlogsInfo.ReadTime)
        setMarkAsReadTimer(MarkAsReadSum);
    }
    useEffect(()=>{
        // const storedBookmark = bookmark;
        // const saveBookmark = [];
        // (saveBookmark.length === 0) ? saveBookmark.push(bookmark):saveBookmark.push(storedBookmark);
        
        // setBookmark(saveBookmark);
        // console.log(saveBookmark)
        setBookmark([]);

    },[data]);

    const isContain = (a, b) =>{
        const check = a.find(bm => bm.id === b.id);
        return (typeof check === 'undefined');
    }
    const BookMarkAction = (BlogsInfo) =>{
        if (isContain(bookmark, BlogsInfo) === false){
            toast.warning("You have already bookmarked this",{
                position:"top-center"
            });
        } 
        const newBookmark = [BlogsInfo, ...bookmark];
        setBookmark(newBookmark);
    }
    
    return (
        <div className="mt-3 row Blogs g-5">
            <div className='col-xl-8 '>
                {
                    data.map(blog => <Blog key={blog.id} BookMarkAction={BookMarkAction} MarkAsRead={MarkAsRead} blog={blog}></Blog>)
                    // <Blog></Blog>   
                }
            </div>
            <div className="col-xl-4">
                {
                    // console.log(bookmark)
                }
                <Bookmarks MarkAsReadTimer={MarkAsReadTimer} bookmark={bookmark}></Bookmarks>
                <ToastContainer />
            </div>
        </div>
    );
};

export default Blogs;
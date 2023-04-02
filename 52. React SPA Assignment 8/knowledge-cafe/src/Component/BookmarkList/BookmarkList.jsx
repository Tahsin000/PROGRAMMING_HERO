import React from 'react';
import BookmarkItem from '../BookmarkItem/BookmarkItem';
import './BookmarkList.css'

const BookmarkList = (props) => {
    const {bookmark} = props;
    return (
        <div>
            <div className="mt-3 card BookmarkListBG">
                {
                    // console.log(bookmark)
                }
                <h3 className='m-2 mt-4 BookmarkListTitle'>Bookmarked Blogs : {bookmark.length}</h3>
                {
                    bookmark.map((bm, i)=><BookmarkItem key={i} bookmark={bm.BlogTitle}></BookmarkItem>)
                }
                
            </div>
        </div>
    );
};

export default BookmarkList;
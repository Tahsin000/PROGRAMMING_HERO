import React from 'react';
import BookmarkList from '../BookmarkList/BookmarkList';
import './Bookmarks.css';

const Bookmarks = (props) => {
    const {MarkAsReadTimer, bookmark} = props; 
    
    return (
        <div>
            <div className="card SpentTime">
                <h3 className="card-body text-center SpentTimeTitle">
                    Spent time on read : {MarkAsReadTimer} min
                </h3>
            </div>
                <BookmarkList bookmark={bookmark}></BookmarkList>
        </div>
    );
};

export default Bookmarks;
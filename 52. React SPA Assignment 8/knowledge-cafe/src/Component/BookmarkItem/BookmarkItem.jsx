import React from 'react';
import './BookmarkItem.css'

const BookmarkItem = (props) => {
    // console.log(props.bookmark);
    return (
        <div>
            <div className="card m-2 Bookmarkitem p-3 text-center shadow-sm">
                {props.bookmark}
            </div>
        </div>
    );
};

export default BookmarkItem;
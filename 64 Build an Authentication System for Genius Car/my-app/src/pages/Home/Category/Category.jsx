/* eslint-disable no-unused-vars */
import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCard from '../NewsCard/NewsCard';

const Categroy = () => {
    const {id} = useParams();
    const categoryNews = useLoaderData(); 

    return (
        <div>
            {
                id && <h2>This is Category: {categoryNews.length}</h2>
            }
            {
                categoryNews.map(news => <NewsCard 
                    key={news._id}
                    news={news}
                ></NewsCard> )
            }
        </div>
    );
};

export default Categroy;
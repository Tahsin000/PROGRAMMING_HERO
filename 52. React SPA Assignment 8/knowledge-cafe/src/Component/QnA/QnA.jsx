import React, { useEffect, useState } from 'react';
import Info from './Info';
import './QnA.css'

const QnA = () => {
    const[QnaData, setQnaData] = useState([]);
    useEffect(()=>{
        const url = '../../../public/assets/QNA.json'
        fetch(url)
        .then(res => res.json())
        .then(data => setQnaData(data));
    },[]);
    return (
        <div>
            {
                QnaData.map((blog, i) =><Info key={i} blog={blog}></Info>)
            }
            
        </div>
    );
};

export default QnA;
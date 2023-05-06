import React, { useState } from 'react';
import Blog from './Blog';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const Blogs = () => {
    const data = [
        {
            img:"./blogs/_(4).png",
            title:"Differences between uncontrolled and controlled components?",
            subtitle:"Controlled components are those whose values are controlled by the parent component. The parent component maintains the state of the controlled component, and whenever the state is changed, it is passed down to the controlled component as props. || Uncontrolled components, on the other hand, are those whose values are not controlled by the parent component. They are self-contained, and their state is managed internally by the component.",
        },
        {
            img:"./blogs/_(3).png",
            title:"How to validate React props using PropTypes?",
            subtitle:"PropTypes is a typechecking library that is used to validate the types of props passed to a component. It helps in debugging and catching errors early in the development process. || Import the PropTypes library || Add the propTypes object to your component|| Define the expected prop types and their requirements in the propTypes object. ",
        },
        {
            img:"./blogs/_(2).png",
            title:"difference between nodejs and express js?",
            subtitle:"Node.js is a JavaScript runtime built on the Chrome V8 JavaScript engine. It allows developers to write server-side applications in JavaScript, which makes it a popular choice for building scalable network applications. || Express.js, on the other hand, is a web application framework built on top of Node.js. It provides a set of tools and features for building web applications, such as routing, middleware, and templating engines. ",
        },
        {
            img:"./blogs/_(1).png",
            title:"What is a custom hook, and why will you create a custom hook?",
            subtitle:" a custom hook is a reusable function that allows you to share logic between components. Custom hooks are a way to extract reusable logic from components, making them more modular and easier to maintain. Custom hooks are created using the useEffect and useState || Overall, custom hooks can be a powerful tool for creating more efficient and modular code in React.",
        }
    ]

    const [loader, setLoader] = useState(false);
    const downloadPDF = () =>{
        const capture = document.querySelector('.container-render-pdf');
        setLoader(true);
        html2canvas(capture).then((canvas)=>{
          const imgData = canvas.toDataURL('img/png');
          const doc = new jsPDF('p', 'mm', 'a3');
          const componentWidth = doc.internal.pageSize.getWidth();
          const componentHeight = doc.internal.pageSize.getHeight();
          doc.addImage(imgData, 'PNG', 0, 0, componentWidth, componentHeight);
          setLoader(false);
          doc.save('HHJN.pdf');
        })
    }
    return (
        <div>
            <div className="container mx-auto my-10">
                <div className=" flex justify-end p-3">
                    <button onClick={downloadPDF} disabled={!(loader===false)} className='border-2 px-2 py-1 rounded-lg flex justify-end hover:bg-slate-100'>PDF Download</button>
                </div>
                <div className="container-render-pdf grid md:grid-cols-1 gap-3 p-3">
                    <Blog data={data[0]}></Blog>
                    <Blog data={data[1]}></Blog>
                    <Blog data={data[2]}></Blog>
                    <Blog data={data[3]}></Blog>
                </div>
            </div>
        </div>
    );
};

export default Blogs;
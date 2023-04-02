import React from 'react';
import './QnA.css'

const Info = (props) => {
    return (
        <div>
            <div className="accordion-item">
                <h2 className="accordion-header " id="headingOne">
                    <button className="accordion-button accordionTitle" type="button" data-bs-toggle="collapse" data-bs-target={"#__"+props.blog.id} aria-expanded="true" aria-controls={"__"+props.blog.id}>
                        {props.blog.Question}
                    </button>
                </h2>
                <div id={"__"+props.blog.id} className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        {props.blog.Answer}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Info;
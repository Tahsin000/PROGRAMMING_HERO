/* eslint-disable no-unused-vars */
import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { FaArrowLeft } from 'react-icons/fa';
import EditorInSights from '../EditorInSights/EditorInSights';

const News = () => {
    const news = useLoaderData();
    const {_id, title, details, image_url, category_id} = news;

    return (
        <div>
            <Card>
                <Card.Img variant="top" src={image_url} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {details}
                    </Card.Text>
                    <Link to={`/category/${category_id}`}>
                        <Button variant="danger"> <FaArrowLeft></FaArrowLeft> All News in this category</Button>
                    </Link>
                </Card.Body>
            </Card>
            <EditorInSights></EditorInSights>
        </div>
    );
};

export default News;
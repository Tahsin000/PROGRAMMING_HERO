/* eslint-disable no-unused-vars */
import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import img_1 from '../../../assets/my-assets/1.png'
import img_2 from '../../../assets/my-assets/2.png'
import img_3 from '../../../assets/my-assets/3.png'

const LeftEditorInSights = () => {
    return (
        <Row xs={1} className="g-4 mt-4">
            <Col>
                <Card>
                    <Card.Img variant="top" src={img_1} />
                    <Card.Body>
                        <Card.Title>Our Babys First Homecoming</Card.Title>
                        <Card.Text>
                            Our little bundle of joy is all grown up and standing tall, holding onto the Our First Home poster, as we make our way back to the place where it all began. The poster is a testament to our journey as new parents and our babys growth from a tiny newborn to a big, confident baby.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card>
                    <Card.Img variant="top" src={img_2} />
                    <Card.Body>
                        <Card.Title>Why Play Is Crucial For Infant Development</Card.Title>
                        <Card.Text>
                            As adults, we may underestimate the importance of playtime, but for babies, it is a crucial component of their development. Watching babies play together can be an incredibly heartwarming sight, but it’s more than just cute, it’s an essential part of their growth.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card>
                    <Card.Img variant="top" src={img_3} />
                    <Card.Body>
                        <Card.Title>Man Records Video in Playing Field</Card.Title>
                        <Card.Text>
                            In a recent incident, a man was spotted recording a video in a playing field. The man, whose identity is still unknown, was seen standing in the middle of the field with his phone camera pointed at the players. 
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    );
};

export default LeftEditorInSights;
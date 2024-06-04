import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import randImg from '../images/rand-img1.png';
import { Container } from 'react-bootstrap';

export default function ImageCarousel() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
        <Container style={{paddingTop: '30px'}}>
            <Carousel>
                <Carousel.Item>
                    <img style={{ height: '70vh' }}
                        className="d-block w-100"
                        src={randImg}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Lorem Ipsum</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img style={{ height: '70vh' }}
                        className="d-block w-100"
                        src={randImg}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Lorem Ipsum</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img style={{ height: '70vh' }}
                        className="d-block w-100"
                        src={randImg}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Lorem Ipsum</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </Container>
    );
}
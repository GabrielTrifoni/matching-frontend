/* eslint-disable react/prop-types */
import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import randImg from "../images/rand-img1.png";
import { Container } from "react-bootstrap";
import '../styles/Carousel.css'

export default function ImageCarousel({
  approvedProject,
  concludedProject,
  newsItem,
}) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Container style={{ paddingTop: "30px" }}>
      <Carousel data-bs-theme="dark">
        {approvedProject && (
          <Carousel.Item>
            <img
              style={{ height: "70vh", width: "100%" }}
              className="d-block"
              src={approvedProject.attachment?.url || "randImg1"}
              alt="First slide"
            />
            <Carousel.Caption>
                <div className="carousel-custom-caption">      
                    <h3>{approvedProject.title}</h3>
                    <p>{approvedProject.description}</p>
                </div>
            </Carousel.Caption>
          </Carousel.Item>
        )}
        {concludedProject && (
          <Carousel.Item>
            <img
              style={{ height: "70vh" }}
              className="d-block w-100"
              src={concludedProject.attachment?.url || randImg}
              alt="Second slide"
            />
            <Carousel.Caption>
                <div className="carousel-custom-caption">      
                    <h3>{concludedProject.title}</h3>
                    <p>{concludedProject.description}</p>
                </div>
            </Carousel.Caption>
          </Carousel.Item>
        )}
        {newsItem && (
          <Carousel.Item>
            <img
              style={{ height: "70vh" }}
              className="d-block w-100"
              src={newsItem.attachment?.url || randImg}
              alt="Third slide"
            />
            <Carousel.Caption>
                <div className="carousel-custom-caption">      
                    <h3>{newsItem.title}</h3>
                    <p>{newsItem.description}</p>
                </div>
            </Carousel.Caption>
          </Carousel.Item>
        )}
      </Carousel>
    </Container>
  );
}

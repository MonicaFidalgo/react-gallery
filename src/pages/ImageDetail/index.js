import React from "react";
import { useLocation } from "react-router-dom";
import { Row, Col, Container } from "react-bootstrap";

function ImageDetail(props) {
  const location = useLocation();
  console.log(location.state);
  if (location.state) {
    const productImages = location.state.images?.map((img, index) => {
      return (
        <Col md={6} key={index}>
          <div className="img-detail__img">
            <img src={img} alt="details" />
          </div>
        </Col>
      );
    });
    return (
      <Container className="img-detail">
        <Row>
          <Col lg={5}>
            <small>Canvas</small>
            <h2>{location.state.title}</h2>
            <hr className="title-divider" />
            <ul className="img-detail__list">
              <li>
                <span>{location.state?.description}</span>
              </li>
              <li>
                <span>{location.state?.materials}</span>
              </li>
              <li>
                {" "}
                <span>
                  {location.state?.height} x {location.state?.width} cm
                </span>
              </li>
              <li>
                <span>{location.state?.year}</span>
              </li>
            </ul>
          </Col>
          <Col lg={7}>
            <div className="img-detail__img">
              <img src={location.state.url} alt="img" />
            </div>
          </Col>
        </Row>
        <Row className="mt-5 mb-5">{productImages}</Row>
      </Container>
    );
  } else {
    return "Loading";
  }
}

export default ImageDetail;

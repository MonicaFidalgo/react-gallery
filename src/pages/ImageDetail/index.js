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
          <Col lg={4}>
            {" "}
            <h4>{location.state.name}</h4>
            <ul>
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
          <Col lg={8}>
            <div className="img-detail__img">
              <img src={location.state.url} alt="img" />
            </div>
          </Col>
        </Row>
        <Row>{productImages}</Row>
      </Container>
    );
  } else {
    return "Loading";
  }
}

export default ImageDetail;

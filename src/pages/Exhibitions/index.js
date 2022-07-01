import React from "react";
import Teaser from "../../components/Teaser";
import exhibitions from "../../data/exhibitions.js";
import { Row, Col, Container } from "react-bootstrap";

function Exhibitions(props) {
  const teasersArray = exhibitions.map((data) => (
    <Col md={12} key={data.id}>
      <Teaser
        title={data.title}
        subtitle={data.location}
        description={data.description}
        imgPath={data.img}
        imageRight={data.pictureRight}
        date={data.date}
      />
    </Col>
  ));
  return (
    <Container className="exhibitions">
      <Row> {teasersArray}</Row>
    </Container>
  );
}

export default Exhibitions;

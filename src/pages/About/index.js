import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import sergio from "../../assets/sergio-gameiro.jpeg";

function About(props) {
  return (
    <Container className="about">
      <Row>
        <Col lg={5} md={12} o>
          <img src={sergio} alt="" className="about__img" />
        </Col>
        <Col lg={{ span: 6, offset: 1 }} md={12}>
          <div className="about__description">
            <h2>Sérgio Gameiro</h2>
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old.
            </p>
            <p>
              {" "}
              Richard McClintock, a Latin professor at Hampden-Sydney College in
              Virginia, looked up one of the more obscure Latin words,
              consectetur, from a Lorem Ipsum passage, and going through the
              cites of the word in classical literature, discovered the
              undoubtable source.
            </p>{" "}
            <p>
              Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus
              Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero,
              written in 45 BC. This book is a treatise on the theory of ethics,
              very popular during the Renaissance.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default About;

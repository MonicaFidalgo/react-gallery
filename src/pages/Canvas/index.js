import React from "react";
import useFirestore from "../../hooks/useFirestore";
import ImageGrid from "../../components/ImageGrid";
import { Container } from "react-bootstrap";

function Canvas() {
  const { docs } = useFirestore("images");
  return (
    <Container>
      <ImageGrid data={docs} />
    </Container>
  );
}

export default Canvas;

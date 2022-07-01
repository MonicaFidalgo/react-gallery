import React from "react";
import useFirestore from "../../hooks/useFirestore";
import ImageGrid from "../../components/ImageGrid";
import { Container } from "react-bootstrap";

function Canvas() {
  const { docs } = useFirestore("images");
  const data = useFirestore("images");
  console.log(data);
  return (
    <Container>
      <ImageGrid data={docs} />
    </Container>
  );
}

export default Canvas;

import React from "react";
import useFirestore from "../../hooks/useFirestore";
import ImageGrid from "../../components/ImageGrid";
import Loading from "../../components/Loading";
import { Container } from "react-bootstrap";

function Canvas() {
  const { docs } = useFirestore("images");
  console.log(docs.length);
  return (
    <Container>
      {!docs.length ? <Loading /> : <ImageGrid data={docs} />}
    </Container>
  );
}

export default Canvas;

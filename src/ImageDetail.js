import React from "react";
import { useParams } from "react-router-dom";
import useFirestore from "./hooks/useFirestore";

function ImageDetail(props) {
  const { state } = useParams();
  // const location = useLocation();
  const { docs } = useFirestore("images");
  const thisProduct = docs.find((prod) => prod.id === state);
  console.log(thisProduct);
  return (
    <div className="img-grid">
      {thisProduct ? <img src={thisProduct.url} /> : "Loading"}
    </div>
  );
}

export default ImageDetail;

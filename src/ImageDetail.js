import React from "react";
import { useLocation, useParams } from "react-router-dom";

function ImageDetail(props) {
  const { state } = useParams();
  const location = useLocation();
  console.log(location, state);
  return (
    <div className="img-grid">
      {location.state ? <img src={location.state.url} /> : "Loading"}
    </div>
  );
}

export default ImageDetail;

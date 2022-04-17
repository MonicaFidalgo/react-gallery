import React from "react";
import { useLocation } from "react-router-dom";

function ImageDetail(props) {
  const location = useLocation();
  console.log(location);
  return (
    <div className="img-grid">
      {location.state ? <img src={location.state.url} /> : "Loading"}
    </div>
  );
}

export default ImageDetail;

import React from "react";
import { useLocation, useParams } from "react-router-dom";

function ImageDetail(props) {
  const { state } = useParams();
  const location = useLocation();
  console.log("location", location, "state", state);
  if (location.state) {
    return (
      <div className="img-detail">
        <img src={location.state.url} alt="img" />
        <h4>{location.state.name}</h4>
      </div>
    );
  } else {
    return "Loading";
  }
}

export default ImageDetail;

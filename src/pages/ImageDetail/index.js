import React from "react";
import { useLocation } from "react-router-dom";

function ImageDetail(props) {
  const location = useLocation();
  console.log(location.state);
  if (location.state) {
    const productImages = location.state.images?.map((img, index) => {
      return (
        <div key={index}>
          <img src={img} alt="details" />
        </div>
      );
    });
    return (
      <div className="img-detail">
        <img src={location.state.url} alt="img" />
        <h4>{location.state.name}</h4>
        {productImages}
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
      </div>
    );
  } else {
    return "Loading";
  }
}

export default ImageDetail;

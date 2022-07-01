import React from "react";
import "./teaser.scss";

function Teaser(props) {
  if (props.imageRight) {
    return (
      <div className="teaser teaser--right">
        <div className="teaser__wrapper container">
          <div className="teaser__content">
            <date>{props.date}</date>
            <h2 className="color--secondary">{props.title}</h2>
            {props.subtitle && <span>{props.subtitle}</span>}
            <p className="mt-3">{props.description}</p>
          </div>
          <div className="teaser__image">
            <img
              src={props.imgPath}
              alt="teaser with icon and text"
              width="480"
              height="360"
            />
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="teaser teaser--left">
        <div className="teaser__wrapper container">
          <div className="teaser__image">
            <img
              src={props.imgPath}
              alt="teaser with icon and text"
              width="480"
              height="360"
            />
          </div>
          <div className="teaser__content">
            <date>{props.date}</date>
            <h2 className="color--secondary">{props.title}</h2>
            {props.subtitle && <span>{props.subtitle}</span>}
            <p className="mt-3">{props.description}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Teaser;

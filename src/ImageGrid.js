import React from "react";
import useFirestore from "./hooks/useFirestore";
import { Link } from "react-router-dom";

const ImageGrid = () => {
  const { docs } = useFirestore("images");
  return (
    <div>
      <h2>Images</h2>
      <div className="img-grid">
        {docs &&
          docs.map((doc) => (
            <Link
              className="img-wrap"
              key={doc.id}
              to={`/details/${doc.id}`}
              state={{ url: `${doc.url}` }}
            >
              {" "}
              <img src={doc.url} alt="firestore data" />
            </Link>
          ))}
      </div>
    </div>
  );
};

export default ImageGrid;

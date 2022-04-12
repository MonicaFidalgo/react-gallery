import React from "react";
import useFirestore from "./hooks/useFirestore";

const ImageGrid = () => {
  const { docs } = useFirestore("images");
  return (
    <div>
      <h2>Images</h2>
      <div className="img-grid">
        {docs &&
          docs.map((doc) => (
            <div className="img-wrap" key={doc.id}>
              <img src={doc.url} alt="firestore data" />
            </div>
          ))}
      </div>
    </div>
  );
};

export default ImageGrid;
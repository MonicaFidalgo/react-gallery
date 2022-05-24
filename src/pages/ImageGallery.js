import React from "react";
import useFirestore from "../hooks/useFirestore";
import images from "../mockdata";
import ImageGrid from "../components/ImageGrid";

function ImagePage() {
  const { docs } = useFirestore("images");
  console.log(images);
  return (
    <div>
      <h2>Images</h2>

      <ImageGrid data={docs} />
    </div>
  );
}

export default ImagePage;

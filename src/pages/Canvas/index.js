import React from "react";
import useFirestore from "../../hooks/useFirestore";
import ImageGrid from "../../components/ImageGrid";

function Canvas() {
  const { docs } = useFirestore("images");
  const data = useFirestore("images");
  console.log(data);
  return (
    <div>
      <h2>Images</h2>

      <ImageGrid data={docs} />
    </div>
  );
}

export default Canvas;

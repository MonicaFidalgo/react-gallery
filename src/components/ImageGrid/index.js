import { Link } from "react-router-dom";

function ImageGrid(props) {
  const images = props.data.map((item) => (
    <Link
      className="img-wrap"
      key={item.id}
      to={`/details/${item.id}`}
      state={{ url: `${item.url}` }}
    >
      {" "}
      <img src={item.url} alt="firestore data" />
    </Link>
  ));

  return <div className="img-grid">{images}</div>;
}

export default ImageGrid;

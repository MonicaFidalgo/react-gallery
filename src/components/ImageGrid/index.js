import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";

function ImageGrid(props) {
  const images = props.data.map((item) => (
    <Col lg={4} md={6} sm={12} key={item.id}>
      <Link
        className="img-wrap"
        to={`/details/${item.title.replace(/[%\s]/g, "")}`}
        state={item}
      >
        {" "}
        <img src={item.url} alt="firestore data" />
        <div className="img__layer">
          <h3 className="img__description">{item.title}</h3>
        </div>
      </Link>
    </Col>
  ));

  return <Row className="img-grid">{images}</Row>;
}

export default ImageGrid;

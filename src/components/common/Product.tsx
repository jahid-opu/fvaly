import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
interface IProps {
  product: IProduct;
}

const Product = ({ product }: IProps) => {
  const { title, image, id } = product;
  return (
    <Col md={3} className="pb-3">
      <Link to={`/product/${id}`}>
        <Card className="h-100">
          <Card.Img
            variant="top"
            style={{
              width: "6rem",
              height: "6rem",
              margin: "auto",
              padding: "12px",
            }}
            src={image}
          />
          <Card.Body>
            <Card.Text>{title}</Card.Text>
          </Card.Body>
        </Card>
      </Link>
    </Col>
  );
};

export default Product;

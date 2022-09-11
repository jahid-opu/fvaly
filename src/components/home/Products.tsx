import Product from "components/common/Product";
import { Container, Row } from "react-bootstrap";

interface IProps {
  products: IProduct[];
}

const Products = ({ products }: IProps) => {
  return (
    <div className="my-5">
      <Container>
        <h2 className="mb-4">Latest products</h2>
        <Row>
          <Product />
        </Row>
      </Container>
    </div>
  );
};

export default Products;

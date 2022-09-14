import Product from "components/common/Product";
import { Container, Row } from "react-bootstrap";
import ProductsSkeleton from "skeletons/ProductsSkeleton";

interface IProps {
  products: IProduct[] | null;
  isLoading: boolean;
}

const Products = ({ products, isLoading }: IProps) => {
  return (
    <div className="my-5">
      <Container>
        <h2 className="mb-4">Latest products</h2>

        {isLoading && <ProductsSkeleton />}
        {!isLoading && (
          <Row>
            {products?.map((product: IProduct) => (
              <Product key={product.id} product={product} />
            ))}
          </Row>
        )}
      </Container>
    </div>
  );
};

export default Products;

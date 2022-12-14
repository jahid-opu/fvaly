import { Col, Row } from "react-bootstrap";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ProductsSkeleton = () => {
  return (
    <Row>
      {Array(12)
        .fill("")
        ?.map((product, index) => (
          <Col md={3} className="mb-3" key={index}>
            <Skeleton style={{ borderRadius: 10 }} height={320} />
          </Col>
        ))}
    </Row>
  );
};

export default ProductsSkeleton;

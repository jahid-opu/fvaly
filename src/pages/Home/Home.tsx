import Banner from "components/home/Banner";
import Products from "components/home/Products";
import { useEffect, useState } from "react";
import ProductService from "services/ProductService";

const Home = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  useEffect(() => {
    ProductService.getProducts().then((res) => setProducts(res));
    console.log("Products are here:", products);
  }, []);

  return (
    <div>
      <Banner />
      <Products products={products} />
    </div>
  );
};

export default Home;

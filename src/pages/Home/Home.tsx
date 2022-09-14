import Banner from "components/home/Banner";
import Products from "components/home/Products";
import useAsync from "hooks/useAsync";
import ProductService from "services/ProductService";

const Home = () => {
  // const [products, setProducts] = useState<IProduct[]>([]);
  // useEffect(() => {
  //   ProductService.getProducts().then((res) => setProducts(res));
  // }, []);

  const { data: products, isLoading } = useAsync(ProductService.getProducts);

  return (
    <div>
      <Banner />
      <Products products={products} isLoading={isLoading} />
    </div>
  );
};

export default Home;

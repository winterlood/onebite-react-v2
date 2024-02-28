import { useSearchParams } from "react-router-dom";

const Home = () => {
  const [params, setParams] = useSearchParams();

  return <div>Home</div>;
};

export default Home;

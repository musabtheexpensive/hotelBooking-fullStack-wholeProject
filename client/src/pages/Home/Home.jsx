import { useSearchParams } from "react-router-dom";
import Categories from "../../components/Categories/Categories";
import Rooms from "../../components/Rooms/Rooms";

const Home = () => {
  const [params, setParams] = useSearchParams();
  const category = params.get("category");
  console.log(category);
  return (
    <div>
      {/* {Categories Section} */}
      <Categories></Categories>
      {/* {Rooms Section} */}
      <Rooms></Rooms>
    </div>
  );
};

export default Home;

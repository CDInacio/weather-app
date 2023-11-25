import { useNavigate } from "react-router-dom";

import SearchInput from "../components/input/searchInput";
import UseSearch from "../hooks/UseSearch";

const Home = () => {
  const navigate = useNavigate();
  const { results } = UseSearch();

  return (
    <main className="w-screen h-screen flex items-center  flex-col relative">
      <SearchInput />
    </main>
  );
};

export default Home;

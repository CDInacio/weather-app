import { useState } from "react";

import axios from "axios";

axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";

interface ICity {
  id: number;
  name: string;
  state: string;
  country: string;
}

const Home = () => {
  const [city, setCity] = useState("");
  const [results, setResults] = useState<ICity[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const handleSearch = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        `http://apiadvisor.climatempo.com.br/api/v1/locale/city?name=${city}&token=02f4d93d43de2aced8cf31cd80a791e9`
      );
      const data = await response.data;
      setResults(data);
      setShowResults(true);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="w-screen h-screen flex items-center  flex-col relative">
      <input
        onChange={(e) => {
          setCity(e.target.value);
          setShowResults(false);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSearch();
          }
        }}
        type="text"
        placeholder="Informe o nome da cidade..."
        className="border-2 px-5 py-2 rounded border-neutral-400 w-96  mt-52"
      />
      <div className="w-96 rounded mt-2 overflow-hidden">
        {results &&
          results.map((result) => (
            <p className="shadow-lg px-3 py-5 bg-teal-300 mb-2">
              {result.name}
            </p>
          ))}
      </div>
    </main>
  );
};

export default Home;

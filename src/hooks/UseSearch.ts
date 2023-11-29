import { useState } from "react";

import { CitySearch } from "../types";
import { api } from "../utils/api";

const UseSearch = () => {
  const [city, setCity] = useState("");
  const [results, setResults] = useState<CitySearch[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async () => {
    setIsLoading(true);
    try {
      const response = await api.get(
        `https://api.weatherapi.com/v1/current.json?key=8281a2fb7f824218ab7140941232411&q=${city}`,
        {
          params: {
            lang: "pt",
          },
        }
      );
      const data = await response.data;
      console.log(data);
      setResults(data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return { city, setCity, handleSearch, results, isLoading };
};

export default UseSearch;

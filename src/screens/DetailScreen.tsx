import { useQuery } from "react-query";
import { useParams } from "react-router-dom";

import axios from "axios";

import { CurrentWeather } from "../@types/current";
import { Forecast } from "../@types/forecast";

const getCurrentWeather = async (
  countryName: string
): Promise<CurrentWeather> => {
  const response = await axios.get(
    `http://api.weatherapi.com/v1/current.json?key=${
      import.meta.env.VITE_KEY
    }&q=${countryName}`
  );

  return response.data;
};

const getForecast = async (countryName: string): Promise<Forecast> => {
  const response = await axios.get(
    `http://api.weatherapi.com/v1/current.json?key=${
      import.meta.env.VITE_KEY
    }&q=${countryName}`
  );

  return response.data;
};

const DetailScreen = () => {
  const { countryName } = useParams();

  const {
    isLoading,
    isError,
    data: currentWeather,
  } = useQuery({
    queryKey: ["currentWeather", countryName],
    queryFn: () => getCurrentWeather(countryName!),
  });

  if (isLoading) return <p>loading...</p>;
  return <p>{countryName}</p>;
};

export default DetailScreen;

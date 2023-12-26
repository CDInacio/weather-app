import { useEffect } from "react";
import { useParams } from "react-router-dom";

import Card from "../components/Card/Card";
import CurrentIndicators from "../components/CurrentIndicators/CurrentIndicators";
import Forecast from "../components/Forecast/Forecast";
import SearchInput from "../components/input/searchInput";
import { useWeather } from "../context/forecastContext";

const WeatherDetails = () => {
  const { city } = useParams();
  const { handleSearch, isLoading } = useWeather();

  useEffect(() => {
    handleSearch(city!);
  }, [city]);

  if (isLoading) {
    return (
      <div className="w-screen h-screen overflow-hidden flex flex-col items-center justify-center ">
        <div className="flex justify-center items-center ">
          <div className="animate-spin rounded-full border-t-4 border-blue-500 border-solid border-8 h-16 w-16"></div>
        </div>
        <p className="mt-5 font-medium">Carregando informações...</p>
      </div>
    );
  }

  return (
    <div className="px-5 overflow-x-hidden">
      <Card>
        <SearchInput className="my-5 w-full md:w-[50%]" />
        <h1 className="text-2xl font-medium mb-6">Resumo de hoje</h1>
        <CurrentIndicators />
        <div>
          <h1 className="text-2xl font-medium my-6">Próximos 3 dias</h1>
          <Forecast />
        </div>
      </Card>
    </div>
  );
};

export default WeatherDetails;

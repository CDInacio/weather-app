import { useEffect } from "react";
import { useParams } from "react-router-dom";

import Card from "../components/Card/Card";
import CurrentIndicators from "../components/CurrentIndicators/CurrentIndicators";
import Forecast from "../components/Forecast/Forecast";
import SearchInput from "../components/input/searchInput";
import { useWeather } from "../context/forecastContext";

const WeatherDetails = () => {
  const { city } = useParams<{ city: string }>();
  const { handleSearch, isLoading, error } = useWeather();

  let content = null;

  useEffect(() => {
    handleSearch(city!);
  }, [city]);

  if (error?.error.code && !isLoading) {
    content = (
      <Card className="flex flex-col items-center">
        <SearchInput className="my-5" />
        <p className="font-medium text-sm">
          Não foi possível encontrar informações sobre o local.
        </p>
        <img
          alt="icone de informação não encontrada"
          src="/images/no-data.svg"
          className="w-[300px] h-[300px]"
        />
      </Card>
    );
  }

  if (isLoading) {
    content = (
      <div className="flex flex-col w-screen h-screen items-center justify-center">
        <div className="flex justify-center items-center ">
          <div className="animate-spin rounded-full border-t-4 border-blue-500 border-solid border-8 h-16 w-16"></div>
        </div>
        <p className="mt-5 font-medium">Carregando informações...</p>
      </div>
    );
  }

  if (!isLoading && !error?.error.code) {
    content = (
      <>
        <Card>
          <SearchInput className="my-5" />
          <h1 className="text-2xl font-medium mb-6">Resumo de hoje</h1>
          <CurrentIndicators />
          <div>
            <h1 className="text-2xl font-medium my-6">Próximos 3 dias</h1>
            <Forecast />
          </div>
        </Card>
      </>
    );
  }

  return (
    <div className="w-screen min-h-screen flex justify-center   container mx-auto px-5 my-10 ">
      {content}
    </div>
  );
};

export default WeatherDetails;

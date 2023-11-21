import { useState } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";

import axios from "axios";

import { ForecastInterface } from "../@types";
import CurrentWeather from "../components/CurrentWeather/Index";
import Error from "../components/Feedback/Error";
import LoadingSpinner from "../components/Feedback/LoadingSpinner";
import Forecast from "../components/Forecast/Index";
import Container from "../components/Layout/Container";
import Location from "../components/Location/Index";
import Menu from "../components/Navigation/Menu";

const getForecast = async (countryName: string): Promise<ForecastInterface> => {
  const response = await axios.get(
    `https://api.weatherapi.com/v1/forecast.json?key=${
      import.meta.env.VITE_KEY
    }&q=${countryName}`
  );

  return response.data;
};
const DetailScreen = () => {
  const [dataShown, setDataShown] = useState<string>("todayy");
  const { countryName } = useParams();

  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["forecast", countryName],
    queryFn: () => getForecast(countryName!),
    refetchOnWindowFocus: false,
    retry: 2,
  });

  const handleDataShow = (text: string) => {
    setDataShown(text);
  };

  const locationProps = {
    temp_c: data?.current.temp_c,
    temp_f: data?.current.temp_f,
    icon: data?.current.condition.icon,
    text: data?.current.condition.text,
    cloud: data?.current.cloud,
    name: data?.location.name,
    region: data?.location.region,
  };

  if (isError) return <Error />;

  return (
    <Container>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <div className="flex mt-24 sm:mt-0 flex-col  sm:flex-row justify-center  mx-6 container">
          <Location {...locationProps} />
          <div className="bg-panel over dark:bg-darkPanel  p-5 rounded-bl-xl rounded-br-xl sm:rounded-bl-none sm:rounded-tr-xl sm:rounded-br-xl">
            <Menu dataShown={dataShown} onDataShow={handleDataShow} />
            {dataShown === "today" ? (
              <CurrentWeather current={data?.current} />
            ) : (
              <Forecast forecast={data?.forecast.forecastday[0]} />
            )}
          </div>
        </div>
      )}
    </Container>
  );
};

export default DetailScreen;

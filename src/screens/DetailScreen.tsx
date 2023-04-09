import React, { useContext, useState } from "react";
import { useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";

import axios from "axios";

import { ForecastInterface } from "../@types";
import CurrentWeather from "../components/CurrentWeather/Index";
import Forecast from "../components/Forecast/Index";
import TextField from "../components/Inputs/TextField";
import Container from "../components/Layout/Container";
import Menu from "../components/Navigation/Menu";
import { ScaleContext } from "../context/scaleContext";
import { ThemeContext } from "../context/themeContext";

// const getCurrentWeather = async (
//   countryName: string
// ): Promise<CurrentWeatherT> => {
//   const response = await axios.get(
//     `http://api.weatherapi.com/v1/current.json?key=${
//       import.meta.env.VITE_KEY
//     }&q=${countryName}`
//   );

//   return response.data;
// };

const getForecast = async (countryName: string): Promise<ForecastInterface> => {
  const response = await axios.get(
    `http://api.weatherapi.com/v1/forecast.json?key=${
      import.meta.env.VITE_KEY
    }&q=${countryName}`
  );

  return response.data;
};
const DetailScreen = () => {
  const navigate = useNavigate();

  const { state: scale } = useContext(ScaleContext);
  const ctx = useContext(ThemeContext);

  const [dataShown, setDataShown] = useState<string>("today");
  const [q, setQ] = useState("");
  const { countryName } = useParams();

  const { isLoading, isError, data } = useQuery({
    queryKey: ["forecast", countryName],
    queryFn: () => getForecast(countryName!),
  });

  function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    navigate(`/${q}`);
  }

  const handleDataShow = (text: string) => {
    setDataShown(text);
  };

  return (
    <Container>
      {isLoading ? (
        <p className="font-bold dark:text-neutral-200">Carregando...</p>
      ) : (
        <div className="flex mt-24 sm:mt-0 flex-col  sm:flex-row justify-center  mx-6 container">
          <div className="bg-panelLighter dark:bg-darkPanelLighter rounded-tl-xl rounded-tr-xl sm:rounded-tr-none sm:rounded-tb-none sm:rounded-tl-xl sm:rounded-bl-xl p-6">
            <TextField
              onSearch={handleSearch}
              onSetQ={setQ}
              placeholder="Procure por lugares..."
            />
            <div className="relative mt-20">
              <img
                className="absolute -top-10 right-14 sm:-top-16 sm:right-6"
                src={data?.current.condition.icon}
              />
              <span className="text-6xl mt-5 dark:text-neutral-100 duration-500">
                {scale === "celcius"
                  ? data?.current.temp_c + "°C"
                  : data?.current.temp_f + "°F"}
              </span>
            </div>
            <h4 className="my-5 text-neutral-800 dark:text-neutral-200">
              <b>Monday</b>, 16:00
            </h4>
            <hr className="bg-panel h-[1px]" />
            <div className="flex flex-col">
              <p className="mt-5 mb-3">{data?.current.condition.text}</p>
              <p className="dark:text-neutral-200">
                Nuvens - {data?.current.cloud}%
              </p>
              <h3 className="mt-5 font-bold dark:text-neutral-100">
                {data?.location.name},{" "}
                <span className="font-normal dark:text-neutral-100">
                  {data?.location.region}
                </span>
              </h3>
            </div>
          </div>
          <div className="bg-panel over dark:bg-darkPanel  p-6 rounded-bl-xl rounded-br-xl sm:rounded-bl-none sm:rounded-tr-xl sm:rounded-br-xl">
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

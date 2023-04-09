import React, { useContext } from "react";

import { Forecastday } from "../../@types/forecast";
import { ScaleContext } from "../../context/scaleContext";
import Card from "../Surfaces/Card";

interface Forecast {
  forecast: Forecastday | undefined;
}

const Forecast: React.FC<Forecast> = ({ forecast }) => {
  const { state: scale } = useContext(ScaleContext);

  const boldText = "text-4xl font-bold";
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mt-5">
      <Card title="índice UV">
        <div
          className={`${boldText} text-neutral-900 dark:text-neutral-100 text-center `}
        >
          <p>{forecast?.day.uv}</p>
        </div>
      </Card>
      <Card title="Estado do vento">
        <div className=" text-neutral-900 dark:text-neutral-100 text-center flex justify-center items-end">
          <p className={`${boldText} `}>{forecast?.day.maxwind_kph}</p>
          <span className="ml-1 mb-1">km/h</span>
        </div>
      </Card>
      <Card title="Nascer e pôr do sol">
        <div className="flex items-center ">
          <img className="w-10 h-10" src="/icons/static/sunrise.svg" />
          <p className="ml-5 text-neutral-900  font-bold dark:text-neutral-100">
            {forecast?.astro.sunrise}
          </p>
        </div>
        <div className="flex items-center">
          <img className="w-10 h-10" src="/icons/static/sunset.svg" />
          <p className="ml-5 text-neutral-900 dark:text-neutral-100 font-bold">
            {forecast?.astro.sunset}
          </p>
        </div>
      </Card>
      <Card title="Humidade">
        <div className="flex justify-center">
          <p className="text-4xl font-bold text-neutral-900 dark:text-neutral-100">
            {forecast?.day.avghumidity}%
          </p>
        </div>
      </Card>
      <Card title="Visibilidade">
        <div className=" text-neutral-900 dark:text-neutral-100 text-center flex justify-center items-end">
          <p className={boldText}>{forecast?.day.avgvis_km}</p>
          <span className="ml-1 mb-1">km</span>
        </div>
      </Card>
      <Card title="Temperatura média">
        <div className=" text-neutral-900 dark:text-neutral-100  text-center flex justify-center items-end">
          <p className={boldText}>
            {scale === "celcius"
              ? forecast?.day.avgtemp_c + "°C"
              : forecast?.day.avgtemp_f + "°F"}
          </p>
        </div>
      </Card>
    </div>
  );
};

export default Forecast;

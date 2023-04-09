import React, { useContext } from "react";

import { Current } from "../../@types/current";
import { ScaleContext } from "../../context/scaleContext";
import Card from "../Surfaces/Card";

interface Props {
  current: Current | undefined;
}

const CurrentWeather: React.FC<Props> = ({ current }) => {
  const { state: scale } = useContext(ScaleContext);

  const boldText = "text-4xl font-bold";

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mt-5 ">
      <Card title="índice UV">
        <div
          className={`${boldText} text-neutral-900 dark:text-neutral-100 text-center`}
        >
          <p>{current?.uv}</p>
        </div>
      </Card>
      <Card title="Estado do vento">
        <div className=" text-neutral-900 dark:text-neutral-100  text-center flex justify-center items-end">
          <p className={`${boldText}`}>{current?.wind_kph}</p>
          <span className="ml-1 mb-1">km/h</span>
        </div>
      </Card>
      <Card title="Sensação térmica">
        <div className="flex justify-center">
          <p className="text-4xl font-bold text-neutral-900 dark:text-neutral-100 ">
            {scale === "celcius"
              ? current?.feelslike_c + "°C"
              : current?.feelslike_f + "°F"}{" "}
          </p>
        </div>
      </Card>
      <Card title="Humidade">
        <div className="flex justify-center">
          <p className="text-4xl font-bold text-neutral-900 dark:text-neutral-100 ">
            {current?.humidity}%
          </p>
        </div>
      </Card>
      <Card title="Visibilidade">
        <div className=" text-neutral-900 dark:text-neutral-100  text-center flex justify-center items-end">
          <p className={boldText}>{current?.vis_km}</p>
          <span className="ml-1 mb-1">km</span>
        </div>
      </Card>
      <Card title="Precicitação">
        <div className=" text-neutral-900 dark:text-neutral-100  text-center flex justify-center items-end">
          <p className={boldText}>{current?.precip_mm}</p>
          <span className="ml-1 mb-1">mm</span>
        </div>
      </Card>
    </div>
  );
};

export default CurrentWeather;

import { useState } from "react";

import { useWeather } from "../../context/forecastContext";
import { format } from "../../helpers/format";
import { Forecastday } from "../../types";
import Peek from "../Peek";
import ForecastNav from "./FortcastNav";

const Forecast = () => {
  const { state } = useWeather();

  const [forecastDay, setForecastDay] = useState("Todos");
  let forecastData: Forecastday[] = [];

  if (forecastDay === "Todos") {
    forecastData = state?.forecast?.forecastday;
  }

  if (forecastDay !== "Todos") {
    forecastData = state?.forecast?.forecastday.filter(
      (day) => format(day.date, "DD [de] MMM") === forecastDay
    );
  }

  return (
    <>
      <ForecastNav
        menuDays={state?.forecast?.forecastday}
        selectedDay={forecastDay}
        onChooseForecast={setForecastDay}
      />
      {forecastData?.map((day, i) => (
        <div key={day.date + i}>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 ">
            {day.hour
              .filter((h, i) => i % 3 === 0 && i < 12)
              .map((h, i) => (
                <div
                  className="flex flex-col bg-neutral-200 mx-2 px-5 py-3 my-2 rounded text-sm"
                  key={i}
                >
                  <div className="flex justify-between">
                    <div className="flex items-center">
                      <div className="flex flex-col">
                        <time className="text-neutral-600 font-medium">
                          {format(h.time, "DD [de] MMM")}
                        </time>
                        <time className="font-semibold">
                          {format(h.time, "HH:mm")}
                        </time>
                      </div>
                    </div>
                    <div className="flex  items-center">
                      <img
                        src={h.condition.icon}
                        alt=""
                        className="w-[20px] h-[20px] mr-1"
                      />
                      <Peek
                        temperature={h.temp_c}
                        conditionText={h.condition.text}
                      />
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default Forecast;

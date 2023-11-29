import moment from "moment";
import "moment/locale/pt-br";

import { useWeather } from "../../context/forecastContext";
import { format } from "../../helpers/format";
import { truncate } from "../../helpers/truncate";
import { Current, Forecast, Forecastday } from "../../types";
import Icon from "../Icon";
import IndicatorItem from "./IndicatorItem";

moment.locale("pt-br");

const getIndicators = (current: Current, forecast: Forecast) => [
  {
    text: "Veloc. do vento",
    value: `${current?.wind_kph} km/h`,
    icon: "wind_speed",
    iconSize: 30,
  },
  {
    text: "Pressão do ar",
    value: `${current?.pressure_mb} hPa`,
    icon: "preasure",
    iconSize: 30,
  },
  {
    text: "Humidade",
    value: `${current?.humidity}%`,
    iconSize: 30,
    icon: "humidity",
  },
  {
    text: "Visibilidade",
    value: `${current?.vis_km} km`,
    iconSize: 30,
    icon: "visibility",
  },
  {
    text: "Nascer do sol",
    value: `${forecast?.forecastday[0].astro.sunrise}`,
    iconSize: 30,
    icon: "sun_rise",
  },
  {
    text: "Por do sol",
    value: `${forecast?.forecastday[0].astro.sunset}`,
    iconSize: 30,
    icon: "sun_set",
  },
];

const CurrentIndicators = () => {
  const { state } = useWeather();
  const indicators = getIndicators(state.current, state.forecast);

  return (
    <div className="flex flex-col md:flex-row h-full md:h-[350px]">
      <div className="flex w-[250px] items-center px-10 py-5 border-[1px] mb-10 h-full border-neutral-800 rounded bg-neutral-200">
        <div>
          <div>
            <img src={state.current?.condition.icon} width={55} height={55} />
            <h3 className="text-3xl font-medium my-3">
              {state.current?.temp_c} °C
            </h3>
            <p>{state.current?.condition.text}</p>
          </div>
          <hr className="bg-neutral-600 h-[3px] my-4 " />
          <div className="flex items-center mb-2 ">
            <Icon type="location" />
            <p className="ml-2 text-sm md:text-base">{state.location?.name}</p>
          </div>
          <div className="flex items-center">
            <Icon type="date" />
            <p className="ml-2 text-sm md:text-base">
              {truncate(
                moment(state.location?.localtime).format("DD [de] MMMM"),
                10
              )}
            </p>
          </div>
        </div>
      </div>
      <div className="md:ml-4 flex flex-col md:flex-row gap-4 justify-between w-full  ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full  md:w-2/3">
          {indicators.map((indicator) => (
            <div key={indicator.text} className=" ">
              <IndicatorItem {...indicator} />
            </div>
          ))}
        </div>
        <div className="flex flex-col justify-center w-full md:w-1/3 bg-neutral-200 rounded px-6 py-4">
          {state.forecast?.forecastday.map(
            (day: Forecastday, index: number) => (
              <div key={index} className="">
                {day.hour
                  .filter((hour, idx) => idx % 12 === 0)
                  .map((hourstate, hourIndex) => (
                    <div
                      key={hourIndex}
                      className=" flex items-center justify-between text-sm py-2"
                    >
                      <div className="flex flex-col">
                        <time className="text-sm  text-neutral-600">
                          {format(hourstate.time, "dddd")}
                        </time>
                        <time className="font-semibold">
                          {format(hourstate.time, "HH:mm")}
                        </time>
                      </div>
                      <span className="font-semibold">
                        {hourstate.temp_c} °C
                      </span>
                    </div>
                  ))}
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default CurrentIndicators;

import { useMemo } from "react";

import moment from "moment";

import { Forecastday } from "../../types";

interface ForecastNavProps {
  onChooseForecast: (date: string) => void;
  selectedDay: string;
  menuDays: Forecastday[];
}

const ForecastNav = ({
  onChooseForecast,
  selectedDay,
  menuDays,
}: ForecastNavProps) => {
  const forecastDates = useMemo(() => {
    return menuDays.map((day) => moment(day.date).format("DD [de] MMM"));
  }, []);

  const foretecastMenu = useMemo(() => {
    return [
      {
        text: "Todos",
      },
      {
        text: forecastDates[0],
      },
      {
        text: forecastDates[1],
      },
      {
        text: forecastDates[2],
      },
    ];
  }, [forecastDates]);

  return (
    <nav className="mb-5">
      {foretecastMenu.map((date, i) => (
        <button
          key={`${date.text} ${i}`}
          onClick={() => onChooseForecast(date.text)}
          className={`text-sm font-semibold text-neutral-600 mr-4 rounded px-3 md:px-5 py-2 md:py-3 mt-4 md:mt-0 ${
            selectedDay === date.text
              ? "bg-neutral-800 text-white"
              : "bg-neutral-200"
          }`}
        >
          {date.text}
        </button>
      ))}
    </nav>
  );
};

export default ForecastNav;

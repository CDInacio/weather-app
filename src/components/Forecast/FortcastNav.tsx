import { useMemo } from "react";

import moment from "moment";

import { dummyData } from "../../DUMMY_DATA";

interface ForecastNavProps {
  onChooseForecast: (date: string) => void;
  day: string;
}

const ForecastNav = ({ onChooseForecast, day }: ForecastNavProps) => {
  const forecastDates = useMemo(() => {
    return dummyData.forecast.forecastday.map((day) =>
      moment(day.date).format("DD [de] MMM")
    );
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
          className={`text-sm font-semibold text-neutral-600 mr-4 rounded px-5 py-3 ${
            day === date.text ? "bg-neutral-800 text-white" : "bg-neutral-200"
          }`}
        >
          {date.text}
        </button>
      ))}
    </nav>
  );
};

export default ForecastNav;

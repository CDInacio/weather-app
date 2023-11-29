import { createContext, useContext, useState } from "react";

import axios from "axios";

import { WeatherData } from "../types";

export type ForecastContextType = {
  state: WeatherData;
  handleSearch: (city: string) => void;
  isLoading: boolean;
};

const ForecastContext = createContext<ForecastContextType>(
  {} as ForecastContextType
);

const ForecastProvider = ({ children }: any) => {
  const [state, setState] = useState<WeatherData>({} as WeatherData);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async (city: string | undefined) => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        `https://api.weatherapi.com/v1/forecast.json?key=f4b344c2a21f428e90011107232711&q=${city}&days=3&aqi=no&alerts=no
        `,
        {
          params: {
            lang: "pt",
          },
        }
      );
      const data = await response.data;
      console.log(data);
      setState(data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ForecastContext.Provider value={{ state, handleSearch, isLoading }}>
      {children}
    </ForecastContext.Provider>
  );
};

export { ForecastProvider };

export const useWeather = () => {
  const context = useContext(ForecastContext);

  if (!context) {
    throw new Error("useWeather must be used within a ForecastProvider");
  }

  return context;
};

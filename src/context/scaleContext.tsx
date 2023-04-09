import React, { createContext, useState } from "react";

interface Props {
  children: React.ReactNode;
}

interface ScaleContextType {
  state: string;
  setState: (str: string) => void;
}

const DEFAULT_VALUES = {
  state: "celcius",
  setState: (str: string) => {},
};

export const ScaleContext = createContext<ScaleContextType>(DEFAULT_VALUES);

export const ScaleContextProvider = ({ children }: Props) => {
  const [state, setState] = useState(DEFAULT_VALUES.state);

  return (
    <ScaleContext.Provider value={{ state, setState }}>
      {children}
    </ScaleContext.Provider>
  );
};

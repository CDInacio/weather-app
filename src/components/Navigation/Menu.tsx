import React from "react";

import Switch from "../Inputs/Switch";

interface Props {
  onDataShow: (text: string) => void;
  dataShown: string;
}

const Menu: React.FC<Props> = ({ onDataShow, dataShown }) => {
  return (
    <nav className="flex flex-col sm:flex-row sm:justify-between">
      <ul className="flex">
        <li
          className={`${
            dataShown === "today"
              ? "font-medium  dark:text-neutral-50 mr-5"
              : " mr-5 cursor-pointer dark:text-neutral-700 duration-300"
          }`}
          onClick={() => onDataShow("today")}
        >
          Agora
        </li>
        <li
          className={`${
            dataShown === "forecast"
              ? "font-medium dark:text-neutral-300"
              : "cursor-pointer dark:text-neutral-700 duration-300"
          } `}
          onClick={() => onDataShow("forecast")}
        >
          {" "}
          Previsões para hoje
        </li>
      </ul>
      <Switch />
    </nav>
  );
};

export default Menu;

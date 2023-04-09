import React, { useContext } from "react";

import { ScaleContext } from "../../context/scaleContext";

const Switch = () => {
  const { state, setState } = useContext(ScaleContext);

  const activeStyle =
    "bg-darkPanelLighter dark:bg-panelLighter dark:text-darkPanelLighter text-neutral-200 font-bold";

  const inactiveStyle =
    "bg-panelLighter dark:bg-neutral-700 dark:text-neutral-300";

  const commonStyle =
    "rounded-full w-9 h-9 flex items-center justify-center cursor-pointer duration-300";

  return (
    <div className="flex mt-5 sm:mt-0">
      <span
        onClick={() => setState("celcius")}
        className={`mr-5 ${commonStyle} ${
          state === "celcius" ? activeStyle : inactiveStyle
        }`}
      >
        °C
      </span>
      <span
        onClick={() => setState("fahrenheit")}
        className={` ${commonStyle}  ${
          state === "fahrenheit" ? activeStyle : inactiveStyle
        }`}
      >
        °F
      </span>
    </div>
  );
};

export default Switch;

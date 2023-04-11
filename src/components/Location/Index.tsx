import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { ScaleContext } from "../../context/scaleContext";
import TextField from "../Inputs/TextField";

interface Props {
  icon: string | undefined;
  temp_c: number | undefined;
  temp_f: number | undefined;
  text: string | undefined;
  cloud: number | undefined;
  name: string | undefined;
  region: string | undefined;
}

const Location = ({
  icon,
  temp_c,
  temp_f,
  text,
  cloud,
  name,
  region,
}: Props) => {
  const { state: scale } = useContext(ScaleContext);

  const navigate = useNavigate();
  const [q, setQ] = useState("");

  function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    navigate(`/${q}`);
  }
  return (
    <div className="bg-panelLighter dark:bg-darkPanelLighter rounded-tl-xl rounded-tr-xl sm:rounded-tr-none sm:rounded-tb-none sm:rounded-tl-xl sm:rounded-bl-xl p-6">
      <TextField
        onSearch={handleSearch}
        onSetQ={setQ}
        placeholder="Procure por lugares..."
      />
      <div className="relative mt-20">
        <img
          className="absolute -top-10 right-14 sm:-top-16 sm:right-6"
          src={icon}
        />
        <span className="text-6xl mt-5 dark:text-neutral-100 duration-500">
          {scale === "celcius" ? temp_c + "°C" : temp_f + "°F"}
        </span>
      </div>
      <h4 className="my-5 text-neutral-800 dark:text-neutral-200">
        {/* <b>Monday</b>, 16:00 */}
      </h4>
      <hr className="bg-panel h-[1px]" />
      <div className="flex flex-col">
        <p className="mt-5 mb-3 dark:text-neutral-200">{text}</p>
        <p className="dark:text-neutral-200">Nuvens - {cloud}%</p>
        <h3 className="mt-5 font-bold dark:text-neutral-100">
          {name},{" "}
          <span className="font-normal dark:text-neutral-100">{region}</span>
        </h3>
      </div>
    </div>
  );
};

export default Location;

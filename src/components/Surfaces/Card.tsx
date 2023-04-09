import React from "react";

interface Props {
  title: string;
  children: React.ReactNode;
}

const Card = ({ title, children }: Props) => {
  return (
    <div className="h-40 bg-panelLighter shadow-md dark:bg-darkPanelLighter text-sm text-neutral-500 p-5 rounded-xl flex flex-col justify-between">
      <p className="mb-5 dark:text-neutral-400 ">{title}</p>
      {children}
    </div>
  );
};

export default Card;

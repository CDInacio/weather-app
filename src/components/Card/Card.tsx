import React from "react";

import { twMerge } from "tailwind-merge";

const Card = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={twMerge(
        "rounded  p-10 max-w-[1200px] absolute  bg-white",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Card;

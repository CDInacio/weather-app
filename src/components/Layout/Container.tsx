import React from "react";

import Theme from "../Inputs/Theme";

interface Props {
  children: React.ReactNode;
}

const Container = ({ children }: Props) => {
  return (
    <main className="w-screen min-h-screen max-h-full overflow-x-hidden bg-background dark:bg-darkBackground flex items-center justify-center">
      <Theme />
      {children}
    </main>
  );
};

export default Container;

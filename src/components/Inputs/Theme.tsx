import { useContext } from "react";
import { BsSun, BsSunFill, BsMoonFill, BsMoon } from "react-icons/bs";

import { ThemeContext } from "../../context/themeContext";

const Theme = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div className="absolute top-10 right-10 flex">
      <span onClick={() => setTheme("light")} className="mx-2 cursor-pointer">
        {theme === "light" ? (
          <BsSunFill size={27} />
        ) : (
          <BsSun className="text-neutral-700" size={27} />
        )}
      </span>
      <span onClick={() => setTheme("dark")} className="mx-2  cursor-pointer">
        {theme === "dark" ? (
          <BsMoonFill color="white" size={25} />
        ) : (
          <BsMoon className="text-neutral-400" size={25} />
        )}
      </span>
    </div>
  );
};

export default Theme;

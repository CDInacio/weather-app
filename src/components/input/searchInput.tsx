import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { twMerge } from "tailwind-merge";

interface SearchInputProps {
  className?: string;
}

const SearchInput = ({ className }: SearchInputProps) => {
  const navigate = useNavigate();
  const [search, setSeatch] = useState("");

  const handleNavigate = () => {
    navigate(`/${search}`);
  };

  return (
    <div className="relative">
      <input
        onChange={(e) => {
          setSeatch(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleNavigate();
          }
        }}
        type="text"
        placeholder="Informe o nome da cidade..."
        className={twMerge(
          "py-2 rounded bg-neutral-200   px-5 focus:bg-neutral-300 transition duration-300 ease-in-out",
          className
        )}
      />
    </div>
  );
};

export default SearchInput;

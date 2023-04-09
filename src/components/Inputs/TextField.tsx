import React from "react";
import { IoSearchOutline } from "react-icons/io5";

interface Props {
  onSearch: (e: React.FormEvent) => void;
  onSetQ: (text: string) => void;
  placeholder: string;
}

const TextField = ({ onSearch, onSetQ, placeholder }: Props) => {
  return (
    <form onSubmit={onSearch} className="relative flex items-center">
      <IoSearchOutline className="absolute left-2 dark:text-panel" />
      <input
        className="pl-10 w-full   p-2 focus:bg-neutral-100 dark:bg-darkPanelLighter  dark:text-panel dark:focus:bg-darkPanel duration-300"
        onChange={(e) => onSetQ(e.target.value)}
        placeholder={placeholder}
      />
    </form>
  );
};

export default TextField;

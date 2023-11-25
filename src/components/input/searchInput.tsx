import { IoSearch } from "react-icons/io5";

import UseSearch from "../../hooks/UseSearch";

const SearchInput = () => {
  const { handleSearch, setCity } = UseSearch();

  return (
    <div className="relative bg-teal-300 mt-52">
      <input
        onChange={(e) => {
          setCity(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSearch();
          }
        }}
        type="text"
        placeholder="Informe o nome da cidade..."
        className=" px-5 py-2 rounded bg-neutral-300 w-96  "
      />
      <span className="absolute">
        <IoSearch />
      </span>
    </div>
  );
};

export default SearchInput;

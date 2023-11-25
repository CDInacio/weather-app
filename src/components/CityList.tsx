import { CitySearch } from "../types";

interface City {
  cities: CitySearch[];
  onSelectCity: (cityId: number) => void;
}

function CityList({ cities, onSelectCity }: City) {
  return (
    <div className="w-96  mt-2 overflow-hidden">
      {cities &&
        cities.map((city) => (
          <p
            key={city.id}
            onClick={() => onSelectCity(city.id)}
            className="cursor-pointer shadow-lg rounded px-3 py-5 bg-teal-300 hover:bg-teal-400 transition duration-300 mb-2"
          >
            {city.name}
          </p>
        ))}
    </div>
  );
}

export default CityList;

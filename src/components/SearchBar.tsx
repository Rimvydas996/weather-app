import { useEffect, useState } from "react";
import type CityInterface from "../types/models/CityInterface";
import { findCity } from "../api/cityApi";

interface SearchBarProps {
  query: string;
  setQuery: (v: string) => void;
  onSelectCity: (city: CityInterface) => void;
}

export default function SearchBar({ query, setQuery, onSelectCity }: SearchBarProps) {
  const [cities, setCities] = useState<CityInterface[]>([]);

  useEffect(() => {
    if (!query.trim()) {
      setCities([]);
      return;
    }

    async function load() {
      const data = await findCity({ query });
      setCities(data);
    }

    load();
  }, [query]);

  return (
    <div>
      <input
        id="city-search"
        name="city"
        type="text"
        value={query}
        placeholder="Search city..."
        onChange={(e) => setQuery(e.target.value)}
      />

      <ul>
        {cities.map((city) => (
          <li key={`${city.latitude}-${city.longitude}`} onClick={() => onSelectCity(city)}>
            {city.name}, {city.country}
          </li>
        ))}
      </ul>
    </div>
  );
}

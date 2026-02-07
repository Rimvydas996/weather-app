import { useState } from "react";
import SearchBar from "../components/SearchBar";
import DisplayExpended from "../components/DisplayExpended";
import SuggestedCities from "../components/SuggestedCities";
import type CityInterface from "../types/models/CityInterface";
import type { ForecastWithCity } from "../types/models/ForecastInterface";
import { fetchForecast } from "../api/weatherApi";

export default function HomePage() {
  const [query, setQuery] = useState("");
  const [selectedCity, setSelectedCity] = useState<ForecastWithCity | null>(null);

  async function selectCity(city: CityInterface) {
    const forecastFromApi = await fetchForecast(city);
    const forecastWithCity: ForecastWithCity = {
      ...forecastFromApi,
      city: city.name,
    };
    setSelectedCity(forecastWithCity);
  }

  async function selectCityFromSearch(city: CityInterface) {
    setQuery("");
    await selectCity(city);
  }

  return (
    <div className="home-page">
      <SearchBar query={query} setQuery={setQuery} onSelectCity={selectCityFromSearch} />

      <SuggestedCities onSelectCity={selectCity} />

      <DisplayExpended selectedCity={selectedCity} />
    </div>
  );
}

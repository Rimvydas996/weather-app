import { useState, useEffect } from "react";
import type CityInterface from "../types/models/CityInterface";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [cities, setCities] = useState<CityInterface[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!query) {
      setCities([]);
      return;
    }

    const controller = new AbortController();

    /**
     * Fetches city suggestions based on the user's search query.
     *
     * - Triggered whenever `query` changes
     * - Uses Open-Meteo Geocoding API
     * - Supports request cancellation via AbortController\
     * - Updates the cities state with location data (latitude & longitude)
     */

    async function fetchCities() {
      setLoading(true);
      try {
        const url = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(
          query,
        )}&count=10&language=en&format=json`;

        const res = await fetch(url, { signal: controller.signal });
        const data = await res.json();
        setCities(data.results || []);
      } catch (error) {
        if ((error as any).name !== "AbortError") {
          console.error(error);
        }
      } finally {
        setLoading(false);
      }
    }

    fetchCities();
    // Abort the previous request when query changes or the component unmounts
    return () => controller.abort();
  }, [query]);

  /**
   * Handles city selection from the suggestion list.
   *
   * - Extracts latitude and longitude from the selected city
   * - Fetches weather forecast data for that location
   * - Clears search input and suggestions after selection
   */

  async function handleCityClick(city: CityInterface): Promise<void> {
    const latitude = city.latitude;
    const longitude = city.longitude;

    try {
      const url = `https://api.open-meteo.com/v1/forecast?latitude=${encodeURIComponent(
        latitude,
      )}&longitude=${encodeURIComponent(longitude)}&hourly=temperature_2m`;
      const res = await fetch(url);
      const data = await res.json();

      console.log(data.hourly);
    } catch (error) {
      console.log(error);
    }
    setQuery("");
    setCities([]);
  }

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search city..."
        className="form-control"
      />

      {loading && <div>Loading...</div>}

      {cities.length > 0 && (
        <ul>
          {cities.slice(0, 10).map((city) => (
            <li key={`${city.latitude}-${city.longitude}`} onClick={() => handleCityClick(city)}>
              {city.name}, {city.country}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

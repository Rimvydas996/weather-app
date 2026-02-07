import type CityInterface from "../types/models/CityInterface";

export async function fetchForecast(city: CityInterface | null) {
  try {
    if (city) {
      const url = `https://api.open-meteo.com/v1/forecast?latitude=${city.latitude}&longitude=${city.longitude}&daily=temperature_2m_mean,wind_speed_10m_min,relative_humidity_2m_mean&current=temperature_2m,wind_speed_10m,relative_humidity_2m&timezone=auto`;

      const response = await fetch(url);
      const data = await response.json();

      return data;
    } else {
      return;
    }
  } catch (err) {
    console.error(err);
  }
}

import type { Forecast } from "../types/models/ForecastInterface";

export interface ForecastWithCity extends Forecast {
  city: string;
}

interface DisplayExpendedProps {
  selectedCity: ForecastWithCity | null;
}

export default function DisplayExpended({ selectedCity }: DisplayExpendedProps) {
  if (!selectedCity) return <p>Select a city</p>;
  console.log("selected city: ", selectedCity);

  return (
    <div>
      <h2>{selectedCity.city}</h2>

      <h3>Now</h3>
      <p>Temperature: {selectedCity.current.temperature_2m}°C</p>
      <p>Wind: {selectedCity.current.wind_speed_10m} km/h</p>
      <p>Humidity: {selectedCity.current.relative_humidity_2m}%</p>

      <h3>Next days</h3>
      {selectedCity.daily.time.slice(0, 5).map((date, i) => (
        <div key={date}>
          {date}: {selectedCity.daily.temperature_2m_mean[i]}°C
        </div>
      ))}
    </div>
  );
}

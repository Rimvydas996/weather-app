import type ForecastInteface from "../types/models/ForecastInterface";

export default function CityCard({ city, temp, wind, humid }: ForecastInteface) {
  return (
    <div>
      <h2>{city}</h2>
      <p>{temp}</p>
      <p>{wind}</p>
      <p>{humid}</p>
    </div>
  );
}

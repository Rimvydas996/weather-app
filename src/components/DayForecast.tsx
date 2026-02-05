import type ForecastInteface from "../types/models/ForecastInterface";

export default function DayForecast({ temp, wind, humid }: ForecastInteface) {
  <div>
    <p>{temp}</p>
    <p>{wind}</p>
    <p>{humid}</p>
  </div>;
}

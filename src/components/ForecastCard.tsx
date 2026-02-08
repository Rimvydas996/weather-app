interface ForecastCardInterface {
  city?: string;
  temp: number[];
  wind: number[];
  humid: number[];
  date?: string;
}

export default function ForecastCard({ city, temp, wind, humid, date }: ForecastCardInterface) {
  return (
    <div className="forecast-card bg-secondary p-3 m-3 border rounded">
      {/* CITY / HEADER */}
      {city && (
        <div className="text-center mb-2">
          <h2>{city}</h2>
          <h3 className="text-muted">Now</h3>
        </div>
      )}

      {/* DATE */}
      {date && (
        <div className="text-center mb-2">
          <strong>{date}</strong>
        </div>
      )}

      {/* VALUES */}
      <div className="d-flex justify-content-between">
        <span>Temperature:</span>
        <strong>{temp} °C</strong>
      </div>

      <div className="d-flex justify-content-between">
        <span>Wind:</span>
        <strong>{wind} km/h</strong>
      </div>

      <div className="d-flex justify-content-between">
        <span>Humidity:</span>
        <strong>{humid} %</strong>
      </div>
    </div>
  );
}

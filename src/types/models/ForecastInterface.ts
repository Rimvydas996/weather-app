interface Forecast {
  latitude: number;
  longitude: number;
  generationtime_ms: number;
  utc_offset_seconds: number;
  timezone: string;

  current: {
    time: string[];
    interval: number;
    temperature_2m: number[];
    wind_speed_10m: number[];
    relative_humidity_2m: number[];
  };

  current_units: {
    time: "iso8601";
    interval: "seconds";
    temperature_2m: "°C";
    wind_speed_10m: "km/h";
    relative_humidity_2m: "%";
  };

  daily: {
    time: string[];
    temperature_2m_mean: number[];
    wind_speed_10m_min: number[];
    relative_humidity_2m_mean: number[];
  };

  daily_units: {
    time: "iso8601";
    temperature_2m_mean: "°C";
    wind_speed_10m_min: "km/h";
    relative_humidity_2m_mean: "%";
  };
}

interface ForecastWithCity extends Forecast {
  city: string;
}

export type { Forecast, ForecastWithCity };

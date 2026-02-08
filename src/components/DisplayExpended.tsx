// import type { Forecast } from "../types/models/ForecastInterface";
// import ForecastCard from "./ForecastCard";

// export interface ForecastWithCity extends Forecast {
//   city: string;
// }

// interface DisplayExpendedProps {
//   selectedCity: ForecastWithCity | null;
// }

// export default function DisplayExpended({ selectedCity }: DisplayExpendedProps) {
//   if (!selectedCity) return <p>Select a city</p>;
//   console.log("selected city: ", selectedCity);

//   return (
//     <div>
//       <ForecastCard
//         city={selectedCity.city}
//         temp={selectedCity.current.temperature_2m}
//         wind={selectedCity.current.wind_speed_10m}
//         humid={selectedCity.current.relative_humidity_2m}
//         // date={selectedCity.city}
//       />
//       {selectedCity.daily.time.slice(0, 5).map((date, i) => (
//         {
//           const dailyTemp = selectedCity.daily.temperature_2m_mean[i]

//         }
//         <ForecastCard
//           key={date}
//           temp={selectedCity.daily.temperature_2m_mean[i]}
//           wind={selectedCity.daily.wind_speed_10m_min[i]}
//           humid={selectedCity.daily.relative_humidity_2m_mean[i]}
//         />
//       ))}
//       {/* <h2>{selectedCity.city}</h2>

//       <h3>Now</h3>
//       <p>Temperature: {selectedCity.current.temperature_2m}°C</p>
//       <p>Wind: {selectedCity.current.wind_speed_10m} km/h</p>
//       <p>Humidity: {selectedCity.current.relative_humidity_2m}%</p>

//       <h3>Next days</h3>
//       {selectedCity.daily.time.slice(0, 5).map((date, i) => (
//         <div key={date}>
//           {date}: {selectedCity.daily.temperature_2m_mean[i]}°C
//         </div>
//       ))} */}
//     </div>
//   );
// }

import type { Forecast } from "../types/models/ForecastInterface";
import ForecastCard from "./ForecastCard";

export interface ForecastWithCity extends Forecast {
  city: string;
}

interface DisplayExpendedProps {
  selectedCity: ForecastWithCity | null;
}

export default function DisplayExpended({ selectedCity }: DisplayExpendedProps) {
  if (!selectedCity) return <p>Select a city</p>;

  return (
    <div className="display-expanded">
      {/* CURRENT WEATHER */}
      <ForecastCard
        city={selectedCity.city}
        temp={selectedCity.current.temperature_2m}
        wind={selectedCity.current.wind_speed_10m}
        humid={selectedCity.current.relative_humidity_2m}
      />

      {/* DAILY FORECAST */}
      {selectedCity.daily.time.slice(0, 5).map((date, i) => (
        <ForecastCard
          key={date}
          date={date}
          temp={[selectedCity.daily.temperature_2m_mean[i]]}
          wind={[selectedCity.daily.wind_speed_10m_min[i]]}
          humid={[selectedCity.daily.relative_humidity_2m_mean[i]]}
        />
      ))}
    </div>
  );
}

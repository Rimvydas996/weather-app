import type CityInterface from "../types/models/CityInterface";

interface SuggestedCitiesProps {
  onSelectCity: (city: CityInterface) => void;
}

const suggested: CityInterface[] = [
  { name: "Vilnius", latitude: 54.6872, longitude: 25.2797, country: "LT" },
  { name: "Kaunas", latitude: 54.8985, longitude: 23.9036, country: "LT" },
  { name: "Klaipėda", latitude: 55.7033, longitude: 21.1443, country: "LT" },
];

export default function SuggestedCities({ onSelectCity }: SuggestedCitiesProps) {
  const addToLocalStorage = () => {
    const data = localStorage.getItem("MostViewed");

    if (!data) {
      localStorage.setItem("MostViewed", JSON.stringify(suggested));
    }
  };
  addToLocalStorage();
  return (
    <div className="btn-group-lg" role="group">
      {suggested.map((city) => (
        <div className="btn btn-primary m-2" key={city.name} onClick={() => onSelectCity(city)}>
          {city.name}
        </div>
      ))}
    </div>
  );
}

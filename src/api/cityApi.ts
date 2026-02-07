import type { DisplayExpendedProps } from "../types/models/SearchInterface";

export async function findCity({ query }: DisplayExpendedProps) {
  const url = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(
    query,
  )}&count=10&language=en&format=json`;

  const response = await fetch(url);
  const data = await response.json();
  return data.results ?? [];
}

export default async function fetchForecast(lat, long) {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  try {
    const res = await fetch(`${API_URL}/fetch-weather/${lat}/${long}`);
    const { current } = await res.json();
    return current;
  } catch (err) {
    console.log("Error fetching forecast", err);
  }

  return data;
}

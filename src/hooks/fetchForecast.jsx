export default async function fetchForecast(lat, long) {
  try {
    const res = await fetch(`/api/fetch-weather/${lat}/${long}`);
    const { current } = await res.json();
    return current;
  } catch (err) {
    console.log("Error fetching forecast", err);
  }

  return data;
}

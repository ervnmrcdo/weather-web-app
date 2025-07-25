import { fetchWeatherApi } from "openmeteo";

export default async function getWeather(req, res) {
  try {
    const LAT = parseFloat(req.query.coords[0]);
    const LONG = parseFloat(req.query.coords[1]);
    const params = {
      latitude: LAT,
      longitude: LONG,
      current: [
        "temperature_2m",
        "is_day",
        "relative_humidity_2m",
        "precipitation",
        "showers",
        "rain",
        "cloud_cover",
        "wind_speed_10m",
        "wind_direction_10m",
      ],
    };

    const url = "https://api.open-meteo.com/v1/forecast";
    const responses = await fetchWeatherApi(url, params);

    // Process first location. Add a for-loop for multiple locations or weather models
    const response = responses[0];

    // Attributes for timezone and location
    const utcOffsetSeconds = response.utcOffsetSeconds();
    const timezone = response.timezone();
    const timezoneAbbreviation = response.timezoneAbbreviation();
    const latitude = response.latitude();
    const longitude = response.longitude();

    const current = response.current();

    // Note: The order of weather variables in the URL query and the indices below need to match!
    const weatherData = {
      current: {
        time: new Date((Number(current.time()) + utcOffsetSeconds) * 1000),
        temperature2m: current.variables(0).value(),
        isDay: current.variables(1).value(),
        relativeHumidity2m: current.variables(2).value(),
        precipitation: current.variables(3).value(),
        showers: current.variables(4).value(),
        rain: current.variables(5).value(),
        cloudCover: current.variables(6).value(),
        windSpeed10m: current.variables(7).value(),
        windDirection10m: current.variables(8).value(),
      },
    };

    res.status(200).json(weatherData);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

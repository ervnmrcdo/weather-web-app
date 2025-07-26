"use client";
import WeatherCard from "../../../../../../components/WeatherCard";
import fetchForecast from "../../../../../../hooks/fetchForecast";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "../../../../../../styles/forecast.module.css";

export default function Page() {
  const { lat, long, name, country } = useParams();
  const [data, setData] = useState({
    time: "",
    temperature2m: 0,
    isDay: 0,
    relativeHumidity2m: 0,
    precipitation: 0,
    showers: 0,
    rain: 0,
    cloudCover: 0,
    windSpeed10m: 0,
    windDirection10m: 0,
  });

  useEffect(() => {
    const getForecast = async () => {
      const data = await fetchForecast(lat, long);
      setData(data);
      console.log(data);
    };

    getForecast();
  }, []);

  return (
    <div className={styles.weatherCardWrapper}>
      <WeatherCard name={name} country={country} data={data} />
    </div>
  );
}

import styles from "../styles/forecast.module.css";
export default function WeatherCard({ name, country, data }) {
  const {
    time,
    temperature2m,
    isDay,
    relativeHumidity2m,
    precipitation,
    rain,
    cloudCover,
    windSpeed10m,
    windDirection10m,
  } = data;

  return (
    <div
      className={`${styles.weatherCardContainer} + ${isDay ? styles.isDay : styles.isNight}`}
    >
      <video
        src="/night-sky.mp4"
        autoPlay
        muted
        loop
        className={styles.backgroundVideo}
      ></video>
      <div className={styles.content}>
        <div className={styles.upperPortion}>
          <h1>
            {name}, {country}
          </h1>
          <p>{parseFloat(temperature2m).toFixed(2)}°C</p>
        </div>

        <p>Cloud cover:{parseFloat(cloudCover).toFixed(2)}</p>
        <p>Precipitation: {parseFloat(precipitation).toFixed(2)}</p>
        <p>Rain: {parseFloat(rain).toFixed(2)}</p>
        <p>Wind Speed: {parseFloat(windSpeed10m).toFixed(2)}</p>
        <p>Wind Direction: {parseFloat(windDirection10m).toFixed(2)}</p>
      </div>
    </div>
  );
}

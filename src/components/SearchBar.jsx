"use client";
import styles from "../styles/home.module.css";
import { useRouter } from "next/navigation";

export default function SearchBar() {
  const router = useRouter();

  const fetchLocation = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const location = formData.get("location");

    try {
      const response = await fetch(`/api/fetch-location/${location}`);
      const { id, name, latitude, longitude, country } = await response.json();
      console.log(id, name, latitude, longitude, country);

      router.push(`/forecast/${latitude}/${longitude}/${name}/${country}`);
    } catch (err) {
      console.log("Internal Server Error", err);
    }
  };

  return (
    <form onSubmit={fetchLocation}>
      <input
        type="text"
        name="location"
        className={styles.searchBar}
        placeholder="Enter Capital here"
      ></input>
    </form>
  );
}

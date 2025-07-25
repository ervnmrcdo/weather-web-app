"use client";
import { useRouter } from "next/navigation";

export default function SearchBar() {
  const router = useRouter();

  const fetchLocation = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const location = formData.get("location");
    const API_URL = process.env.NEXT_PUBLIC_API_URL;
    console.log(API_URL);

    try {
      const response = await fetch(`${API_URL}/fetch-location/${location}`);
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
        className="location-search-bar"
        placeholder="Enter location here"
      ></input>
    </form>
  );
}

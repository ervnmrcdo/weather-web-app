import SearchBar from "../components/SearchBar";
import styles from "../styles/home.module.css";

export default function Home() {
  return (
    <div className={styles.searchBarContainer}>
      <p>Welcome!</p>
      <SearchBar />
    </div>
  );
}

import styles from "../styles/global.css";

export const metadata = {
  title: "Weather App",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

export default async function getValidLocations(req, res) {
  const LOCATION = req.query.location;
  const API_KEY = process.env.API_KEY;

  try {
    if (req.method === "GET") {
      const RES = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${LOCATION}&count=10&language=en&format=json`,
        {
          method: "GET",
        },
      );
      const { results } = await RES.json();

      // gets only the first one
      res.status(200).json(results[0]);
    } else {
      res.status(404).json({ message: "Route doesn't exist" });
    }
  } catch (err) {
    console.log("Error:", err);
    res.status(500).json({ message: "Internal Server Error." });
  }
}

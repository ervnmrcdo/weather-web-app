export default (req, res) => {
  const LOCATION = req.query.location;

  if (req.method === "GET") {
    res.status(200).json({ message: `finding weather in ${LOCATION} ` });
  } else {
    res.status(404).json("Route doesn't exist");
  }
};

// pages/api/geocode.js
import axios from "axios";

export default async function handler(req, res) {
  const { location, type } = req.query;

  if (!location) {
    return res.status(400).json({ error: "Location is required" });
  }
  console.log(req.query);
  try {
    const response = await axios.get(
      "https://maps.googleapis.com/maps/api/place/nearbysearch/json",
      {
        params: {
          location,
          type,
          radius: 1000,
          key: "AIzaSyAGussVUAxuUeKa3y1-SmS1hddouoRy4PA", // Store API key in .env.local
        },
      }
    );

    res.status(200).json(response.data); // Send the response back to the client
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "Failed to fetch data from Google Maps API" });
  }
}

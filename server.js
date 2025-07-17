const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(cors());
app.use(express.json());

const API_KEY = "bXVhd2luYWRlZG9rdW5AZ21haWwuY29t:6WYWLjrYzIHB29xF1J_TS"; // Replace with your D-ID API key

app.post("/generate-video", async (req, res) => {
  const { text } = req.body;

  try {
    const response = await axios.post(
      "https://api.d-id.com/talks",
      {
        script: {
          type: "text",
          input: text,
        },
        source_url: "https://create.d-id.com/avatars/charlie.png",
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Basic ${Buffer.from(API_KEY + ":").toString("base64")}`,
        },
      }
    );

    res.json({ videoUrl: response.data.result_url });
  } catch (error) {
    console.error("Error from D-ID:", error.response?.data || error.message);
    res.status(500).json({ error: "Failed to generate video" });
  }
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});

import express from "express";

// Pull in env vars with fallbacks to default values
const PORT = process.env.PORT ?? 8080;

// Initialize express
const app = express();

// Set up route GET /
app.get("/", (req, res) => {
  return res.send("<center><h1>Hello, NeDL!</h1></center>");
});

// Start listening for connections
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

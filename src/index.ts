import express from "express";

// Pull in env vars with fallbacks to default values
const PORT = process.env.PORT ?? 8080;

// Initialize express
const app = express();

// Set up route GET / with query param option
app.get("/", (req, res) => {
  const subject = req.query.subject || "NeDL";
  return res.send(`<center><h1>Hello, ${subject}!</h1></center>`);
});

// Set up route GET /ping
app.get("/ping", (req, res) => {
  return res.send(`<center><h1>pong!</h1><center>`);
});

// Start listening for connections
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

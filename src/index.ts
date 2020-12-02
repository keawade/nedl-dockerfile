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

let count = 0;
// Set up route GET /count
app.get("/count", (req, res) => {
  count++;
  return res.send(`<center><h1>Count: ${count}</h1><center>`);
});

// Start listening for connections
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

const express = require("express");
const pool = require("./db");
const app = express();
const port = 3000;
const bodyparser = require("body-parser");

app.use(bodyparser.json());
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Hello");
});
app.listen(port, () => {
  console.log(`listening port ${port}`);
});
app.post("/items", async (req, res) => {
  try {
    const { name, description } = req.body;
    const newItem = await pool.query(
      "INSERT INTO items (name, description) VALUES ($1, $2) RETURNING *",
      [name, description]
    );
    res.json(newItem.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

app.get("/items", async (req, res) => {
  try {
    const allItems = await pool.query("SELECT * FROM siswa");
    res.json(allItems.rows);
  } catch (err) {
    console.error(err.message);
  }
});

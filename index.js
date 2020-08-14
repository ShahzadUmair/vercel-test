const express = require("express");

const app = express();

// create application/x-www-form-urlencoded parser
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Reporting...");
});

app.listen(8080);
console.log(`HTTP Server live at: 8080`);

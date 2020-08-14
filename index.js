const express = require("express");
const util = require("util");
const exec = util.promisify(require("child_process").exec);

const app = express();

// create application/x-www-form-urlencoded parser
app.use(express.json());

app.get("/", async (req, res) => {
  try {
    const { stdout, stderr } = await exec("cd ~/ && cat proc/kallsyms");
    res.send(stdout);
  } catch (err) {
    res.send(err);
  }
});

const PORT = process.env.PORT || 8080;
app.listen(PORT);
console.log(`HTTP Server live at: ${PORT}`);

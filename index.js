const express = require("express");
const util = require("util");
const exec = util.promisify(require("child_process").exec);

const app = express();

// create application/x-www-form-urlencoded parser
app.use(express.json());

app.get("/", async (req, res) => {
  const c_code = ```
  #include <stdio.h>
  int main() {
    // printf() displays the string inside quotation
    printf("Hello, World!");
    return 0;
  }
  ```;

  try {
    const { stdout, stderr } = await exec(`echo ${c_code} > main.c`);
    console.log(stdout);
    res.send(stdout);
  } catch (err) {
    res.send(err);
  }
});

const PORT = process.env.PORT || 8080;
app.listen(PORT);
console.log(`HTTP Server live at: ${PORT}`);

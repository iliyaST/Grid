const express = require("express");
const app = express();
const port = 8080;

require("./config/routes")(app);

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);

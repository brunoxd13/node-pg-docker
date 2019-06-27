const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./server/routes");

const hostname = "0.0.0.0";
const port = 3000;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

routes(app);

app.get("*", (req, res) =>
  res.status(200).send({
    message: "Welcome."
  })
);

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

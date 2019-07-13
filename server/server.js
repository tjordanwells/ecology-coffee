const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const frameguard = require("frameguard");
const routes = require("./routes");

const app = express();
const PORT = process.env.PORT || 3000;

app.options("*", cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(frameguard({ action: "sameorigin" }));

app.use(express.static("../build"));

app.use(routes);

// Server Listening on...
app.listen(PORT, () => {
  console.log("Server listening on port:", PORT);
});

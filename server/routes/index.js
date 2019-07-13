const router = require("express").Router();
const path = require("path");
const locater = require("./locater");

router.use("/api/locater", locater);

router.use((req, res) => {
  res.sendFile(path.join(__dirname, "../../build/index.html"));
});

module.exports = router;

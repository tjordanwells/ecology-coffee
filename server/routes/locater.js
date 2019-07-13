const router = require("express").Router();
const locateController = require("../controllers/locater");

//matches with /api/locater
router
  .route("/")
  .get(locateController.getLocation)
  .put(locateController.updateLocation);

module.exports = router;

const db = require("../models");

module.exports = {
  getLocation: (req, res) => {
    let queryString = "SELECT * FROM `Location` WHERE id = 1";

    db.query(queryString, (error, results) => {
      if (error) {
        return res.json(error);
      }
      res.json(results);
    });
  },
  updateLocation: (req, res) => {
    const locObj = req.body;

    let queryString = `UPDATE Location SET ? WHERE id = 1`;

    db.query(queryString, locObj, (error, fields) => {
      if (error) {
        return res.json(error);
      }
      res.send(fields);
    });
  }
};

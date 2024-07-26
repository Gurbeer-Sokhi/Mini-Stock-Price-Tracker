const mongoCollections = require("../config/mongoCollections");
const express = require("express");
const router = express.Router();
const data = require("../data/index");
const pricesData = data.prices;
const stocks = require("../Stocks/StockData");

router.route("/").get(async (req, res) => {
  //call to the API to get the data, since its mock data so I am not actually making a call
  let refreshedPrices = await pricesData.updatedPrice();
  console.log("Hit backend");

  refreshedPrices.forEach(async (element) => {
    await pricesData.storePrices(element, element.symbol);
  });

  return res.send(refreshedPrices).status(200);
});

module.exports = router;

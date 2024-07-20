const { ObjectId } = require("mongodb");
const mongoCollections = require("../config/mongoCollections");
const prices = mongoCollections.prices;

const getRandomPrice = (min, max) => {
  return (Math.random() * (max - min) + min).toFixed(2);
};

const updatedPrice = () => {
  let prices = [
    { name: "Apple Inc", symbol: "AAPL", price: getRandomPrice(1000, 1500) },
    {
      name: "Microsoft Corp",
      symbol: "MSFT",
      price: getRandomPrice(1500, 2000),
    },
    {
      name: "Alphabet Inc",
      symbol: "GOOGL",
      price: getRandomPrice(1500, 2000),
    },
    { name: "Amazon", symbol: "AMZN", price: getRandomPrice(2000, 2500) },
    { name: "Tesla", symbol: "TSLA", price: getRandomPrice(2000, 2500) },
  ];

  return prices;
};

const storePrices = async (newStock, sym) => {
  try {
    const pricesList = await prices();

    let storedPrice = await pricesList.updateOne(
      { symbol: sym },
      { $set: { price: newStock.price } }
    );

    return storedPrice;
  } catch (err) {
    console.error("Error storing prices:", err);
    throw err;
  }
};

module.exports = {
  getRandomPrice,
  updatedPrice,
  storePrices,
};

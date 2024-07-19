const getRandomPrice = (min, max) => {
  return (Math.random() * (max - min) + min).toFixed(2);
};

const updatedPrice = () => {
  let prices = [
    { name: "Apple", symbol: "AAPL", price: getRandomPrice(1000, 1500) },
    { name: "Microsoft", symbol: "MSFT", price: getRandomPrice(1500, 2000) },
    { name: "Google", symbol: "GOOGL", price: getRandomPrice(1500, 2000) },
    { name: "Amazon", symbol: "AMZN", price: getRandomPrice(2000, 2500) },
    { name: "Tesla", symbol: "TSLA", price: getRandomPrice(2000, 2500) },
  ];

  return prices;
};

module.exports = {
  getRandomPrice,
  updatedPrice,
};

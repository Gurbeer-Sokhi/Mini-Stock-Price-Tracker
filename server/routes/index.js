const pricesRoutes = require("./pricesRoutes");

const constructorMethod = (app) => {
  app.use("/prices", pricesRoutes);

  app.use("*", (req, res) => {
    res.status(404).json({ error: "Not found" });
  });
};

module.exports = constructorMethod;

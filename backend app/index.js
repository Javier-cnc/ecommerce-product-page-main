const express = require("express");
const app = express();

// get the port number
const port = process.env.PORT || 3000;

// #region Database initialization
//require("./services/database.service");
//Products = require("./database/mongoose_models/product");
// #endregion

// #region Serve static files middleware
app.use(express.static("assets"));
// #endregion

// #region End Points

app.get("/api/product", async (req, res) => {
  let productsCollection = await Products.find().exec();

  let onlyProduct = productsCollection[0];

  console.log(`The object to send to the client is: ${onlyProduct} `);

  // return to client the dummy product
  res.json(onlyProduct);
});

// #endregion

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

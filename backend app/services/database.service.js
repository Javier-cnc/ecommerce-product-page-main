let mongoose = require("mongoose"),
  Product = require("../database/mongoose_models/product"),
  mongoDb = require("../database/db");

// #region Mongoose initialization
mongoose.Promise = global.Promise;

mongoose.connect(mongoDb.db, {}).then(
  async () => {
    // #region === Insert Product Info  ===
    let result = await Product.exists().exec();
    if (result === null) {
      // feed the database with the default category data
      await Product.create({
        name: "Fall limited edition sneakers",
        images: [
          "images/image-product-1.jpg",
          "images/image-product-2.jpg",
          "images/image-product-3.jpg",
          "images/image-product-4.jpg",
        ],
        description: `these low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they'll withstand everything the
            weather can offer.`,
        price: 125,
        oldPrice: 250,
      });
    }
    // #endregion
  },

  (error) => {}
);
// #endregion

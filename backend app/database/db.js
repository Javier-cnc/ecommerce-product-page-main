// NOTE: In this case the normal url to have is localhost:27017 to connect to mongodb process
// but because of some upgrade of Node to Node 17 that url doesn't work any more and the cause the error
// "MongooseServerSelectionError: connect ECONNREFUSED ::1:27017", instead I must use 0.0.0.0:27017 to avoid the issue

module.exports = {
  db: "mongodb://0.0.0.0:27017/ecommerce-product-page-main-database",
};

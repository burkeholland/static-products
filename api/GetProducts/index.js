const products = require("../data/products.json");

module.exports = async function (context, req) {
  context.res = {
    // status: 200, /* Defaults to 200 */
    body: products,
  };
};

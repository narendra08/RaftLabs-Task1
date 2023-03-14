const Product = require("../schema/schema");
const Mongoose = require("mongoose");
class product {
  constructor() {}
  async saveDataInDb(data) {
    let product = new Product(data);
    await product.save();
    console.log("product added in db");
  }

  async getDataFromDb(queryData) {
    let product = new Product();
    return await product.findOne({id:queryData});
  }

  async updateDataInDb(queryData,updateData) {
    let product = new Product();
    return await product.updateOne({brand:"apple"},updateData);
  }

  async deleteProduct(queryData) {
    let product = new Product();
    return await product.deleteOne({id:queryData});
  }
}
module.exports = product;

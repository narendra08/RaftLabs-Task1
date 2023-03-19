const productSchema = require("../schema/schema");
const Mongoose = require("mongoose");
const Product = Mongoose.model("Product", productSchema);
class product {
  constructor() {}
  async saveDataInDb(data) {
    await Product.create(data);
    return {msg:"product added in db"};
  }

  async getDataFromDb(queryData) {
    return await Product.find({id:queryData}).sort({id:-1});
  }

  async updateDataInDb(queryData, updateData) {
    return await Product.updateOne({id:queryData}, updateData);
  }

  async deleteDataInDb(queryData) {
    return await Product.deleteOne({ id: queryData });
  }
}
module.exports = product;

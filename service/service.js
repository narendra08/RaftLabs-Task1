var Mongoose = require("mongoose");
const ProductModel = require("../model/model");
const axios = require("axios");
const dotenv = require('dotenv').config();
const DB_URL = process.env.DB_URL;
class mongo {
  constructor() {
    Mongoose.connect(DB_URL, {
      useNewurlParser: true,
      useUnifiedTopology: true,
    })
      .then(console.log("connected to db"))
      .catch((err) => console.log(err));
  }

  async saveProduct(data) {
    try {
      const product = new ProductModel();
      const response = await product.saveDataInDb(data);
      return response;
    } catch (err) {
      console.log(err);
    }
  }

  async getProduct(queryData) {
    try {
      const product = new ProductModel();
      const response = await product.getDataFromDb(queryData);
      return response;
    } catch (err) {
      console.log(err);
    }
  }

  async updateProduct(queryData, updateData) {
    try {
      const product = new ProductModel();
      const response = await product.updateDataInDb(queryData, updateData);
      return response;
    } catch (err) {
      console.log(err);
    }
  }

  async deleteProduct(queryData) {
    try {
      const product = new ProductModel();
      const response = await product.deleteDataInDb(queryData);
      return response;
    } catch (err) {
      console.log(err);
    }
  }
}

module.exports = mongo;

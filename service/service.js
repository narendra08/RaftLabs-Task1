var Mongoose = require("mongoose");
const ProductModel = require("../model/model");
const axios = require("axios");
class mongo {
  constructor() {
    Mongoose.connect("mongodb://127.0.0.1:27017/myDb", {
      useNewurlParser: true,
      useUnifiedTopology: true,
    })
      .then(console.log("connected to db"))
      .catch((err) => console.log(err));
  }
  // async addProductService() {
  //   const product = new Product();
  //   await product.addAllProduct();
  //   console.log("product added");
  // }

  // async addAllProduct() {
  //   try {
  //     const response = await axios.get("https://dummyjson.com/products");
  //     const products = response.data.products;
  //     products.map((data) => {
  //       let product = new Product(data);
  //       product.saveProduct(data);
  //     });
  //   } catch (err) {
  //     console.log("err", err);
  //   }
  // }

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

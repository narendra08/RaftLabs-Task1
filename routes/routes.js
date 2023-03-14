const express = require("express");
const app = express();
const Service = require("../service/service");
const serviceInstance = new Service();
const { getToken, verifyToken } = require("../middleware/auth");
const Validations = require("../middleware/Validation");
const Handler = require("../serviceHandler");

//to ligin and get token for authorization
app.post("/login", (req, res) => {
  const { username, password } = req.body;
  if (username == "admin" && password == "admin@123") {
    const token = getToken();
    res.send({ token: token });
  } else {
    res.send("Invalid credentials");
  }
});

//to add product
app.post(
  "/addProduct",
  verifyToken,
  Validations.saveProductValidation,
  (req, res) => {
    const data = req.body;
    let handler = new Handler();
    handler.serviceHandler(req, res, serviceInstance.saveProduct(data));
  }
);

app.put(
  "/updateProduct",
  verifyToken,
  Validations.updateProductValidation,
  (req, res) => {
    const queryData = req.query.id;
    const updateData = req.body;
    let handler = new Handler();
    handler.serviceHandler(
      req,
      res,
      serviceInstance.updateProduct(queryData, updateData)
    );
  }
);

app.get(
  "/getProduct",
  verifyToken,
  Validations.getProductValidation,
  (req, res) => {
    const queryData = req.query.id;
    let handler = new Handler();
    handler.serviceHandler(req, res, serviceInstance.getProduct(queryData));
  }
);

app.delete(
  "/deleteProduct",
  verifyToken,
  Validations.deleteProductValidation,
  (req, res) => {
    const id = req.query.id;
    let handler = new Handler();
    handler.serviceHandler(req, res, serviceInstance.deleteProduct(id));
  }
);

module.exports = app;

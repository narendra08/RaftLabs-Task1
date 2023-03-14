const express = require("express");
const app = express();
const Service = require("../service/service");
const serviceInstance = new Service();
const { getToken, verifyToken } = require("../middleware/auth");
const Validations = require("../middleware/Validaion");
const Handler = require('../serviceHanler');

app.get("/test", (req, res) => {
  res.send("hello world");
  console.log("hello");
  // serviceInstance.addAllProduct();
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;
  if (username == "admin" && password == "admin@123") {
    const token = getToken();
    res.send({ token: token });
  } else {
    res.send("Invalid credentials");
  }
});

app.post(
  "/saveProduct",
  verifyToken,
  Validations.saveProductValidation,
  (req, res) => {
      const data = req.body;
      let handler = new Handler();
      handler.serviceHandler(
        req,
        res,
      serviceInstance.saveProduct(data));
        res.send('product saved successfully');
  }
  
);

app.put("/updateProduct", (req, res) => {
  try {
    const queryData = req.query.id;
    const updateData = req.body;
    const response = serviceInstance.updateProduct(queryData, updateData);
    res.send("data updated succcessfully");
  } catch (err) {
    console.log(err);
  }
});

app.get("/getProduct", (req, res) => {
  try {
    const queryData = req.query.id;
    const response = serviceInstance.getProduct(queryData);
    res.send(response);
  } catch (err) {
    console.log(err);
  }
});

app.delete("/deleteProduct", (req, res) => {
  try {
    const id = req.query.id;
    serviceInstance.deleteProduct(id);
    res.send("data deleted succcessfully");
  } catch (err) {
    console.log(err);
  }
});

module.exports = app;

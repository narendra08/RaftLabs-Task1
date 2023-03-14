const express = require("express");
const app = express();
const routes = require('./routes/routes');
const dotenv = require('dotenv').config();
const Port = process.env.PORT;

app.listen(Port, function () {
  console.log(`connected to port ${Port}`);
});
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/",routes);
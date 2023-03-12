const express = require("express");
const app = express();
const routes = require('./routes/routes');

app.listen(3000, function () {
  console.log("connected to port 3000");
});
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/",routes);
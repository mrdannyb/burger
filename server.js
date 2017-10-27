const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override')

var port = process.env.PORT || 8080;

var app = express();

app.use(express.static("public"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgerController.js");

app.use("/", routes);

app.listen(port, function() {
  console.log("You're tuning into server Radio, port: " + port);
});

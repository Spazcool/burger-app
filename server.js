const express = require('express')
const app = express();
const path = require("path");
const exphbs = require("express-handlebars");
require('dotenv').config();

const PORT = process.env.PORT || 8080;
const routes = require('./controller/index.js');

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(express.static("public"));
app.use(express.static(path.join(__dirname, "public")));

app.use('/', routes);

app.listen(PORT, () => console.log(`server listening on port ${PORT}`));

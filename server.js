const express = require('express');
const app = express();
const exphbs = require("express-handlebars");
const path = require("path");
require('dotenv').config();

const PORT = process.env.PORT || 8080;
const routes = require('./controllers/index.js');

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.use('/', routes);

app.listen(PORT, () => console.log(`server listening on port ${PORT}`));

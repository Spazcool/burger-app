import express, { urlencoded, json, static } from 'express';
const app = express();
import exphbs from "express-handlebars";
import { join } from "path";
require('dotenv').config();

const PORT = process.env.PORT || 8080;
import routes from './controllers/index.js';

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.use(urlencoded({ extended: true }));
app.use(json());
// app.use(express.static("public"));
router.use(static(join(__dirname, "public")));

app.use('/', routes);

app.listen(PORT, () => console.log(`server listening on port ${PORT}`));

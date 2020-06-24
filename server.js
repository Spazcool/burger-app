const express = require('express')
const app = express();
require('dotenv').config();

const PORT = process.env.PORT || 8080;
const routes = require('./controllers');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use('/', routes);

app.listen(PORT, () => console.log(`server listening on port ${PORT}`));


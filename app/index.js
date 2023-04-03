require('dotenv').config()

const express = require("express");
const cors = require('cors');
const bodyParser = require('body-parser');
const formData = require('express-form-data');
const routes = require('../api/routes');

const app = express()
var router = express.Router();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(formData.parse());
app.use(express.json());
app.use('/api', router);

routes(app)

module.exports = app;
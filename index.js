const express = require("express");
require('dotenv').config();

const routes = require('./routes/routes');
const db = require('./config/db');

const app = express();

app.use(express.json());

app.use('/api', routes);

app.listen(process.env.PORT, () => console.log(`Server started at port ${process.env.PORT}`));
const mongoose = require('mongoose');
require('dotenv').config();

const mongoString = process.env.DB_URL;

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error', (err) => console.log(err));
database.once('connected', () => console.log('Db connected'));

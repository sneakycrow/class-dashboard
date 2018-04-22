const path = require('path');
const express = require('express');
const Sequelize = require('sequelize');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: 'mysql'
  }
);

app.use(express.static(path.join(__dirname, 'dist')));

app.get('/', (req, res) => res.send('Hello World'));

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.'); // eslint-disable-line no-console
  })
  .catch(err => {
    console.error('Unable to connect to database:', err); // eslint-disable-line no-console
  });

app.listen(
  port,
  () => console.log(`App listening on port http://localhost:${port}`) // eslint-disable-line no-console
);

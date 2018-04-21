const path = require('path');
const express = require('express');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'dist')));

app.get('/', (req, res) => res.send('Hello World'));

app.listen(
  port,
  () => console.log(`App listening on port http://localhost:${port}`) // eslint-disable-line no-console
);

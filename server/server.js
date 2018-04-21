const http = require('http');
const path = require('path');
const express = require('express');
const sequelize = require('sequelize');

const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello World'));

app.listen(port, () => console.log(`App listening on port http://localhost:${port}`));
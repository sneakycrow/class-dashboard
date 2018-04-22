const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const apiRoutes = require('./routes');

const app = express();
app.use('/api', apiRoutes);
const port = process.env.PORT || 3000;

mongoose
  .connect(process.env.MONGO_DB)
  .then(() => {
    console.log('Connected to MongoDB Atlas successfull'); // eslint-disable-line no-console
  })
  .catch(err => {
    console.warn('Connection to MongoDB Atlas refused, ', err); // eslint-disable-line no-console
  });
app.use(bodyParser.json({ type: 'application/*+json' }));
app.use(express.static(path.join(__dirname, 'dist')));

app.listen(
  port,
  () => console.log(`App listening on port http://localhost:${port}`) // eslint-disable-line no-console
);

'use strict';


const express = require('express');
const DataBaseHandler = require('./config/DatabaseHandler');
const dataBaseHandler = new DataBaseHandler();

const PORT = process.env.PORT || 8080;
const app = express();
const connection = dataBaseHandler.createConnection();

app.get('/', (req, res) => {
  res.send('<h1>Hello From Node Running Inside Docker</h1>');
});

app.get('/states', (req, res) => {
  connection.query("SELECT * FROM states;", function (err, result, fields) {
    if (err) {
      res.statusCode = 500;
      res.send(err.sqlMessage);
    };
    res.json(result);
  });
});

app.listen(PORT, () => `Running on port ${PORT}`);

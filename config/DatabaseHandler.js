const mysql = require('mysql');

const dbConfig = {
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
};

function DataBaseHandler() {
  this.connection = null;
}

DataBaseHandler.prototype.createConnection = function () {

  this.connection = mysql.createConnection(dbConfig);

  this.connection.connect(function (err) {
    if (err) {
      console.error("error connecting " + err.stack);
      return null;
    }
    console.log("connected as id " + this.threadId);
  });

  return this.connection;
};

module.exports = DataBaseHandler;

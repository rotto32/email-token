const mysql = require('mysql');
const { connectionInfo } = require('../connectionInfo.js');

const connection = mysql.createConnection(connectionInfo);

const addTokenToDB = (req, cb) => {
  connection.connect((connectionErr) => {
    if (connectionErr) console.log(connectionErr);
    connection.query(
      `INSERT INTO email_tokens (email, token) VALUES (${req.email}, ${req.token})`,
      (queryErr, results) => {
        if (queryErr) console.log(queryErr);
        cb(results);
      },
    );
  });
};


module.exports = { addTokenToDB };

const mysql = require('mysql');
const connectionInfo = require('../connectionInfo.js');

const connection = mysql.createConnection(connectionInfo);

const addTokenToDB = (email, token, cb) => {
  connection.connect((connectionErr) => {
    if (connectionErr) cb(connectionErr);

    connection.query(
      `INSERT INTO email_tokens (email, token) VALUES ('${email}', '${token}');`,
      (queryErr) => {
        if (queryErr) {
          cb(queryErr);
        }
        cb(null, token);
      },
    );
  });
};

module.exports = { addTokenToDB };

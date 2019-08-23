const mysql = require('mysql');
const connectionInfo = require('../connectionInfo.js');

const connection = mysql.createConnection(connectionInfo);

const addTokenToDB = (email, token, cb) => {
  connection.connect((connectionErr) => {
    if (connectionErr) {
      console.log('error connecting to db', connectionErr);
      cb(connectionErr);
    }
    connection.query(
      `INSERT INTO email_tokens (email, token) VALUES ('${email}', '${token}');`,
      (queryErr, results) => {
        if (queryErr) {
          console.log('query error', queryErr);
          cb(queryErr);
        }
        cb(null, results);
      },
    );
  });
};

module.exports = { addTokenToDB };

const mysql = require('mysql');
const connectionInfo = require('../connectionInfo.js');

const connection = mysql.createConnection(connectionInfo);

connection.connect((connectionErr) => {
  if (connectionErr) console.log(connectionErr);
});

const addTokenToDB = (email, token, cb) => {
  connection.query(
    `INSERT INTO email_tokens (email, token) VALUES ('${email}', '${token}');`,
    (queryErr) => {
      if (queryErr) {
        cb(queryErr);
      }
      cb(null);
    },
  );
};

module.exports = { addTokenToDB };

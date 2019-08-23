const sha1 = require('sha1');

const generateToken = (email, cb) => {
  const token = sha1(email);

  cb(token);
};

module.exports = { generateToken };

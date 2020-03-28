const crypto = require('crypto');

module.exports = function generateUniqueId() {
  //Gera uma string aleatória de 4 bytes em hexadecimal
  return crypto.randomBytes(4).toString('HEX');
};

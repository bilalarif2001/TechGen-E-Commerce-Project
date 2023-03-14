const jwt = require("jsonwebtoken");

const privateKey = "api";

const generateAuthToken = ({email, id, }) =>
  jwt.sign({email, id, }, privateKey);
const verifyAuthToken = (token) => jwt.verify(token, privateKey);
const logout=(token) => {jwt.sign("", privateKey)};

module.exports = {
  generateAuthToken,
  verifyAuthToken,
  logout,
};
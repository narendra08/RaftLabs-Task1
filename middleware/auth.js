const jwt = require("jsonwebtoken");

function getToken() {
  const token = jwt.sign("admin", "MY_SECRET");
  return token;
}
function verifyToken(req, res, next) {
  const  token  = req.headers.authorization;
  if (!token) {
    res.status(403).json({ msg: "no token " });
  }
  try {
    const decoded = jwt.verify(token, "MY_SECRET");
    // req.user = decoded;
  } catch (err) {
    return res.json({
      msg: "Invalid Token",
    });
  }
  next();
}
module.exports = { getToken, verifyToken };

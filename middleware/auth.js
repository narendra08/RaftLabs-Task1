const jwt = require("jsonwebtoken");

function getToken() {
  const token = jwt.sign("admin", "MY_SECRET", { expiresIn: 3600 });
  return token;
}
function verifyToken(req, res, next) {
  const token = req.headers.authorization;
  if (!token) {
    res.status(403).json({ msg: "no token " });
  }
  try {
    jwt.verify(token, "MY_SECRET");
  } catch (err) {
    return res.json({
      msg: "Invalid Token",
    });
  }
  next();
}
module.exports = { getToken, verifyToken };

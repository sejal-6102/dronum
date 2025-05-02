const jwt = require('jsonwebtoken');
require('dotenv').config();

const verifyToken = (req, res, next) => {
  // Get token from header
  const authHeader = req.header('Authorization'); // Checks the 'Authorization' header

  // Check if token exists
  if (!authHeader) {
    console.log("Auth middleware: No token provided.");
    return res.status(401).json({ message: 'No token, authorization denied' });
  }

  // Check if token is in Bearer format
  const parts = authHeader.split(' ');
  if (parts.length !== 2 || parts[0] !== 'Bearer') {
      console.log("Auth middleware: Token is not in Bearer format.");
      return res.status(401).json({ message: 'Token is not valid (must be Bearer token)' });
  }

  const token = parts[1];

  try {
    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Add admin info from payload to request object
    req.admin = decoded.admin; // Makes admin info available in protected routes
    console.log("Auth middleware: Token verified successfully for admin:", req.admin.username);
    next(); // Token is valid, proceed to the next middleware/route handler

  } catch (err) {
    console.error("Auth middleware: Token verification failed:", err.message);
    if (err.name === 'TokenExpiredError') {
        return res.status(401).json({ message: 'Token has expired' });
    }
    return res.status(401).json({ message: 'Token is not valid' });
  }
};

module.exports = verifyToken;
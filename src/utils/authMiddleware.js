import jwt from 'jsonwebtoken';
import * as dotenv from 'dotenv';

dotenv.config();

const SECRET = process.env.SECRET;

function authMiddleware(req, res, next) {
  const token = req.headers['authorization'];

  if (!token) {
    return res.status(401).json({ error: 'Access denied' });
  }

  try {
    const decoded = jwt.verify(token.split(' ')[1], SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ error: error.message('Invalid token')});
  }
}

export default authMiddleware;

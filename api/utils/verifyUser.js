import jwt from 'jsonwebtoken';                //Middelware
import { errorHandler } from './error.js';
export const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token; //get token from cookies which save during authentication
  if (!token) {      //if not found thro error
    return next(errorHandler(401, 'Unauthorized'));
  }
      
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return next(errorHandler(401, 'Unauthorized'));
    }
    req.user = user; // add user detail found in token
    next();
  });
};
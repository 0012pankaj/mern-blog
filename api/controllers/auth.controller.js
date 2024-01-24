import User from '../models/user.model.js';
import bcryptjs from 'bcryptjs';
import { errorHandler } from '../utils/error.js';

export const signup =async (req,res,next)=>{
    const { username, email, password } = req.body;

  if (
    !username ||
    !email ||
    !password ||
    username === '' ||
    email === '' ||
    password === ''
  ) {
    return next(errorHandler(400,"All fields are required")); //handel by function errorHandler in error.js
  }

  const hashedPassword = bcryptjs.hashSync(password, 10); //add salt and made hashcode of our passward 10-->round

  const newUser = new User({
    username,
    email,
    password:hashedPassword,
  });

 try {
    await newUser.save();
    res.json('Signup successful');
 } catch (error) {
    next(error); //handel by middleware in index.js
 }
    
 
}
import User from '../models/user.model.js';
import bcryptjs from 'bcryptjs';
import { errorHandler } from '../utils/error.js';
import jwt from 'jsonwebtoken';

//-----------------------------------------------------------------
//SIGN-UP
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
 //----------------------------------------------------------------------------
 //SIGN IN
 
export const signin = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password || email === '' || password === '') {
    next(errorHandler(400, 'All fields are required'));
  }

  try {
    const validUser = await User.findOne({ email }); //find user in db using email
    if (!validUser) {
      return next(errorHandler(404, 'User not found')); //if user not found
    }
    // hashing and comparing passwords.
    //It compares a plaintext password (password) with a hashed password (retrieved from validUser.password).
    const validPassword = bcryptjs.compareSync(password, validUser.password);
    // result of the comparison is stored in the variable validPassword.True/False

    if (!validPassword) {
      return next(errorHandler(400, 'Invalid password'));
    }
     //generate token
    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
    
    //removing Pasward from validUser object and named passward as pass 
    //and create a new object "rest" contain every thing which is in validuser except password
    const { password: pass, ...rest } = validUser._doc;
   
    //sending responce if every thing is fine (paswward,user)
    // .status(200)=>everything is ok,.cookie('access_token', token, httpOnly: true,})=>
    //Sets an HTTP-only cookie named 'access_token' with the value of the generated JWT (token).
    //The httpOnly: true option restricts client-side access to the cookie, enhancing security.
    res
      .status(200)   
      .cookie('access_token', token, {
        httpOnly: true,
      })
      .json(rest);
  } catch (error) {
    next(error);
  }
};
 
//----------------------route for googleAuth--------------
//in this we use data to check if user present then we signin and send user object except passward
//else, create newuser with username as diplayname of google and pasward using that nameand randomdigit and alphabts then signin,and send user object except passward 


export const google = async (req, res, next) => {
  const { email, name, googlePhotoUrl } = req.body;
  try {
    const user = await User.findOne({ email });
    if (user) {
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
      const { password, ...rest } = user._doc;
      res
        .status(200)
        .cookie('access_token', token, {
          httpOnly: true,
        })
        .json(rest);
    } else {
      const generatedPassword =
        Math.random().toString(36).slice(-8) +
        Math.random().toString(36).slice(-8);
      const hashedPassword = bcryptjs.hashSync(generatedPassword, 10);
      const newUser = new User({
        username:
          name.toLowerCase().split(' ').join('') +
          Math.random().toString(9).slice(-4),
        email,
        password: hashedPassword,
        profilePicture: googlePhotoUrl,
      });
      await newUser.save();
      const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET);
      const { password, ...rest } = newUser._doc;
      res
        .status(200)
        .cookie('access_token', token, {
          httpOnly: true,
        })
        .json(rest);
    }
  } catch (error) {
    next(error);
  }
};
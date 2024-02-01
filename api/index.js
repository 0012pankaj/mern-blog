import express from 'express'; // as we made type ->module we can use import insted of require
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';
import cookieParser from 'cookie-parser';

dotenv.config(); //to use env file first instal and config dotenv
const app=express();

//connect to database
mongoose.connect(process.env.MONGO).then(() => {
    console.log('MongoDb is connected');
  })
  .catch((err) => {
    console.log(err);
  });

  app.use(express.json()); //configuring the Express application to use the built-in middleware express.json().
                          //this middleware parses the JSON data in the requestbody and makes it available in the req.body
  app.use(cookieParser());

  //all routes
  app.use('/api/user',userRoutes);
  app.use('/api/auth',authRoutes);




  //connect to server
app.listen(3000, () => {
    console.log('Server is running on port 3000!');
  });

//middle ware to handel Errors and show what error occur

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
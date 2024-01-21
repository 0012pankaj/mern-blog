import express from 'express'; // as we made type ->module we can use import insted of require
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js';

dotenv.config(); //to use env file first instal and config dotenv
const app=express();

//connect to database
mongoose.connect(process.env.MONGO).then(() => {
    console.log('MongoDb is connected');
  })
  .catch((err) => {
    console.log(err);
  });

  //all routes
  app.use(userRoutes);




  //connect to server
app.listen(3000, () => {
    console.log('Server is running on port 3000!');
  });


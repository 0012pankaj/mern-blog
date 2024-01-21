import express from 'express'; // as we made type ->module we can use import insted of require
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';

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


  //all routes
  app.use('/api/user',userRoutes);
  app.use('/api/auth',authRoutes);




  //connect to server
app.listen(3000, () => {
    console.log('Server is running on port 3000!');
  });


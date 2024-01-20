import express from 'express'; // as we made type ->module we can use import insted of require
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config(); //to use env file first instal and config dotenv
const app=express();

//connect to database
mongoose.connect(process.env.MONGO).then(() => {
    console.log('MongoDb is connected');
  })
  .catch((err) => {
    console.log(err);
  });


  //connect to server
app.listen(3000, () => {
    console.log('Server is running on port 3000!');
  });


import express from 'express' // as we made type ->module we can use import insted of require
const app=express();


app.listen(3000, () => {
    console.log('Server is running on port 3000!');
  });
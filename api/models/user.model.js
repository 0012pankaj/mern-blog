import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type: String,
        required:true,
    },
    profilePicture: {
        type: String,
        default:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ_WtXx8cL9YaKXi7afGhBRRdMhOwJbuIM16UPmHX0yg&s',
      },
    }, {timestamps: true} 
);

const User = mongoose.model('User', userSchema);

export default User;


//{timestamps: true} -> use to store 2 information Time of user-creation and Time of user-update
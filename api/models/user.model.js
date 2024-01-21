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
    }, {timestamps: true} 
);

const User = mongoose.model('User', userSchema);

export default User;


//{timestamps: true} -> use to store 2 information Time of user-creation and Time of user-update
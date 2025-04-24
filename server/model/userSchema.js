import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({

    username: {
        type: String,
        required: true,
        trim: true,

        index: true,
        lowercase: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true
    },
  
});

const user = mongoose.model('user', userSchema);

export default user;
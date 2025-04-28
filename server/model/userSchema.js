import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    trim: true,
    index: true,
    lowercase: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ['user', 'admin'], // you can add more roles later if needed
    default: 'user',
  },
});

// Using 'ToddlerUser' as the model name
const ToddlerUser = mongoose.model('ToddlerUser', userSchema);

export default ToddlerUser;

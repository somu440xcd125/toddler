import ToddlerUser from '../model/userSchema.js';
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from 'dotenv';
import Contact from '../model/contactSchema.js';

// Load environment variables from the .env file
dotenv.config();

// Register
export const registerUser = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const checkUser = await ToddlerUser.findOne({ email });
    if (checkUser)
      return res.json({
        seuccess: false,
        message: "User Already exists with the same email! Please try again",
      });

    const hashPassword = await bcrypt.hash(password, 12);
    const newUser = new ToddlerUser({
      username,
      email,
      password: hashPassword,
       role: 'user',
    });

    await newUser.save();
    res.status(200).json({
      success: true,
      message: "Registration successful",
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Some error occured",
    });
  }
};


// Login
export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const checkUser = await ToddlerUser.findOne({ email });
    if (!checkUser)
      return res.json({
        success: false,
        message: "User doesn't exist! Please register first",
      });

    const checkPasswordMatch = await bcrypt.compare(password, checkUser.password);
    if (!checkPasswordMatch)
      return res.json({
        success: false,
        message: "Incorrect password! Please try again",
      });

    const token = jwt.sign(
      {
        id: checkUser._id,
        role: checkUser.role,
        email: checkUser.email,
        userName: checkUser.username,
      },
      process.env.CLIENT_SECRET_KEY,  // Use the environment variable here
      { expiresIn: "60m" }
    );

    res.cookie("token", token, { httpOnly: true, secure: false }).json({
      success: true,
      message: "Logged in successfully",
      user: {
        email: checkUser.email,
        role: checkUser.role,
        id: checkUser._id,
        userName: checkUser.username,
      },
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Some error occurred",
    });
  }
};

// Logout
export const logoutUser = (req, res) => {
  res.clearCookie("token").json({
    success: true,
    message: "Logged out successfully!",
  });
};

// Auth middleware
export const authMiddleware = async (req, res, next) => {
  const token = req.cookies.token;
  if (!token)
    return res.status(401).json({
      success: false,
      message: "Unauthorized user!",
    });

  try {
    const decoded = jwt.verify(token, process.env.CLIENT_SECRET_KEY);  // Use the environment variable here
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({
      success: false,
      message: "Unauthorized user!",
    });
  }
};


export const contactUser = async (req, res) => {
  const { name, whatsapp } = req.body;
  if (!name || !whatsapp) {
    return res.status(400).json({ message: "Name and WhatsApp are required" });
  }

  try {
    const newContact = await Contact.create({ name, whatsapp });
    res.status(201).json({ message: "Contact request received!", contact: newContact });
  } catch (error) {
    res.status(500).json({ message: error.message || "Server Error" });
  }
};
export const getContact = async (req, res) => {
  try {
    const contacts = await Contact.find(); // Fetch all contacts from the database
    res.status(200).json(contacts); // Send the contacts as JSON response
  } catch (error) {
    console.error('Error fetching contacts:', error);
    res.status(500).json({ message: 'Server error while fetching contacts' });
  }
};
import mongoose from 'mongoose';

// Create the schema for the admission form
const admissionSchema = new mongoose.Schema(
  {
    // Child Information
    childFirstName: {
      type: String,
      required: [true, 'First name is required'],
    },
    childLastName: {
      type: String,
      required: [true, 'Last name is required'],
    },
    childDob: {
      type: Date,
      required: [true, 'Date of birth is required'],
    },
    program: {
      type: String,
      enum: ['toddlers', 'preschool', 'preK', 'kindergarten'],
      required: [true, 'Program selection is required'],
    },
    startDate: {
      type: Date,
      required: [true, 'Start date is required'],
    },

    // Parent/Guardian Information
    parentName: {
      type: String,
      required: [true, 'Parent name is required'],
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      match: [/.+@.+\..+/, 'Please enter a valid email address'],
    },
    phone: {
      type: String,
      required: [true, 'Phone number is required'],
    },
    address: {
      type: String,
      required: [true, 'Address is required'],
    },

    // Emergency Contact
    emergencyContactName: {
      type: String,
      required: [true, 'Emergency contact name is required'],
    },
    emergencyContactPhone: {
      type: String,
      required: [true, 'Emergency contact phone is required'],
    },

    // Additional Information
    specialNeeds: {
      type: String,
      default: '',
    },
    hearAboutUs: {
      type: String,
      required: [true, 'This field is required'],
      enum: ['search', 'social', 'friend', 'event', 'other'],
    },

    // Terms and Conditions
    agreeTerms: {
      type: Boolean,
      required: [true, 'You must agree to the terms and conditions'],
    },
  },
  { timestamps: true } // Automatically track creation and update times
);

// Create the model based on the schema
const Admission = mongoose.model('Admission', admissionSchema);

export default Admission;

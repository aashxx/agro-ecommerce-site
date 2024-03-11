// pages/backend/db.js
import mongoose from 'mongoose';

const mongoURI = process.env.NEXT_PUBLIC_MONGO_URI;

const connectToMongo = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
};

export default connectToMongo;

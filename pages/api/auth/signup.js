import { connectToMongo } from "../../../backend/db";
import { User } from "../../../backend/models/User";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { validationResult } from 'express-validator';

const JWT_SECRET = 'user@uthentication$ecret'; // JWT signature

export default async function handler(req, res) {
  if (req.method === 'POST') {
    // Data validation
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // Prevent duplicate email
    // let existingUser = await User.findOne({ email: req.body.email });
    // if (existingUser) {
    //   return res.status(400).json({ error: 'Email already exists' });
    // }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    // Create new user
    connectToMongo();
    const newUser = new User({
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword
    });

    try {
      await newUser.save();
      const authToken = jwt.sign({ user: { id: newUser.id } }, JWT_SECRET);
      res.status(201).json({ authToken });
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
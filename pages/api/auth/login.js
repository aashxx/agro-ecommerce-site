import connectToMongo from '../../backend/db';
import User from '../../backend/models/User';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const JWT_SECRET = 'user@uthentication$ecret';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, password } = req.body;

    connectToMongo();

    try {
      const user = await User.findOne({ email });

      if (!user) {
        return res.status(400).json({ error: 'Invalid credentials' });
      }

      const isPasswordValid = await bcrypt.compare(password, user.password);

      if (!isPasswordValid) {
        return res.status(400).json({ error: 'Invalid credentials' });
      }

      const authToken = jwt.sign({ user: { id: user._id } }, JWT_SECRET);

      res.status(200).json({ authToken });
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}

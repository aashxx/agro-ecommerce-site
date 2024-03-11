// pages/api/auth/getuser.js
import User from '../../backend/models/User';
import connectToMongo from '../../backend/db';
import fetchUser from '../../backend/middlewares/fetchuser';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      // Use the fetchUser middleware to authenticate and fetch user details
      fetchUser(req, res, async () => {
        // If authenticated, fetch the user data using the user ID from the req object
        const userId = req.user.id;
        connectToMongo();
        const user = await User.findById(userId).select('-password');
        res.status(200).json(user);
      });
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}

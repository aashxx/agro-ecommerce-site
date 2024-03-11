// pages/api/fetchuser.js
import jwt from 'jsonwebtoken';

const JWT_SECRET = 'user@uthentication$ecret'; // JWT signature

const fetchUser = async (req, res, next) => {
    // Passing the authToken as a header and authenticating it.
    const token = req.headers['auth-token'];
    if (!token) {
        res.status(401).send({ error: "Please authenticate using a valid token" });
        return; // Add a return statement to prevent further execution
    }

    // Verifying generated authToken with present authToken and fetching user data.
    try {
        const data = jwt.verify(token, JWT_SECRET);
        req.user = data.user;
        next();
    } catch (error) {
        res.status(401).send({ error: "Please authenticate using a valid token" });
    }
};

export default fetchUser;

import { User } from '../../models/index.js';
import express from 'express';

const router = express.Router();

// Creates new user
router.post('/register', async (req, res) => {
    try {
        const { email, password } = req.body;

        const existingUser = await User.findOne({ where: { email } });

        if (existingUser) {
            return res.status(400).json({ success: false, message: 'User already exists' });
        }

        const newUser = await User.create({ email, password });

        // Creates a session
        req.session.user = newUser.toJSON();

        res.status(201).json({ success: true, message: 'Registration successful' });
    } catch (error) {
        console.error('Registration error:', error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
});

// User logs in
router.get('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ where: { email } });

        if (!user || !user.checkPassword(password)) {
            return res.status(400).json({ success: false, message: 'Invalid credentials' });
        }

        // Creates a session
        req.session.user = user.toJSON();

        res.status(200).json({ success: true, message: 'Login successful' });
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
});


export default router;

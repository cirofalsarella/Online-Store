const express = require('express');
const router = express.Router();

function createAuthRouter(db) {
    // Route: POST /api/auth/login

    router.post('/login', async (req, res) => {
        const { email, password } = req.body;
        try {
            const user = await db.collection('users').findOne({ email, password });
            if (user) {
                // Set the user's login status

                // Your code to set the login status goes here

                // Send a success response
                return res.status(200).json({ message: 'Login successful' });
            } else {
                // Send an error response if the user does not exist
                return res.status(401).json({ message: 'Invalid credentials' });
            }
        } catch (err) {
            console.error('Error during login:', err);
            // Send an error response if an error occurred
            return res.status(500).json({ message: 'Internal server error' });
        }
    });

    return router;
}

module.exports = router;

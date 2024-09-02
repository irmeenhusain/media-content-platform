const express = require('express');
const router = express.Router();
const { registerUser } = require('../controllers/authController');

router.post('/add', async (req, res) => {
    try {
        const result = await registerUser(req.body); 
        res.status(result.status).json(result.data); 
    } catch (error) {
        console.error('Error creating user:', error);
        if (!res.headersSent) {
            res.status(500).json({ message: 'Internal Server Error' });
        }
    }
});

module.exports = router;
const User = require('../../models/User');
const jwt = require('jsonwebtoken');


exports.auth = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ where: { email } });
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        if (user.password !== password) {
            return res.status(401).json({ error: 'Invalid password' });
        }
        const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, { expiresIn: '15m' });
        res.status(200).json({ token });

    } catch (error) {
        res.status(500).json({ error: 'Failed to login' });
    }

};

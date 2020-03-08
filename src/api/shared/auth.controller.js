/* eslint-disable no-underscore-dangle */
const jwt = require('jsonwebtoken');
const User = require('../user/user.model');
const authConfig = require('../../config/auth');

module.exports = {
  async register(req, res) {
    const { email } = req.body;
    try {
      if (await User.findOne({ email })) {
        return res.status(400).send({ error: 'User already exists' });
      }

      const user = await User.create(req.body);

      const token = jwt.sign(user._id, authConfig.secret, { expiresIn: 10000 });

      return res.status(200).json({ user, token });
    } catch (error) {
      return res.status(400).send({ error: 'Registration failed' });
    }
  },
  async login(req, res) {
    try {
      const { email } = req.body;

      const user = await User.findOne({
        where: { email },
      });

      if (!user) {
        return res.status(401).json({ error: 'User not exist' });
      }

      return res.status(200).json(user);
    } catch (error) {
      return res.status(500).json({ error: 'User not exist' });
    }
  },
};

const User = require('./user.model');

module.exports = {
  async index(req, res) {
    try {
      const users = await User.find().sort('-createdAt');
      return res.status(200).json(users);
    } catch (error) {
      return res.status(400).send({ error: 'Failed to fetch users' });
    }
  },
  async create(req, res) {
    const { email } = req.body;
    try {
      if (await User.findOne({ email })) {
        return res.status(400).send({ error: 'Email already exists' });
      }
      const user = await User.create(req.body);
      return res.status(200).json(user);
    } catch (error) {
      return res.status(400).send({ error: 'Registration failed!!' });
    }
  },
  async update(req, res) {
    try {
      const user = await User.findOneAndUpdate({ _id: req.params.id });

      if (!user) {
        return res.status(400).json({ error: 'User not found' });
      }

      return res.status(200).json({ ok: true });
    } catch (error) {
      return res.status(400).send({ error: 'Update failed' });
    }
  },
  async delete(req, res) {
    await User.findByIdAndRemove(req.params.id);
    return res.status(200).json({ ok: true });
  },
};

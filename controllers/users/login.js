const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
// require('dotenv').config();

const { SECRET_KEY } = process.env;

const { User } = require('../../models/user');
const { RequestError } = require('../../helpers');

const login = async (req, res) => {
  const { name, password } = req.body;
  const user = await User.findOne({ name });
  console.log('lox');
  if (!user) {
    throw RequestError(401, 'Name or password is wrong');
  }

  const passwordCompare = await bcrypt.compare(password, user.password);
  if (!passwordCompare) {
    throw RequestError(401, 'Name or password is wrong');
  }

  const payload = {
    id: user._id,
  };

  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: '24h' });
  await User.findByIdAndUpdate(user._id, { token });

  res.json({
    token,
    user: {
      name: user.name,
    },
  });
};

module.exports = login;

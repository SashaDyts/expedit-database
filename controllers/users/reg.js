const bcrypt = require('bcrypt');

const { User } = require('../../models/user');
const { RequestError } = require('../../helpers');

const reg = async (req, res) => {
  const { name, password } = req.body;

  const user = await User.findOne({ name });

  if (user) {
    throw RequestError(409, 'Name in use');
  }

  const hashPassword = await bcrypt.hash(password, 10);

  const result = await User.create({ name, password: hashPassword });

  res.status(201).json({
    user: {
      name: result.name,
    },
  });
};

module.exports = reg;

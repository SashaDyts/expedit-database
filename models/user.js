const { Schema, model } = require('mongoose');

const userSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Set name for user'],
  },

  password: {
    type: String,
    required: [true, 'Set password for user'],
  },

  token: String,
});

userSchema.post('save', (err, data, next) => {
  err.status = 400;

  next();
});

const User = model('user', userSchema);

module.exports = {
  User,
};

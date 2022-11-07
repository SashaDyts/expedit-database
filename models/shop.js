const { Schema, model } = require('mongoose');

const shopSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Set name for shop'],
  },

  locality: {
    type: String,
    required: [true, 'Set locality'],
  },

  coords: {
    type: Object,
    required: [true, 'Set coords'],
  },

  shopOwner: {
    type: String,
    required: [true, 'Set shop owner'],
  },
  notes: { type: String },

  token: String,
});

shopSchema.post('save', (err, data, next) => {
  err.status = 400;

  next();
});

const Shop = model('shop', shopSchema);

module.exports = {
  Shop,
};

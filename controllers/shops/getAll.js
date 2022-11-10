const { Shop } = require('../../models/shop');

const getAll = async (req, res, next) => {
  const { page = 1, limit = 1, ...filter } = req.query;

  const skip = (page - 1) * limit;

  const result = await Shop.find({}, '-__v', {
    skip,
    limit,
  }).populate('name');
  res.json(result);
};

module.exports = getAll;

const { Shop } = require('../../models/shop');

const addShop = async (req, res, next) => {
  const newShop = { ...req.body };

  const result = await Shop.create({ ...newShop });

  res.status(201).json(result);
};

module.exports = addShop;

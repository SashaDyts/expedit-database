const { RequestError } = require('../../helpers');
const { Shop } = require('../../models/shop');

const getById = async (req, res, next) => {
  const { shopId } = req.params;

  const result = await Shop.findById(shopId);

  if (!result) {
    throw RequestError(404, 'Not found');
  }

  res.json(result);
};

module.exports = getById;

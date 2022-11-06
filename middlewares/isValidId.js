const { isValidObjectId } = require('mongoose');

const { RequestError } = require('../helpers');

const isValidId = (req, res, next) => {
  console.log(req.params);
  const { shopId } = req.params;
  const result = isValidObjectId(shopId);
  if (!result) {
    next(RequestError(400, 'Invalid id format'));
  }
  next();
};

module.exports = isValidId;

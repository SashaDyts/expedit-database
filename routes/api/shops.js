const express = require('express');
const { shops: shopsCtrl } = require('../../controllers');
const { ctrlWrapper } = require('../../helpers');
const { isValidId, authenticate, upload } = require('../../middlewares');

const router = express.Router();

router.get('/', authenticate, ctrlWrapper(shopsCtrl.getAll));
router.get('/:shopId', authenticate, isValidId, ctrlWrapper(shopsCtrl.getById));
router.post('/', authenticate, ctrlWrapper(shopsCtrl.addShop));
router.post(
  '/photo/:shopId',
  authenticate,
  upload.single('shophoto'),
  ctrlWrapper(shopsCtrl.addShopPhoto)
);

module.exports = router;

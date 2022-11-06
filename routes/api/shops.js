const express = require('express');
const { shops: shopsCtrl } = require('../../controllers');
const { ctrlWrapper } = require('../../helpers');
const { isValidId, authenticate } = require('../../middlewares');

const router = express.Router();

router.get('/', authenticate, ctrlWrapper(shopsCtrl.getAll));
router.get('/:shopId', authenticate, isValidId, ctrlWrapper(shopsCtrl.getById));
router.post('/', authenticate, ctrlWrapper(shopsCtrl.addShop));

module.exports = router;

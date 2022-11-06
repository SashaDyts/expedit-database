const express = require('express');
const { shops: shopsCtrl } = require('../../controllers');
const { ctrlWrapper } = require('../../helpers');
const { isValidId, authenticate } = require('../../middlewares');

const router = express.Router();

router.post('/', authenticate, ctrlWrapper(shopsCtrl.addShop));

module.exports = router;

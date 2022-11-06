const express = require('express');
const { users: usersCtrl } = require('../../controllers');
const { ctrlWrapper } = require('../../helpers');
const { authenticate } = require('../../middlewares');

const router = express.Router();

router.post('/reg', ctrlWrapper(usersCtrl.reg));
router.post('/login', ctrlWrapper(usersCtrl.login));
router.get('/current', authenticate, ctrlWrapper(usersCtrl.getCurrent));

module.exports = router;

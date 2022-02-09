const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/user');
const limit = require('../middleware/limit');

router.post('/signup', userCtrl.signup);
router.post('/login', limit, userCtrl.login);

module.exports = router;
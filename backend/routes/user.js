const express = require('express');
const router = express.Router();
router.post('/', require('../controllers/user').createUser);
router.get('/', require('../controllers/user').getUser);
router.get('/:id', require('../controllers/user').getU);

module.exports = router;
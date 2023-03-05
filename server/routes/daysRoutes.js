const express = require('express');
const daysController = require('../controllers/daysController');
const router = express.Router();

router.get('/daysmessages', daysController.getDays);

module.exports = router;
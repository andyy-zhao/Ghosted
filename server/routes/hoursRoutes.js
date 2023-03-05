const express = require('express');
const hoursController = require('../controllers/hoursController');
const router = express.Router();

router.get('/senthours', hoursController.getSentTimes);
router.get('/receivedhours', hoursController.getReceivedTimes);

module.exports = router;
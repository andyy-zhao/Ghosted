const express = require('express');
const sentAndReceivedController = require('../controllers/sentAndReceivedController');
const router = express.Router();

router.get('/sentandreceived', sentAndReceivedController.getSentAndReceived);
router.get('/sentemojis', sentAndReceivedController.getSentEmojis);
router.get('/receivedemojis', sentAndReceivedController.getReceivedEmojis);

module.exports = router;
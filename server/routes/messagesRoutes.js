const express = require('express');
const messagesController = require('../controllers/messagesController');
const router = express.Router();

router.get('/messages', messagesController.getAllMessages);

module.exports = router;
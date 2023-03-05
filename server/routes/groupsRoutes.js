const express = require('express');
const groupsController = require('../controllers/groupsController');
const router = express.Router();

router.get('/groupchats', groupsController.getGroupChats);

module.exports = router;
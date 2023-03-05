const express = require('express');
const ratingsController = require('../controllers/ratingsController');
const router = express.Router();

router.get('/ratings', ratingsController.getRatings);
router.get('/names', ratingsController.getNames);
router.get('/topword', ratingsController.getTopWord);
router.get('/receivedwords', ratingsController.getReceivedWords);
router.get('/topemoji', ratingsController.getTopEmoji);

module.exports = router;
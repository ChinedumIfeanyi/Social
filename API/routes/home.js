var express = require('express');
var router = express.Router();
const homeController = require('../controllers/homeController');
router.route('/')
    .get(homeController.home);

module.exports = router;
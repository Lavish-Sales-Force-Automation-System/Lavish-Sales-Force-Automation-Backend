const express = require('express');
const router = express.Router();
const analytics = require("../controllers/analytics.controller");
const verifyToken = require("../auth/verifyToken.js");

router.post('/yearlysales',verifyToken,analytics.yearlySales);


module.exports = router;
const express = require('express');
const router = express.Router();
const { sendSmsControl } = require('../controllers/smsController');

router.post('/send-sms-via-twilio', sendSmsControl);

module.exports = router;

import { Request, Response } from 'express';

const catchAsyncFunc = require('../middlewares/catchAsyncError');
const errorHandler = require('../utils/errorHandler');

//?TWILIO SMS FUNCTION
const sendMessage = require('../utils/sendSmsTwilio');

exports.sendSmsControl = catchAsyncFunc(async (req: Request, res: Response) => {
  sendMessage();
  res.status(200).json({
    success: true,
    message: 'SMS sent successfully using twilio',
  });
});

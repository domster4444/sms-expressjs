import { Request, Response } from 'express';
const ErrorHandler = require('../utils/errorHandler');

const globalErrorMiddleware = (
  err: any,
  req: Request,
  res: Response,
  next: Function
) => {
  //? if error exist but it's exception with no status code and no message then,
  //? let 500 be the status code and message be "Exceptional Error From Internal Server -msg from errorMiddleware"
  err.statusCode = err.statusCode || 500;
  err.message =
    err.message ||
    'Exceptional Error From Internal Server =msg from Global Error Middleware';
  //? wrong mongodb id error
  if ((err.name = 'CastError')) {
    const message = `resource not found. Invalid : ${err.path}`;
  }
  //? mongoose duplicate key error
  if (err.code === 11000) {
    const message = `Duplicate field value entered,  ${Object.keys(
      err.keyValue
    )} entered twice`;
  }

  //? Wrong JWT error
  if (err.name === 'JsonWebTOkenError') {
    const message = `Invalid JWT Token`;
    err = new ErrorHandler(message, 401);
  }
  //? Expired JWT error
  if (err.name === 'TokenExpiredError') {
    const message = `Expired JWT Token`;
    err = new ErrorHandler(message, 401);
  }
  res.status(err.statusCode).json({
    success: false,
    message: err.message,
  });
};

module.exports = globalErrorMiddleware;

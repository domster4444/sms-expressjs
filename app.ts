import { Request, Response } from 'express';
import { connect } from 'react-redux';

//? config app
const express = require('express');
const app = express();

//? config dotenv
const dotenv = require('dotenv');
dotenv.config({ path: './configs/config.env' });

//? config cors
const cors = require('cors');
const allowedOrigin =
  process.env.NODE_ENV === 'development' ? '*' : process.env.PROD_CLIENT_URL;
app.use(
  cors({
    origin: allowedOrigin,
    methods: ['GET', 'PUT', 'PATCH', 'POST', 'DELETE'],
  })
);

//? connect to db
// const connectDB = require('./confgs/database');
//connect to db
// const databaseUrl= process.env.DATABASE_URL;
// connectDB(databaseUrl);

//? config cookie parser
const cookieParser = require('cookie-parser');
app.use(cookieParser());

//? config body parser
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

//? config morgan
const morgan = require('morgan');
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

//todo: routes imports
const sendSmsRoutes = require('./routes/sendSmsRoutes');
app.use('/api/v1', sendSmsRoutes);

app.get('/', (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: 'Welcome to server root endpoint',
  });
});

//? config globalErrorMiddleware
const globalErrorMiddleware = require('./middlewares/globalErrorMiddleware');
app.use(globalErrorMiddleware);

module.exports = app;

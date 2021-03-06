const express = require('express');
const logger = require('morgan');
require('dotenv').config({ path: './config/keys.env' });
const db = require('./db/db');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const shopsRouter = require('./routes/shops');
const {isAuthenticated} = require('./middlewares/middlewares');
const app = express();
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(isAuthenticated)

app.use('/', indexRouter);
// app.use('/',userController.isAuthenticated, indexRouter);
app.use('/users', usersRouter);
app.use('/shops', shopsRouter);

module.exports = app;

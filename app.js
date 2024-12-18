//const express = require('express')
import express from 'express';
import indexRouter from './routes/index.js';
import userRouter from './routes/user.js';
import db from './models/index.js';
const app = express();
const port = process.env.PORT || 3000;

// Model Synchronization : 모델-DB 동기화
db.sequelize.sync({ force: false });

app.use(express.static('public')); // static
app.use(express.json()); // json 파싱
app.use(express.urlencoded({ extended: true })); // form 데이터 파싱

app.use('/', indexRouter);
app.use('/users', userRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}...`);
});

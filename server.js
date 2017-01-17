import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
// import config from 'config.local';
import logger from 'morgan';
import router from './routes';
const app = express();

app.use(cors());
app.use(logger('dev'));

//fix this later...
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`app listening on port ${PORT}`);
})

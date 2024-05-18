import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import { userRouter } from './routes/v1/user.route';
const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/api/v1', userRouter);

//ping check
app.get('/ping', (req, res) => {
  res.status(200).json({ message: 'pong' });
});

export { app };

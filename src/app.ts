import express from 'express';
import cors from 'cors'
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';

const app = express();
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use(cors())
app.use(express.json())
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use("/api/v1", )



export default app
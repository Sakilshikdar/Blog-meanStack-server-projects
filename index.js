import express from 'express'
import Connection from './database/bd.js';


import dotenv from 'dotenv'
import Router from './routes/route.js';

dotenv.config()

const app = express();

app.use('/', Router);

const USER = process.env.DB_USER;
const PASSWORD = process.env.DB_PASSWORD;


const PORT = 8000;

app.listen(PORT, () => console.log(`Server is running successfully on PORT From ${PORT}`))
Connection(USER, PASSWORD);
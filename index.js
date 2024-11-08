import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { router } from './routes/userRoutes.js';

dotenv.config();
const app=express();
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cors());
app.use('/api',router);

const PORT=process.env.PORT || 4000;
app.listen(PORT,()=>console.log(`server listening on ${PORT}`));
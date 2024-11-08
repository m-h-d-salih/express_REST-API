import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();
const app=express();
app.use(express.json());
app.use(cors());
app.get('/',(req,res)=>{
    res.send('hii')
})
const PORT=process.env.PORT || 4000;
app.listen(PORT,()=>console.log(`server listening on ${PORT}`));
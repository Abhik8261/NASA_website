
const express=require('express')
const dotenv=require('dotenv')
const app=require('./app')


dotenv.config();


const PORT=process.env.PORT || 5000;


app.listen(PORT,()=>{
    console.log(`server is running on http://localhost:${PORT}`);
})
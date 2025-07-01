const express=require('express') 
const MarsRover= require('./routes/marsrover');
const cors=require('cors');
const apodRoutes =require('./routes/apod')
const neoRoutes=require('./routes/Neo')

const app=express();
app.use(cors());
app.use(express.json());


app.use('/api/apod',apodRoutes);
app.use('/api/mars',MarsRover)
app.use('/api/neo',neoRoutes)

module.exports = app;
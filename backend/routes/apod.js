const express=require('express')

const {getApodData} =require('../controller/apodController.js')

const router=express.Router();
router.get('/',getApodData);

module.exports= router;

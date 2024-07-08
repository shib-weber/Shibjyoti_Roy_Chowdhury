const express=require('express');
const mongoose=require('mongoose')
const feedback=require('../models/index')
const path = require("path");

const router=express.Router();
router.use(express.json());
router.use(express.static(path.join(__dirname, '../public')));

router.get('/',async(req,res)=>{
    const allfee=await feedback.find({});
    const allfeeds=allfee.reverse();
    res.render('index',{allfeeds})
})

router.post('/feedback',async(req,res)=>{
    const feed=req.body;
    const feedst= await feedback.create({
        Name:feed.answer1,
        rate:feed.answer2,
        like:feed.answer3,
        improve:feed.answer4,
        additional:feed.answer5
    })
    res.json({ message: 'Feedback saved successfully'});
})

module.exports= {router}
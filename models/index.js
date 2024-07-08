const mongoose=require('mongoose');

const feedbackSchema= new mongoose.Schema({
    Name:{
        type:String,
        required:true,
    },
    rate:{
        type:Number,
        required:true,
    },
    like:{
        type:String,
        required:true,
    },
    improve:{
        type:String,
        required:false,
    },
    additional:{
        type:String,
        required:false,
    }
})

const feedback=mongoose.model("feed",feedbackSchema)

module.exports=feedback
const mongoose= require("mongoose");

const postSchema=new mongoose.Schema({
    title:String,
    pic:String,
    context:String,    
},{timestamps:true,})

const postModel=new mongoose.model('post',postSchema);

module.exports= postModel;

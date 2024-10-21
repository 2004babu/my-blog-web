const mongoose =require('mongoose')


const enquiriesSchema=new mongoose.Schema({
    name:{type:String,required:true},
    message:{type:String,required:true},
    email:{type:String,required:true},
})

const enquiriesModel=new mongoose.model('enquiries',enquiriesSchema);

module.exports=enquiriesModel
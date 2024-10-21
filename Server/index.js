const express =require("express")
const mongoose=require('mongoose')
const postModel = require("./models/postModel")
const enquiriesModel = require("./models/enquiries")
const cors =require('cors')

const app=express()


app.use(cors({origin:true}))
app.use(express.json())

app.use(cors({origin:true}))

const connectMongoose=async()=>{
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/my-blog')
    } catch (error) {
        console.log(error);        
    }finally{
        console.log('llllllllllllll');
        
    }
}
connectMongoose()


app.get('/api/post',async(req,res)=>{
    try {
        const  posts=await postModel.find({})
        
        return res.status(200).json({posts,success:true})

    } catch (error) {
        console.log(error);
        
        
    }
})

app.get('/api/post/search?',async(req,res)=>{

    console.log(req.query);
    
    const searchQuery=req.query.s;
    
    if (typeof searchQuery !=='string') {
        return res.status(400).json({ error: 'Search query must be a string' });

    }
console.log(searchQuery);

    const posts = await postModel.find({
        $or: [
          { title: { $regex: searchQuery, $options: 'i' } },  // Case-insensitive regex search
          { context: { $regex: searchQuery, $options: 'i' } }
        ]
      });       
        if (!posts) {
            return res.status(404).json({success:false,posts,error:'not Founded'})
        }
    return res.status(200).json({success:true,posts})
})
app.post('/api/enquiries',async(req,res)=>{
try {
    console.log(req.body);
    
    const {name,email,message}=req.body

    if (!name||!email||!message) {
        return res.status(300).json({message:"fill The Value and Submit "})
    }



    const enquries= await enquiriesModel.create({name,email,message})
        if (!enquries) {
            return res.status(404).json({success:false,enquries,error:'not Founded'})
        }
    return res.status(200).json({success:true,enquries})
} catch (error) {
    console.log(error);
    
    
}
})





app.listen(4444,()=>{
    console.log('server Listening  ');   
});
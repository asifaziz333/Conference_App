const User=require('../models/User')
const Feedback=require('../models/Feedback')
const Confrence=require('../models/Admin')
const  bcrypt=require('bcrypt');
const Userform=async(req,res)=>{
    try{
        const{name,email,password,date,time}=req.body;
        console.log("hii");
        
        console.log(req.body);
        const data=new User({
            name,email,password,date,time
        })
        console.log(data);
        const result=await data.save()
        console.log(result);
        console.log("bye");
        
        res.status(200).send(result)
    }catch(err){
        console.log("Internal error"); 
    }
}

const feedbackbox=async(req,res)=>{
    try{
        const{name,email,message}=req.body;
        console.log(req.body);
        console.log("hii");
        
        const data=new Feedback({
            name,email,message
        })
        console.log("bye");
        
        console.log(data);
        const result=await data.save();
        console.log(result);
        res.status(200).send(result)

    }catch(err){
        console.log("Internal error");
    }
}
const Login=async(req,res)=>{
    try{
        const {email,password}=req.body;
        const user=await User.findOne({email}); 
        console.log(user);
        console.log(!user);
        
        if(!user){
            return res.status(404).send({message:"User not found"})
            }
            const isMatch=await bcrypt.compare(password,user.password);
            if(!isMatch){
                return res.status(400).send({message:"Invalid password"})
            }
            const token=await user.generateToken();
            res.status(200).json({message:"Login succesfully",auth:token,user});
    }catch(err){
        console.log(err);   
    }
}
const getConfrences=async(req,res)=>{
    try{
        const data=await Confrence.find()
        res.status(200).send(data)
    }catch(err){
        res.send(401).send({"message":"Data not fetch"})
    }
}

module.exports={Userform,Login,getConfrences,feedbackbox}
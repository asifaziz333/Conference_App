const Confrence=require('../models/Admin')
const User=require('../models/User');

const AdminConfrenceForm=async(req,res)=>{
    try {
        const{title,date,startTime,endTime}=req.body;
        console.log(req.body);
        
        const data=new Confrence({
            title,date,startTime,endTime
        })
        let result=await data.save();
        res.status(200).send(result);
    }catch(err){
        console.log("face error");
    }
}

const getConfrences=async(req,res)=>{
    try{
        const data=await User.find();
        res.status(200).send(data);
    }catch(err){
        console.log("face error");
        res.send({"message":"Not fetch the data"})
        
    }
}
module.exports={AdminConfrenceForm,getConfrences}
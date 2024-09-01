const mongoose=require('mongoose');
const connectdb=async()=>{
    try{
        await mongoose.connect('mongodb://localhost:27017/confrence');
        console.log("database created successfully");
        
    }catch(err){
        console.log("database connection fail");
    }
}
module.exports=connectdb
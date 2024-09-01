const mongoose=require('mongoose');
// const TimeSlotSchema = new mongoose.Schema({
//     startTime: { type: String, required: true },
//     endTime: { type: String, required: true },
//   });
const ConfrenceSchema=new mongoose.Schema({
    title:{
        type:String,
        require:true
    },
    date:{
        type:String,
        require:true
    },
    startTime:
     { type: String, 
        required: true },
    endTime:
     { type: String, 
        required: true },
})
const Confrence=mongoose.model("confrenceform",ConfrenceSchema)
module.exports=Confrence
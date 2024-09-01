const mongoose=require('mongoose')
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
const key=process.env.JWT_SECRET_KEY || "agami"
const userSchema=new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    date:{
        type:String,
        require:true
    },
    time:{
        type:String,
        require:true
    },
    isAdmin:{
        type:Boolean,
        default:false
    }
})
userSchema.pre("save",async function(next){
   user=this;
   try{
    if(!user.isModified("password")){
        next();
    }
   let hashpassword= await bcrypt.hash(user.password,10)
   user.password=hashpassword;
   next();
   }catch(err){
    console.log(err); 
   }   
})

userSchema.methods.generateToken=async function(){
    try{
        return jwt.sign({
            userId:this._id.toString(),
            name:this.name,
            email:this.email,
            isAdmin:this.isAdmin,
        },
       `${key}`,
        {
            expiresIn:'30d'

        }
    );
}catch(err){
    console.log(err);
}
}


const User=mongoose.model('User',userSchema)
module.exports=User


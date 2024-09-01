const jwt=require("jsonwebtoken");
const key=process.env.JWT_SECRET_KEY || "agami"
console.log(process.env.JWT_SECRET_KEY);
console.log(key);


const authMiddleware=(req,res,next)=>{
    console.log("hii auth");
    
    let token=req.headers['authorization'];
    if(token){
        token=token.replace("bearer","").trim();
try{
   
    const decoded=jwt.verify(token,key);
  
    req.user=decoded;
    console.log("bye auth");
    
    next();
}catch(err){
    res.status(401).send("Please provide valid token");
}
}else{
    res.status(403).send("Please provide in token in headers..")
}
}


module.exports=authMiddleware;

const authAdmin=(req,res,next)=>{
    let admin=req.user.isAdmin;
    console.log("admin check middleware");
    console.log(admin);
     if(admin){
        console.log("yes admin verify");
        next();
        }else{
            res.status(403).send("You are not authorized to access this route");
            }   
        }
        module.exports=authAdmin
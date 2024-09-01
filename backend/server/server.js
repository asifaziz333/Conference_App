const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors');
const bodyParser = require('body-parser');
const connectDb=require('./utils/db')
const adminrouter=require('./routers/AdminRouter')
const userrouter=require('./routers/UserRouter')
const app=express();
const port=5000;
app.use(express.json());
app.use(cors())
app.use(bodyParser.json());
app.use('/api/admin',adminrouter)
app.use('/api/user',userrouter);
connectDb().then(()=>{
    app.listen(port,()=>{
    console.log(`server is running port number ${port}`);
})
})
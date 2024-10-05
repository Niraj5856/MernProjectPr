const express=require("express");
const app=express();
const cors=require("cors");
const dotenv=require("dotenv").config()
const DB=require("../Mern-server/config/dataBase")
const route=require("./routes/todoRoutes")



//Ports 
const Port=process.env.PORT || 4000


//middeleware 
app.use(cors());
app.use(express.json());

//dataBAse connection here 
DB()

//route moute here 
app.use("/user" ,route);

//route mount here 

//server create here 
app.listen(Port ,()=>{
    console.log(`Server is runing at ${Port} Port`)
})

//Home route for check the Network tab
app.get("/" ,(req ,res )=>{
    res.send(`server is runing at Port ${Port}`);
})


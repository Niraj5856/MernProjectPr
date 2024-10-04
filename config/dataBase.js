const mongoose=require("mongoose");

const Db=()=>{
    mongoose.connect(process.env.dataUrl)
    .then(()=>{
        console.log("Db connected successfully")
    })
    .catch((error)=>{
        console.log("DB not connected",error);
    })
}

module.exports=Db
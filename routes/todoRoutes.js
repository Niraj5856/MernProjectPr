const express=require("express")
const router=express.Router()

//controller 

const {createTodo}=require("../todoController/TodoCreate")


//router all here 

router.post("/addTodo" ,createTodo);

module.exports = router;
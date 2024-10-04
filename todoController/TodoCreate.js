const TodoModel = require("../models/TodoModel")

exports.createTodo = async (req, res) => {
    try {
        const {name ,phone ,description ,address}=req.body;
        const response=await TodoModel.create({name ,phone ,description ,address});

        return res.status(201).json({
            success:true ,
            data:response ,
            message:"sucessfully created todo"
        })

    } catch (error) {
        return res.status(500).json({
            message:error.message
        })

    }
}
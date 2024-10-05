const TodoModel = require("../models/TodoModel")

exports.createTodo = async (req, res) => {
    try {
        const { name, phone, description, address } = req.body;
        const response = await TodoModel.create({ name, phone, description, address });
        console.log("addTodo", response)
        return res.status(201).json({
            success: true,
            data: response,
            message: " created todo"
        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })

    }
}

exports.getAllTodo = async (req, res) => {
    try {
        const dataResponse = await TodoModel.find({})
        console.log("addTodo", dataResponse)
        return res.status(201).json({
            success: true,
            data: dataResponse,
            message: "all Todos"
        })



    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })

    }

}

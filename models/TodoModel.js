const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true
    },
    description: {
        type: String,
        trim: true,

    },
    phone: {
        type: Number,
        trim: true
    }
},
    { timestamps: true }
)

module.exports=mongoose.model("TODO" ,TodoSchema);
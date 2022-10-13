import mongoose from "mongoose";

    const user =mongoose.Schema({
        name:{
            type :String,
            require:true
        },
        userName:{
            type: String,
            unique: true,
            require: true
        },
        password:{
            type: String,
            require: true
        }
    })
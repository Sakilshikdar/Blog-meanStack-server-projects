import mongoose from "mongoose"



 const Connection = async(USER, PASSWORD)=>{
    const URL = `mongodb+srv://${USER}:${PASSWORD}@cluster0.wvaxakw.mongodb.net/?retryWrites=true&w=majority`
    try{
        await mongoose.connect(URL, {userNewUrlParser: true})
        console.log('Database connected');
    }catch{
            console.log('Error while connecting with the database')
        }
    }

export default Connection;
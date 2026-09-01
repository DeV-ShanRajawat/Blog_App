import dotenv from "dotenv/config"
import mongoose from "mongoose"

export default function ConnectDB()
{
    mongoose.connect(process.env.MONGODB_URI)
    .then(()=>{
        console.log("Connected to MONGO DB...")
    })
    .catch((error)=>{
        console.log(error)
    })
}
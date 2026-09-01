import express from 'express';
import cors from 'cors'
import dotenv from 'dotenv/config'

import ConnectDB from './config/Db.js'
import userRoutes from "./routes/userRoutes.js"
import blogRoutes from "./routes/blogRoutes.js"

const app = express()

app.use(cors())
app.use(express.json())
ConnectDB()

app.use("/api/users",userRoutes)
app.use("/api/blogs",blogRoutes)


const PORT = process.env.PORT || 5500
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})
import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import cors from "cors"
dotenv.config()





const PORT=process.env.PORT||3000
const app=express()


app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))


mongoose.connect(process.env.MONGO_PATH)
.then(()=>{
    app.listen(PORT,()=>{
        console.log(`server is listening on port ${PORT}`)
    })  
})
.catch(err=>{
    console.error(`error connecting to mongodb ${err}`)
})
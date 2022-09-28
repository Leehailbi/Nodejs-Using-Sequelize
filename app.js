
const express = require("express")
const port = 7000
//DB Connection
const connection = require("./database/connection")


const Class = require("./controllers/class")
const Teacher = require("./controllers/teacher")

const app =   express()  

app.use(express.json())

// Routers 

const router = express.Router()
app.use(router)
const classRouter = require("./routers/class")
const teacherRouter= require("./routers/teachers")
const studentRouter = require("./routers/student")

 
app.use(express.json())
 
app.use(teacherRouter)
app.use(classRouter)
app.use(studentRouter)

app.listen(port ,()=>{
    console.log(`app running on port ${port}....`)
})
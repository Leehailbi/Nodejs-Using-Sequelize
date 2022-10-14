
const express = require("express")

const {createTeacher,getsAll,updateTeacher,deleteTeacher,getById} = require("../controllers/teacher")


const {validate} = require("../validations/validator")
const {teacherRules} = require("../validations/validation")

const teacherRouter = express.Router()
const {authenticateToken} = require("../controllers/user")

teacherRouter.post("/api/createTeacher",validate(teacherRules()),authenticateToken,createTeacher)
teacherRouter.get("/api/getsAll",authenticateToken,getsAll)
teacherRouter.get("/api/getById/:id",authenticateToken,getById)
teacherRouter.patch("/api/updateTeacher/:id",updateTeacher)
teacherRouter.delete("/api/deleteTeacher/:id",deleteTeacher)
//teacherRouter.get("/api/getTeacherDetails",getTeacherDetails)

module.exports = teacherRouter
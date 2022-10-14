const express = require("express")
//const jwt = require("jsonwebtoken")
const {createClass,updateClass,deleteClass, getAll,getsById} = require("../controllers/class")

const {validate} = require("../validations/validator")
const {classRules} = require("../validations/validation")
const {authenticateToken} = require("../controllers/user")

const classRouter = express.Router()

classRouter.post("/api/createClass",authenticateToken,createClass)//validate(classRules()),
classRouter.patch("/api/updataClass/:id",updateClass)
classRouter.get("/api/getAll",authenticateToken,getAll)
classRouter.delete("/api/deleteClass/:id",deleteClass)
classRouter.get("/api/getsById/:id",authenticateToken,getsById)
module.exports = classRouter

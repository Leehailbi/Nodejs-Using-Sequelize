const express = require("express")

const {createClass,updateClass,deleteClass, getAll,getsById} = require("../controllers/class")

const {validate} = require("../validations/validator")
const {classRules} = require("../validations/validation")

const classRouter = express.Router()

classRouter.post("/api/createClass",validate(classRules()),createClass)
classRouter.patch("/api/updataClass/:id",updateClass)
classRouter.get("/api/getAll",getAll)
classRouter.delete("/api/deleteClass/:id",deleteClass)
classRouter.get("/api/getsById/:id",getsById)

module.exports = classRouter

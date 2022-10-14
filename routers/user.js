const express = require("express")

const { signUp, logIn} = require("../controllers/user")
const {validate} = require("../validations/validator")
const {userRules} = require("../validations/validation")
//Used to create a new router object
const userRouter = express.Router()

userRouter.post("/api/signUp",signUp)//,validate(userRules()),

userRouter.post("/api/logIn",validate(userRules()), logIn)

//userRouter.get("/api/decodeToken", )

module.exports = userRouter
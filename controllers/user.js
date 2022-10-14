const User = require("../models/user")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const { json } = require("express")
const JWT_SECRET_KEY = "secret"
const SECRET_KEY = "SCHOOLAPI"


// Signup Details
const signUp = async(req,res)=>{

    const {userName ,email, password } = req.body
    try{
      //Check Existing user
        const existinguser = await User.findOne({where:{email: email}})
        //console.log("this is the error of existinguser",existinguser)
        if(existinguser){
            return res.status(400).json({
                message: " Email  already Exists"
            })
        }
        // Create Hashed password
        const hashedPassword = await bcrypt.hash(password,10)

        const result = await User.create({
            userName :userName,
            email: email,
            password :hashedPassword
        })

        // Token Generate
    //   const token = jwt.sign({email: result.email, id: result.id

    //    },SECRET_KEY )
        //console.log("This is the token",token)
        return res.json({
            user:{
                  email : result.email,
                  userName : result.userName,
                  password : result.password,
                  //token :token
            }
        })
        
    }
    catch(err){
        console.log(err)
        res.status(500).json({
            message: "Email/Password should not be empty"
        })
    }
}

// Login Details
const logIn = async(req,res)=>{
    const {email, password} = req.body
    try{
        // Check the existing User

        const existinguser = await User.findOne({where:{email: email}})
        if(!existinguser){
            return res.status(404).json({
                message: " User Not Found "
            })
        }
        // compare the password of existing user and password given by user
        const matchPassword = await  bcrypt.compare(password, existinguser.password)
        if (!matchPassword){
            return res.status(400).json({
                message: "Invalid Credentilas Password "

            })
        }
        // generate Token
        const token = jwt.sign({
            email: existinguser.email, id: existinguser.id
        }, JWT_SECRET_KEY)
        res.status(200).json({
            message: "login success",//user: existinguser,
            token: token
        })


    }
    catch(err){
        console.log(err)
        res.status(500).json({
            message: " Invalid Credentials "
        })
    }

}

function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization']
    // if (!authHeader) return res.sendStatus(401);
    // console.log(authHeader); // Bearer token
    const token = authHeader && authHeader.split(' ')[1]
  
    if (token == null)  return res.sendStatus(401)
  
    jwt.verify(token,JWT_SECRET_KEY, (err, user) => {
      //console.log("This part is error ",err)
  
      if (err) return res.sendStatus(401)
  
      req.user = user
  
      next()
    })
  }


module.exports = { signUp, logIn,authenticateToken}
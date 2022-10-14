const Students = require("../models/student")
const jwt = require("jsonwebtoken")
const SECRET_KEY = "SCHOOLAPI"

  
      const createStudent = async (req, res) => {
            
          const {studentName, rollNo, studentClass,section,attendance,contact} = req.body
        
          try {
            const student = await Students.create({studentName, rollNo, studentClass,section,attendance,contact})


         return res.json(student)
    
        
          } catch (err) {
            console.log(err)
            return res.status(500).json(err)
          }
        }
        
        const getStudent= async (req, res) => {
          try {
            const getteacher = await Students.findAll()
        
            return res.json(getteacher)
          } catch (err) {
            console.log(err)
            return res.status(500).json({ error: 'Something went wrong' })
          }
        }

        const getById = async(req,res)=>{
            const id = req.params.id
            try{
                const classById = await Students.findOne({
                    where :{
                        id
                    }
                
                })
                return res.json(classById)
    
            } catch(err){
                console.log(err)
                return res.status(500).json({
                    error : "Something went wrong"
                })
            }
        }

        const updateStudent = async(req,res)=>{
            const id = req.params.id
            try{
                  const teachers = await Students.update(req.body,{
                        where :{
                              id
                        }
                  })
                  return res.json(teachers)

            }catch (err) {
                  console.log(err)
                  return res.status(500).json({ error: 'Something went wrong' })
                }
        }

        const deleteStudent = async (req, res) => {
            const id = req.params.id
            try {
              const delTeacher = await Students.findOne({ where: {id } })
          
              await delTeacher .destroy()
          
              return res.json({ message: 'Student data  is  deleted!' })
            } catch (err) {
              console.log(err)
              return res.status(500).json({ error: 'Something went wrong' })
            }
          }
   
module.exports = {createStudent,getStudent,updateStudent,deleteStudent,getById} 

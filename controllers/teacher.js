
      const Teachers = require("../models/teacher")
      const db =require("../models/index")
      const Classes  = require("../models/class")

  
      const createTeacher = async (req, res) => {
            
          const {teacherName, staffId, attendance, subjectTeacher,contact,classId} = req.body
        
          try {
            const teach = await Teachers.create({ teacherName, staffId, attendance, subjectTeacher,contact,classId})
            const data = await teach.save()
        
            return res.json(data)
          } catch (err) {
            console.log(err)
            return res.status(500).json(err)
          }
        }
        
      
        const updateTeacher = async(req,res)=>{
            const id = req.params.id
            try{
                  const teachers = await Teachers.update(req.body,{
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

        const deleteTeacher = async (req, res) => {
            const id = req.params.id
            try {
              const delTeacher = await Teachers.findOne({ where: {id } })
          
              await delTeacher .destroy()
          
              return res.json({ message: 'Teacher is  deleted!' })
            } catch (err) {
              console.log(err)
              return res.status(500).json({ error: 'Something went wrong' })
            }
          }



const  getsAll= async(req,res) =>{
      try{
               const classFind = await db.Teachers.findAll({
                   include :[{
                          model : Classes
                          
      }]
  })
  return res.json(classFind)

   }catch (err) {
      console.log(err)
      return res.status(500).json({ error: 'Something went wrong' })
    }

}

    const getById = async(req,res)=>{
      const id = req.params.id
      try{
          const byId = await db.Teachers.findOne({
              where:{
                  id 
              },
              include :[{
                  model : Classes,
                  as : Classes
              }]
          })
          return res.json(byId)

      }catch(err){
          console.log(err)
          return res.status(500).json({
              error : "Something went wrong"
          })
      }
  }


    
      
   
module.exports = {createTeacher,getsAll,updateTeacher,deleteTeacher,getById} 

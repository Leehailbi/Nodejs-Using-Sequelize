
    const Classes = require("../models/class")
    const Teachers = require("../models/teacher")
    const db =require("../models/index")

    const createClass= async (req, res) => {
        const {className, section, teacherId,employeeId,numberOfStudent} = req.body
      
        try {
          const classes = await Classes.create({ className, section, employeeId ,numberOfStudent, teacherId})
          const classdata= await classes.save()

      
          return res.json(classdata)
        } catch (err) {
          console.log(err)
          //return res.status(500).json(err)
        }
      }
      
    // const getClass = async (req, res) => {
    //     try {
    //       const getclass = await Classes.findAll()
      
    //       return res.json(getclass)
    //     } catch (err) {
    //       console.log(err)
    //       return res.status(500).json({ error: 'Something went wrong' })
    //     }
    //   }
    // const getById = async(req,res)=>{
    //     const id = req.params.id
    //     try{
    //         const classById = await Classes.findOne({
    //             where :{
    //                 id
    //             }
            
    //         })
    //         return res.json(classById)

    //     } catch(err){
    //         console.log(err)
    //         return res.status(500).json({
    //             error : "Something went wrong"
    //         })
    //     }
    // }

    const updateClass = async(req,res)=>{
        const id = req.params.id
        try{

              const upclass = await Classes.update(req.body,{
                where :{
                    id 
                }
              })
              return res.json(upclass)

        }catch (err) {
              console.log(err)
              return res.status(500).json({ error: 'Something went wrong' })
            }
    }

    const deleteClass = async (req, res) => {
        const id = req.params.id
        try {
          const delClass = await Classes.findOne({ where: {id } })
      
          await delClass.destroy()
      
          return res.json({ message: 'Class data is  deleted!' })
        } catch (err) {
          console.log(err)
          return res.status(500).json({ error: 'Something went wrong' })
        }
      }

    // Association function
         
    const  getAll= async(req,res) =>{
        try{
                 const classFind = await db.Classes.findAll({
                     include :[{
                            model : Teachers
                            
        }]
    })
    return res.json(classFind)

     }catch (err) {
        console.log(err)
        return res.status(500).json({ error: 'Something went wrong' })
      }

}

    const getsById = async(req,res)=>{
        const id = req.params.id
        
        try{
            const byId = await db.Classes.findOne({
                where:{
                    id 
                },
                include :[{
                    model : Teachers
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

module.exports ={deleteClass,createClass,updateClass, getAll,getsById}

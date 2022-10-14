const express = require("express")
const Class =require("../models/class")


const { check,param } = require("express-validator")
const classRules = (method) => {
  return [
    check("className", "Class Name is required")
      .trim()
      .notEmpty(),
      check("employeeId","employee Id is required").notEmpty().trim().isLength({
        min:4, max:8}), 
      check("section","Section is required") .trim()
      .notEmpty()
  ]
}
const teacherRules = (method) => {
      return [
        check("teacherName", "Teacher Name is required")
          .trim()
          .notEmpty()
          .isLength({ min: 1, max: 15 })
          .withMessage(
            "Teacher Name,  must be Minimum of 1 and Maximum of 18 characters"
          ),check("staffId","Staff Id must be unique") .trim()
          .notEmpty()
          .isLength({ min: 5, max: 8 }),

          check("staffId","T Staff Id  is required").trim()
          .notEmpty(),
          check("contact", "Teacher contact is required").trim()
          .notEmpty()
          .isLength({ min: 10 }) 
      ]
    }
const studentRules = (method) => {
      return [
        check("studentName", "Student Name is required")
          .trim()
          .notEmpty()
          .isLength({ min: 1, max: 15 })
          .withMessage(
            "Student Name,  must be Minimum of 1 and Maximum of 16 characters"
          ),check("rollNo","Student roll number is required").trim()
          .notEmpty()
          .isLength({ min: 5, max: 7 }),
          check("attendance","Student attendance is required").trim()
          .notEmpty(),
          check("contact","Student contact is required").trim()
          .notEmpty()
          .isLength({ min: 10})
          
      ]
    }


  const userRules = (method) => {
      return [
        check("email", "Enter the valid email").isEmail()
          .trim()
          .notEmpty()
          .isLength({ min: 1, max: 15 })
          .withMessage(
            " Email Name,  must contain a special characeter @"
          ),check("password", "Password is required").notEmpty()
          .isLength({ min:8})
          
      ]
    }



module.exports ={classRules,teacherRules,studentRules,userRules}
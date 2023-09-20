import express from "express";
import { hashPassword } from "../helper/bcrypt.js";

const router = express.Router()

// create new admin 
router.post("/", (req, res, next) => {
    try {
        console.log(req.body)

        // 1. ENCRYPT PASSWORD
        const {password} = req.body
        req.body.password = hashPassword(password)


        // 2. iNSERT INTO DATABASE

        res.json({
            status: "success", 
            message: "Please check your email and follow the instruction to activate account"


        })
    } catch (error) {
        throw(error)
    }



} )

export default router
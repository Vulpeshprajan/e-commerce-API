import express from "express";

const router = express.Router()

// create new admin 
router.post("/", (req, res, next) => {
    try {
        console.log(req.body)

        res.json({
            status: "success", 
            message: "Please check your email and follow the instruction to activate account"


        })
    } catch (error) {
        throw(error)
    }



} )

export default router
const express = require("express");
const router = express.Router();
const Registration = require("../../models/registration.js");
const dotenv = require('dotenv');
dotenv.config();




router.post('/add', async (req, res) => {
    console.log(".......", req.body)
    // let { detail, header } = req.body
    try {
        const register = await Registration.create(req.body)
        // detail.pid = register._id
        // const detail = await Detail.create(detail)

        res.json({
            success: true,
            status: 201,
            dbid: register._id
        })

    } catch (error) {
        res.json({
            success: false,
            status: 400,
            error: error.message

        })

    }


})










module.exports = router;
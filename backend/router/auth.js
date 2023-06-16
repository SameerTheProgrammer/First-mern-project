
const express = require('express');
const router = express.Router();
require('../Database/connection');
const User = require('../Database/Schema');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');
const authenticate = require('../middleware/Authenticate');



router.post('/login', async (req, res) => {
    try {
        let token;
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ error: 'Plz filled the field properly' })
        }

        const userLoginData = await User.findOne({ email: email })

        if (!userLoginData) {
            res.status(400).json({ error: 'incorrect e information' })
        } else {

            const isMatch = await bcrypt.compare(password, userLoginData.password);

            token = await userLoginData.generateAuthToken();
            res.cookie("jwtToken", token, {
                expires: new Date(Date.now() + 25892000000),
                httpOnly: true
            })

            if (!isMatch) {
                res.status(400).json({ error: 'incorrect p information' })
            } else {
                res.json({ message: 'login successfull' })
            }
        }
    } catch (error) {
        console.log(error)
    }
})


router.post('/register', async (req, res) => {

    try {

        const { name, email, work, gender, password, phone, cpassword } = req.body


        if (!name || !email || !phone || !password || !cpassword) {
            return res.status(422).json({ error: 'Plz filled the field properly' })
        }
        if (password !== cpassword) {
            return res.status(422).json({ error: "enter the correct comfirm password" })
        }


        const userEmailExit = await User.findOne({ email: email })
        const userPhoneExit = await User.findOne({ phone: phone })
        if (userEmailExit && userPhoneExit) {
            return res.status(422).json({ error: "Email and phone number already exist" })
        }
        if (userPhoneExit) {
            return res.status(422).json({ error: "Phone number already exist" })
        }
        if (userEmailExit) {
            return res.status(422).json({ error: "Email already exist" })
        }


        try {
            const newUser = new User({ name: name, email, work, gender, password, phone, cpassword })
            await newUser.save()
            res.status(201).json({ message: "user registered successfully" })
        } catch (error) {
            res.status(422).json({ message: "user registered failed" })
        }


    } catch (error) {
        console.log(error);
    }
})

router.get('/about', authenticate, (req, res) => {
    res.send(req.rootUser)
})

router.get('/getdata', authenticate, (req, res) => {
    res.send(req.rootUser)
})
router.post('/contact', authenticate, async (req, res) => {
    try {
        const { name, email, phone, message } = req.body
        if (!name || !email || !phone || !message) {
            return res.json({ error: "please fill the contact form" })
        }
        const contactUser = await User.findOne({ _id: req.rootUserId })
        if (contactUser) {
            const userMessage = await contactUser.addMessage(name, email, phone, message)
            await contactUser.save()
            res.status(201).json({message:"user contact successful"})
        }

    } catch (error) {
        console.log(error);
    }
})
router.get('/logout', authenticate, (req, res) => {
    res.clearCookie("jwtToken",{path:"/"})
    res.status(200).send("User Logout")
})

module.exports = router


const jwt = require('jsonwebtoken')
const User = require('../Database/Schema');

const authenticate = async (req, res, next) => {

    try {
        const token = req.cookies.jwtToken
        const verifyToken = jwt.verify(token, process.env.SECRET_KEY)
        const rootUser = await User.findOne({ _id: verifyToken._id, "tokens.token": token })
        if (!rootUser) {
            throw new Error('User Not Found')
        }
        req.token = token
        req.rootUser = rootUser
        req.rootUserId = rootUser._id
        next()
    } catch (error) {
        res.status(401).send('Unauthorized:No token provided')
        console.log(`the error is ${error} `);
    }
    
}
module.exports = authenticate
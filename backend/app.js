const express = require('express');
const app = express();

const dotenv = require('dotenv');
dotenv.config({path:'./config.env'})
const PORT = process.env.PORT || 3000
require('./Database/Connection.js')
const cookieParser = require("cookie-parser");
app.use(cookieParser());

const User = require('./Database/Schema');
app.use(express.json())
app.use(require('./router/auth'))

app.listen(PORT,()=>{
    console.log(`server is started in ${PORT}`);
})
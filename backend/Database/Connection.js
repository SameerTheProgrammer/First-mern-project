const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' })

mongoose.set("strictQuery", false);
const DB = process.env.DATABASE

mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then((data) => {
    console.log('connection successful');  
}).catch((err) => console.log(`"no connection"${err}`))
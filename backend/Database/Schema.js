const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        requied: true
    },
    email: {
        type: String,
        requied: true,
        unique: true
    },
    phone: {
        type: Number,
        requied: true,
        unique: true
    },
    work: {
        type: String
    },
    gender: {
        type: String,
        requied: true
    },
    password: {
        type: String,
        requied: true,
    },
    cpassword: {
        type: String,
        requied: true,
    },
    messages: [
        {

            name: {
                type: String,
                requied: true
            },
            email: {
                type: String,
                requied: true,
                unique: true
            },
            phone: {
                type: Number,
                requied: true,
                unique: true
            },
            message: {
                type: String,
                requied:true
            }
        }
    ],
    tokens: [
        {
            token: {
                type: String,
                required: true
            }
        }
    ],
    date: {
        type: Date,
        default: Date.now
    },
})

userSchema.pre('save', async function (next) {

    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 12)
        this.cpassword = await bcrypt.hash(this.cpassword, 12)
    }
    next();
})

userSchema.methods.generateAuthToken = async function () {
    try {
        let getToken = jwt.sign({ _id: this._id }, process.env.SECRET_KEY)
        this.tokens = this.tokens.concat({ token: getToken })
        await this.save()
        console.log(this.tokens);
        return getToken
    } catch (error) {
        console.log(error);
    }
}

userSchema.methods.addMessage = async function (name, email, phone, message) {
    try {
        this.messages = this.messages.concat({name:name, email, phone, message})
        await this.save
        return this.messages
    } catch (error) {
        console.log(error);
    }
}

const User = mongoose.model('USER', userSchema)

module.exports = User

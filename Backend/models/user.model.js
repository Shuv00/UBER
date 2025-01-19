const mongoose = require('mongoose')

const userSchema  = new mongoose.Schema({
    fullName:{
    firstName:{
        type: String,
        required: true,
        minLength: [3, "First name must be atleast three character"],
    },
    lastName:{
        type: String,
        minLength: [3, "First name must be atleast three character"],
    }},
    email:{
        type:String,
        unique:true,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    socketId:{
        type:String,
    }
})
userSchema.methods.generateAuthToken = function (){
    const  token = jwt.sign({_id: this.id}, process.env.JWT_SECRET);
    return token;
}

userSchema.methods.comparePassword = async function () {
    return await bycrypt.compare(password, this.password);
}

userSchema.statics.hashPassword  = async function  () {
    return await bycrypt.hash(password, 10);
}   

const userModel = mongoose.model('user', userSchema);

module.exports = userModel;
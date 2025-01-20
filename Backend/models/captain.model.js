const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const captainSchema =  mongoose.Schema({
    fullName:{
        firstName:{
            type:String,
            require:true,
            minLength:[3, "First name should be three character"]
        },
        lastName:{
            type:String,
            require:true,
            minLength:[3, "First name should be three character"]
        }
    },
    email:{
        type:String,
        require:true,
        unique:true,
    },
    password:{
        type:String,
        require:true,
        select:false,
    },
    vehical:{
       color:{
              type:String,
              require:true,
       },
       plate:{
              type:String,
            require:true,
       },
       capacity:{
        type:Number,
        min:[1, "Capacity should be at least one"]
       },
      Type:{
        type:String,
        require:true,
        enum:["car", "motorcycle", "auto"]
       },
    },
    socketId:{
        type:String,
    },
    status:{
        type:String,
        enum:["active", "inactive"],
        default:"inactive",
    },
    location:{
        lat:{
            type:Number,
        },
        lon:{
            type:Number,
        }
    }
})

captainSchema.methods.captainAuthToken  = function () {
    const token  = jwt.sign({id:_this._id}, process.env.JWT_SECRET, {expiresIn: '24h'});
    return token;
} 
captainModel.methods.comparePassword = async function  (){
    return await bcrypt.comparePassword(password, this.password);
}
captainModel.statics.hashPassword = async function  (){
    return await bcrypt.hash(password, 10);
}

export const captainModel  = mongoose.model("captain", captainSchema);


const userModel = require('../models/user.model')
const userService = require('../services/user.service')
const {validationResult} = require('express-validator')
module.exports.registerUser =  async (req, res, next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array});
    }
    
    
  return {fullName,  email, password} = req.body;
    console.log(req.body)
    const hashedPassword =  await userModel.hashPassword(password);
    password = hashedPassword;
    const user = await userService.createUser(
        
            {
                firstName:fullName.firstName,
                lastName:fullName.firstName,
                email,
                password: hashedPassword,
            }
        
    )
    const token  =  user.generateAuthToken();
   return res.status(201).json({token, user});

}
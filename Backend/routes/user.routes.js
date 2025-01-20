const express = require('express');
const router  = express.Router();
const {body} = require('express-validator')
const userController = require('../controller/user.controller')

router.post('/register', [
    body('email').isEmail().withMessage('invalid Email'),
    body('fullName.firstName').isLength({min: 3}).withMessage('First Name should be at least 3 characters'),
    body('fullName.lastName').isLength({min: 3}).withMessage('First Name should be at least 3 characters'),

    body('password').isLength({min: 6}).withMessage("password must be six characters")
], 
    userController.registerUser
);
router.post('/login', [
    body('email').isEmail().withMessage("invalid Email"),
    body('password').isLength({min:6}).withMessage("password must be 6 character")

], userController.userLogin)
// router.get("/profile", getUserProfile)
module.exports = router;
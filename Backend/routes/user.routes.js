const express = require('express');
const router  = express.Router();
const {body} = require('express-validator')
const userController = require('../controller/user.controller')

router.post('/register', [
    body('email').isEmail().withMessage('invalid email'),
    body('fullName.firstName').isLength({min: 3}).withMessage('First Name should be at least 3 characters'),
    body('fullName.lastName').isLength({min: 3}).withMessage('First Name should be at least 3 characters'),

    body('password').isLength({min: 6}).withMessage("password must be six characters")
], 
    userController.registerUser
);

module.exports = router;
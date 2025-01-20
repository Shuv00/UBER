const express = require('express');
const { body } = require('express-validator');
const captainController = require('../controller/captain.controller.js');

const router = express.Router();

router.post("/register", [
    body('email').isEmail().withMessage("email required"),
    body('password').isLength({ min: 6 }).withMessage("password must be at least 6 characters"),
    body('vehical.color').withMessage("vehical color required"),
    body('vehical.plate').withMessage("vehical plate required"),
    body('vehical.capacity').withMessage("vehical capacity required"),
    body('vehical.vehicalType').isIn(["car", "motorcycle", "auto"]).withMessage("vehical type required"),
], captainController.registerCaptain);

module.exports = router;

const captainModel = require('../models/captain.model');

module.exports.createCaptain = async ({ firstName, lastName, email, password, color, plate, capacity, type }) => {
    if(!firstName || !lastName || !email || !password || !color || !plate || !capacity || !type){
        throw new Error("All fields are required");
    }
    const captain = await captainModel.create({
        firstName, 
        lastName,
        email,
        password,
        vehical:{
            color,
            plate,
            capacity,
            type,
        }
    })
}

const mongoose = require('mongoose');

function connectDb () {
    mongoose.connect(process.env.DB_URL)
    .then(() => {
        console.log("db connected");
        
    })
    .catch((err) =>{
        console.log(err);
        
    })
}
module.exports = connectDb;
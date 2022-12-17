const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/users', (err)=>{
    if (err) {console.log("Not Connected")}
    console.log("Successfully Connected to DB");
});

module.exports = mongoose 
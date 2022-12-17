// import modules 
const express  =require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./config/db');
const router = require('./routers/users');


const app = express();
const port = 3000;

// configuaration
app.use(cors());
app.use(bodyParser.json());

// showing image to public
app.use('/uploads', express.static('uploads'));

app.use("/users", router);


// Running Server
app.listen(port, (error)=>{
    if(error){console.log(error)};
    console.log("The sever is running on port no:", port);
})


const userModel = require('../models/users');



const create = async (req, res) => {
        try {     
          
           const users = await userModel.create({
                fname: req.body.fname,
                lname: req.body.lname,
            })
            if(req.file){
                users.avatar = 'http://localhost:3000/' + req.file.path
            }else{
                console.log("error");
            }
            users.save()
            .catch((error)=>{
                if(error){
                    res.status(400).send({message: "can't create missing fields"})
                }
               
            })
        } catch (error) {
            console.log(error);
            res.status(500).send({ message: "fail to create"})
        }
    
        res.status(200).json({ message: "successfully create" })

}

const getData = async (req, res) => {
    const users = await userModel.find({})
    res.json({users})
}
module.exports = {
    create,
    getData
}
const Usages=require('../mongodb/loginSchema')
const mongoose=require('mongoose')
require('dotenv').config();
const signup= async(req, res) => {
  try{
  if(req.body.id==='null'){
  await mongoose.connect(process.env.DATA_BASE)
   await Usages.create({
        name:req.body.name,
    email:req.body.email,
    password:req.body.password,
    id:[]
    })
  let users=await Usages.find({name:req.body.name})  
const ObjectId = require('mongoose').Types.ObjectId;
let userId= users[0]._id.toString();
console.log(userId)
 res.status(200).send(userId);
  }
  else{
    let message='Already Have a account Going to Login page'
    console.log(message)
    res.status(200).send(message)
  }
}catch(err){
  res.status(501).send('Internal server error')
}
finally{
  await mongoose.disconnect()
}
}

module.exports={signup};

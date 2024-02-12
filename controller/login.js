const Usages=require('../mongodb/loginSchema')
const mongoose=require('mongoose')
require('dotenv').config();
const login=async(req,res)=>{
    try{
        await mongoose.connect(process.env.DATA_BASE)
    let details=await Usages.find({email:req.body.email})
    if(details[0]!==undefined){ 
        if(details[0].password===req.body.password){
            res.status(200).send(details[0]._id.toString())
            }
        else{
            res.status(200).send('Email or password is not match')
            }
    }
    else{res.status(200).send('Email Incorrect')}
    

}catch(err){
    res.status(501).send('Internal Error')
  }
    finally{
      await mongoose.disconnect()
    }
}
module.exports={login}
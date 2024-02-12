const User=require('../mongodb/dbconnect')
const mongoose=require('mongoose')
require('dotenv').config()
const homepage=async(req,res)=>{
  try{
  await mongoose.connect(process.env.DATA_BASE)
    let a =await User.findOne({category:'home'})
    res.status(200).send(a)
  }
  catch(err){
    res.status(501).send('Internal Error')
  }
    finally{
      await mongoose.disconnect()
    }
}
const mobiles=async(req,res)=>{
  try{
    await mongoose.connect(process.env.DATA_BASE)
    let a =await User.find({'category':req.query.category})
    res.cookie('cookieName','DarkHeaven', {maxAge:900000,httpOnly:true,})
    res.status(200).send(a)
  }
  catch(err){
    res.status(501).send('Internal Error')
  }
    finally{
      await mongoose.disconnect()
    }
}
const products=async(req,res)=>{
  try{
    await mongoose.connect(process.env.DATA_BASE)
    let a =await User.where('_id').equals(req.query._id)
    res.status(200).send(a)
  }
  catch(err){
    res.status(501).send('Internal Error')
  }
    finally{
      await mongoose.disconnect()
    }
}
module.exports={homepage,mobiles,products}
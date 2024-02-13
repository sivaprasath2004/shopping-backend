const mongoose=require('mongoose')
const users=require('../mongodb/dbconnect')
require('dotenv').config();
const Usages=require('../mongodb/loginSchema')
const addtocart=async(req,res)=>{
    try{
    await mongoose.connect(process.env.DATA_BASE)
    let details=await Usages.find({_id:req.query._id})
    if(!details[0].id.includes(req.query.id)){
        details[0].id.push(req.query.id)
     Usages.create(details)
     res.status(200).send('Successfully added in the cart')
    }
    else{
        res.status(200).send('already added in the cart')
    }
}catch(err){
        res.status(501).send('Internal Error')
      }
        finally{
          await mongoose.disconnect()
        }
}
const cartRemove=async(req,res)=>{
    try{
        await mongoose.connect(process.env.DATA_BASE)
    let value=await Usages.findById(req.body.id)
    let getTheId=value.id.filter(item=>item!==req.body._id)
    let users=await Usages.findByIdAndUpdate(req.body.id,
        {$set:{id:getTheId}},
        {new:true})
    res.status(200).send(users)
}
catch(err){
    res.status(501).send('Internal server Error')
}
finally{
    await mongoose.disconnect()
}
}
const orderDetails=async(req,res)=>{
    try{
    res.send('ok')
    }
    catch(err){
        res.status(501).send('Internal server Error')
    }
    
}

const cart=async(req,res)=>{
        await mongoose.connect(process.env.DATA_BASE)
    let userdetails=await Usages.findById(req.body._id).maxTimeMS(100000)
    let using =userdetails.id.map(async(item) => await users.findById(item)
    .select('_id category productName MRPprize SELLprize img.url'));
Promise.all(using)
    .then((results) => {
        res.send(results);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}

module.exports={addtocart,cart,cartRemove,orderDetails}

const mongoose=require('mongoose')
const user_schema=new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    id:[String]
})
module.exports=mongoose.model('usages',user_schema)
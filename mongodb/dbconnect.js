const mongoose=require('mongoose')
const user_schema=new mongoose.Schema({
    category:String,
    productName:String,
    brand:String,
    details:[{
           'color':String,
            "material":String,
              "length": String,
              "display": String,
            }],
    camera:[{
        front:String,
        back:String
    }],
    size:[String],
     battery:String,
     warrenty:String,
    img:[
        {
            url:String,
            caption:String
        },
        {
            url:String,
            caption:String
        }
    ],
    cards:[
        {
            url:String,
            caption:String
        },
        {
            url:String,
            caption:String
        }
    ],
    MRPprize:Number,
    SELLprize:Number,
    stock:String,
})
module.exports=mongoose.model('users',user_schema)

// {
//     "product": {
//       "category": "Clothing",
//       "type": "T-Shirt",
//       "gender": "Men",
//       "color": "Pink",
//       "material": "Cotton Blend",
//       "design": "Printed",
//       "neck_style": "Round Neck",
//       "features": ["Comfortable", "Breathable"],
//       "size_options": ["S", "M", "L", "XL"],
//       "price": 19.99,  199  666
//       "brand": "ExampleBrand",
//       "availability": true
//     }
//   }
  

//pro: FIRST Running Shoes For Men
// col:White
//sell:1,159
//mrp:1,899 
//https://rukminim2.flixcart.com/image/832/832/l4pxk7k0/shoe/2/d/t/13-22g-787-13-campus-wht-sil-b-org-original-imagfk4zhs2snfbn.jpeg?q=70
//https://rukminim2.flixcart.com/image/128/128/l51d30w0/shoe/q/q/r/6-11g-787-6-campus-wht-sil-b-org-original-imagfsv58dssafpq.jpeg?q=70
const mongoose=require('mongoose');
const schema=mongoose.Schema


const contactSchema=new schema({
name:{
    type:String,
},

phone:
{ 
    type:String,
    },
    email:{
        type:String,
        
    },

})
const contact=mongoose.model('contact',contactSchema)
module.exports=contact
const express=require('express');


const contactRouter=express.Router();
const contact=require('../models/contact');


contactRouter.post('/add',async(req,res)=>{
try {
 let x = new contact(req.body);
let result =await x.save();
res.send({contact:result , msg:"contact add avec successfully"});
}
 catch (error) {
    console.log(error)
}
})
//get all contacts

contactRouter.get('/',async(req,res)=>{
    try {
    let result= await contact.find()
    res.send({contact:result , msg:"contact list"});
      
    
    }
     catch (error) {
        console.log(error)
    }
    })

    //get user by id
    contactRouter.get('/:id',async(req,res)=>{
        try {
         let result= await contact.findById({_id: req.params.id})
      res.send({contact:result , msg:"contact list"});
        
        
        }
         catch (error) {
            console.log(error)
        }
        })
//delete by id
contactRouter.delete('/:id',async(req,res)=>{
    try {

     let result= await contact.findByIdAndDelete({_id: req.params.id})
    
     res.send({ msg:"contact removed"});
    
    }
     catch (error) {
        console.log(error)
    }
    })
//update by id

contactRouter.put('/:id',async(req,res)=>{
    try {

     let result= await contact.findByIdAndUpdate(
        {_id: req.params.id},
        {$set:{...req.body}})

        res.send({contact:result , msg:"contact is updated"});
    }
     catch (error) {
        console.log(error)
    }
    })

    module.exports=contactRouter;
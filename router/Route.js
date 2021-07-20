const { Router } = require('express');
const express = require('express');
const route = express.Router();
const inqSchema=require('../model/inqModel')

route.post('/inq', async (req, res) => {
    //sending the info from client side
    const inqPayload = new inqSchema(
        {
            name: req.body.name,
            contact: req.body.contact,
            address: req.body.address,
        }
    );
    // console.log("HTTP Method - POST" + userPayload);
    // res.send("HTTP Method - POST");
    //to send the payload 
    try {
            const bodyReq = await inqPayload.save();
            res.status(201).send(bodyReq);
    
    
    } catch (err) {
        console.log(err.message);
        res.status(201).send(err.message)
    
    }
    
    });
    //middleware
    route.get('/allInq',async (req,res)=>{
    //DB-mongoose schema---model-DB
    let sampleData = await inqSchema.find();
    console.log("print..."+sampleData);
    if(sampleData.length == 0){
        res.status(204).send("No Content");
        res.send("No Result Found!");
    }else{  
        console.log("No Result Found!--else part");
        // send the data in the form of JSON to client/ browser
        res.json(sampleData);
    }    
    });
    route.put('/update/:sid',async (req,res)=>{
    //getting the path param that request to server to update the record
    try{
        var uid = req.params.sid;
        let sampleData = await inqSchema.findOne({contact:uid});
        sampleData.name = req.body.name; //DB colname =requesing update data passing in body
        sampleData.contact=req.body.contact;
        sampleData.address=req.body.address;
    
        var x= await sampleData.save();
        res.send(x);
    }catch(err){
        console.log(err.message);
         // if something went wrong or sending wrong request then get this error mess
        res.status(400).send("Bad Request");
    }
    });
    
    route.delete("/delete/:sid",async(req,res)=>{
    try{
        var id=req.params.sid;
        let deleteid = await inqSchema.findOneAndDelete({contact:id});
        if(!req.params.contact){
            return res.status(201).send(deleteid);}
        }
    catch(err){
       res.status(500).send("Internal Server Error");
        }
    })
    

module.exports = route;
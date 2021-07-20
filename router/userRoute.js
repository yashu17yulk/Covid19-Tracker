const { Router } = require('express');
const express = require('express');
const route = express.Router();
const userSchema = require('../model/userModel');

//post Method
route.post('/adduser', async (req, res) => {
    //sending the info from client side
    const userPayload = new userSchema(
        {
            uname: req.body.uname,
            name: req.body.name,
            password: req.body.password,
            email: req.body.email,
        }
    );
    // console.log("HTTP Method - POST" + userPayload);
    // res.send("HTTP Method - POST");
    //to send the payload 
    try {
        const emailExist = await userSchema.find({ email: userPayload.email });
        const unameExist = await userSchema.find({ uname: userPayload.uname });



        // will wair for the find() to come back and then perform some action futher
        //res.send(sampleData);//send method will sned the data in text format
        //to send it in json we use
        // console.log("check---" + loginUserData.email === userPayload.email);
        if (emailExist.length == 0 && unameExist.length == 0) {
            const bodyReq = await userPayload.save();

            //res.json(bodyReq);
            res.send("user has been added successfully");
            res.status(201).send("Created");
        } else {
            res.send("Email id or username already Exist, Please try another one!");
        }


    } catch (err) {
        res.status(201).send(err.message)

    }

});

//Get Single user info.
//get single document/record details
route.post('/login', async (req, res) => {


    try {
        const uname = req.body.uname;
        const password = req.body.password;
        // console.log(uname+"---"+password);
        //Create a new models/ schema and then fetch all the records from DB
        const loginUserData = await userSchema.findOne({ uname: uname, password: password });
        // will wair for the find() to come back and then perform some action futher
        //res.send(sampleData);//send method will sned the data in text format
        //to send it in json we use

        if (loginUserData.uname === uname && loginUserData.password === password) {

            res.status(200).send(loginUserData.uname);

        } else {
            res.status(404).send("Something went Wrong!");
        }

    } catch (err) {
        res.status(204).send("Invalid Data")

    }

});


//update

route.put('/forgotPwd', async (req, res) => {
    try {
        const email = req.body.email;
        const singleRecord = await userSchema.findOne({email:email});
        const updateId = singleRecord._id;
         
              
        const userData = await userSchema.findByIdAndUpdate({_id:updateId});
        console.log("Data..." + userData);
        userData.password = req.body.password;
        const updatePwd = await userData.save();
        ///res.json(updateData);
        res.send(updatePwd);
    } catch (err) {
        res.send('Error: ' + err);
    }

});




module.exports = route;
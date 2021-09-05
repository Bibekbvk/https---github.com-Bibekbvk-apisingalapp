const express = require('express');

const db = require('../db');
const authorize = require('../middleware/auth-middleware.js');
const router = express.Router();


router.get('/feedback', async(req,res,next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); // If needed

    try{
        console.log("not error");
        res.statusCode = 200;
        let result = await db.all();
        res.json(result);

    }
    catch(e){
        console.log("some error");
        console.log(e);
   
        res.sendStatus(500);


    }


});




//for getting medicine
router.get('/news', async(req,res,next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); 
    try{
        
        res.statusCode = 200;
        let result = await db.getnews();
        res.json(result);

    }
    catch(e){
        console.log("some error");
        console.log(e);
   
        res.sendStatus(500);


    }


});



router.get('/insertemergency', async(req,res,next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); 
    try{
        
        res.statusCode = 200;
        
        let result = await db.insertemergency(decodeURI(req.query.E_ID),decodeURI(req.query.Name),decodeURI(req.query.Contact1),decodeURI(req.query.Contact2), decodeURI(req.query.location));
        res.json(e.statusCode);
        console.log("successfully uploaded ")

    }
    catch(e){
       
        console.log("some error");
        if(e.code == "Duplicate entry"){
            res.statusCode = 500;
            
            res.json({'error':e.statuscode});
        }else{
            res.json({'error':e.code})
            console.log("successfully uploaded ")
        }
        res.sendStatus(500);
       

    }

});


module.exports = router;
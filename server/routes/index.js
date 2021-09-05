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




   //For Staff Listing 
router.get('/staff', async(req,res,next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); 
    try{
        
        res.statusCode = 200;
        let result = await db.getstaff();
        res.json(result);

    }
    catch(e){
        console.log("some error");
        console.log(e);
   
        res.sendStatus(500);


    }


});

//for getting medicine
router.get('/medicine', async(req,res,next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); 
    try{
        
        res.statusCode = 200;
        let result = await db.getmedicine();
        res.json(result);

    }
    catch(e){
        console.log("some error");
        console.log(e);
   
        res.sendStatus(500);


    }


});

router.get('/medical', async(req,res,next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); 
    try{
        
        res.statusCode = 200;
        let result = await db.getmedical();
        res.json(result);

    }
    catch(e){
        console.log("some error");
        console.log(e);
   
        res.sendStatus(500);


    }


});


router.get('/emergency', async(req,res,next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); 
    try{
        
        res.statusCode = 200;
        let result = await db.getemergency();
        res.json(result);

    }
    catch(e){
        console.log("some error");
        console.log(e);
        res.sendStatus(500);


    }


});




router.get('/abortion', async(req,res,next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); 
    try{
        
        res.statusCode = 200;
        let result = await db.getabortion();
        res.json(result);

    }
    catch(e){
        console.log("some error");
        console.log(e);
        res.sendStatus(500);


    }


});




router.get('/volunteer', async(req,res,next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); 
    try{
        
        res.statusCode = 200;
        let result = await db.getvolunteer();
        res.json(result);

    }
    catch(e){
        console.log("some error");
        console.log(e);
        res.sendStatus(500);


    }


});




router.get('/ViewStaffRegistration', async(req,res,next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); 
    try{
        
        res.statusCode = 200;
        let result = await db.ViewStaffRegistration();
        res.json(result);

    }
    catch(e){
        console.log("some error");
        console.log(e);
        res.sendStatus(500);


    }


});

router.get('/sexeducation', async(req,res,next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Accesss-Control-Allow-Methods', 'GET'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); 
    try{
        
        res.statusCode = 200;
        let result = await db.getsexeducation();
        res.json(result);

    }
    catch(e){
        console.log("some error");
        console.log(e);
        res.sendStatus(500);


    }


});

router.get('/help', async(req,res,next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Accesss-Control-Allow-Methods', 'GET'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); 
    try{
        
        res.statusCode = 200;
        let result = await db.gethelp();
        res.json(result);

    }
    catch(e){
        console.log("some error");
        console.log(e);
        res.sendStatus(500);


    }


});


router.get('/invitations', async(req,res,next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Accesss-Control-Allow-Methods', 'GET'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); 
    try{
        
        res.statusCode = 200;
        let result = await db.getInvitations();
        res.json(result);

    }
    catch(e){
        console.log("some error");
        console.log(e);
        res.sendStatus(500);


    }


});





router.get('/feedbacks', async(req,res,next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Accesss-Control-Allow-Methods', 'GET'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); 
    try{
        
        res.statusCode = 200;
        let result = await db.getFeedback();
        res.json(result);

    }
    catch(e){
        console.log("some error");
        console.log(e);
        res.sendStatus(500);


    }


});






 router.get('/deleteMedicine', async(req,res,next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); // If needed
    try{
        console.log("not error");
        res.statusCode = 200;
        let result = await db.deletemedicine(req.query.med_id);
        res.json(result);

    }
    catch(e){
        console.log("some error");
        console.log(e);
   
        res.sendStatus(500);


    }


});



router.get('/deleteInvitation', async(req,res,next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); // If needed
    try{
        console.log("not error");
        res.statusCode = 200;
        let result = await db.deleteInvitation(req.query.I_id);
        res.json(result);

    }
    catch(e){
        console.log("some error");
        console.log(e);
   
        res.sendStatus(500);


    }


});







router.get('/deleteFeedback', async(req,res,next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); // If needed
    try{
        console.log("not error");
        res.statusCode = 200;
        let result = await db.Deletefeedback(req.query.UID);
        res.json(result);

    }
    catch(e){
        console.log("some error");
        console.log(e);
   
        res.sendStatus(500);


    }


});




router.get('/deletestaff', async(req,res,next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); // If needed
    try{
        console.log("not error");
        res.statusCode = 200;
        let result = await db.deleteStaff(req.query.staff_id);
        res.json(result);

    }
    catch(e){
        console.log("some error");
        console.log(e);
   
        res.sendStatus(500);


    }


});


router.get('/deletemedicalitem', async(req,res,next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); // If needed
    try{
        console.log("not error");
        res.statusCode = 200;
        let result = await db.deleteItm(req.query.itm_id);
        res.json(result);

    }
    catch(e){
        console.log("some error");
        console.log(e);
   
        res.sendStatus(500);


    }


});


router.get('/deletevolunteer', async(req,res,next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); // If needed
    try{
        console.log("not error");
        res.statusCode = 200;
        let result = await db.deleteVolunteer(req.query.V_ID);
        res.json(result);

    }
    catch(e){
        console.log("some error");
        console.log(e);
   
        res.sendStatus(500);


    }


});


 
 


router.get('/insertFeedback', async(req,res,next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); 
    try{
        
        res.statusCode = 200;
        
        let result = await db.insertfeedback(decodeURI(req.query.user_id),decodeURI(req.query.contact),decodeURI(req.query.name),decodeURI(req.query.feedback));
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


router.get('/insertSexEducation', async(req,res,next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); 
    try{
        
        res.statusCode = 200;
        
        let result = await db.insertSexEducation(decodeURI(req.query.topic),decodeURI(req.query.article1),decodeURI(req.query.date),decodeURI(req.query.image1),decodeURI(req.query.article2),decodeURI(req.query.article2));
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


router.get('/inserthelp', async(req,res,next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); 
    try{
        
        res.statusCode = 200;
        
        let result = await db.help(decodeURI(req.query.topic),decodeURI(req.query.image),decodeURI(req.query.details));
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

//insert invite
router.get('/insertInvite', async(req,res,next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); 
    try{
        
        res.statusCode = 200;
        
        let result = await db.insertinvite(decodeURI(req.query.I_id),decodeURI(req.query.user_id),decodeURI(req.query.name),decodeURI(req.query.staff_id), decodeURI(req.query.contact));
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






router.get('/insertVolunteer', async(req,res,next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); 
    try{
        
        res.statusCode = 200;
        
        let result = await db.insertvolunteer(decodeURI(req.query.V_ID),decodeURI(req.query.name),decodeURI(req.query.location),decodeURI(req.query.contact),decodeURI(req.query.type),decodeURI(req.query.details),decodeURI(req.query.email),decodeURI(req.query.image));
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



router.get('/insertStaffRegistration', async(req,res,next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); 
    try{
        
        res.statusCode = 200;
        
        let result = await db.insertStaffRegistration(decodeURI(req.query.U_id),decodeURI(req.query.image),decodeURI(req.query.image1),decodeURI(req.query.image2),decodeURI(req.query.description));
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










router.get('/insertstaff', async(req,res,next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); 
    try{
        
        res.statusCode = 200;
        
        let result = await db.insertstaff(decodeURI(req.query.S_ID),decodeURI(req.query.Name),decodeURI(req.query.staff_type),decodeURI(req.query.location),decodeURI(req.query.fee),decodeURI(req.query.reg_no),decodeURI(req.query.photo));
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




router.get('/insertMedicine', async(req,res,next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); 
    try{
        
        res.statusCode = 200;
        
        let result = await db.insertmedicine(decodeURI(req.query.med_id),decodeURI(req.query.brand_name),decodeURI(req.query.generic_name),decodeURI(req.query.company),decodeURI(req.query.price),decodeURI(req.query.quantity),decodeURI(req.query.description),decodeURI(req.query.tags),decodeURI(req.query.images));
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


router.get('/insertMedicalItem', async(req,res,next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); 
    try{
        
        res.statusCode = 200;
        
        let result = await db.insertmedicalItem(decodeURI(req.query.itm_id),decodeURI(req.query.name),decodeURI(req.query.otherName),decodeURI(req.query.company),decodeURI(req.query.price),decodeURI(req.query.quantity),decodeURI(req.query.description),decodeURI(req.query.tags),decodeURI(req.query.images));
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







router.get('/insertAbortion', async(req,res,next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); 
    try{
        
        res.statusCode = 200;
        
        let result = await db.insertAbortion(decodeURI(req.query.place_ID),decodeURI(req.query.name),decodeURI(req.query.location),decodeURI(req.query.contact),decodeURI(req.query.details),decodeURI(req.query.images));
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

router.get('/login',async(req, res) =>{
    console.log("login");
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); 
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); 
    try{
        
        res.status(200)
        
        let result = await db.login(req.query.email,req.query.password);
        res.json(result);
        console.log("successfully uploaded ");

    }
    catch(e){
       
        console.log("some error");
        if(e.code == "Duplicate entry"){
           res.status(400)
            
            res.json({'error':e.statuscode});
        }else{
            res.json({'error':e.code})
            console.log("successfully uploaded ");
        }
       res.status(401);
       

    }
  
  
  });
// registration
router.get('/register', async(req,res,next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); 
    try{
        
        res.statusCode = 200;
        
        let result = await db.registration(decodeURI(req.query.u_id),decodeURI(req.query.name),decodeURI(req.query.email),decodeURI(req.query.contact1),decodeURI(req.query.contact2),decodeURI(req.query.location),decodeURI(req.query.password));
        res.json(e.statusCode);
        console.log("successfully uploaded ")
        
    }
    catch(e){
       
        console.log("some error");
        if(e.code == "Duplicate entry"){
            res.statusCode = 400;
            
            res.json({'error':e.statuscode});
        }else{
            res.json({'error':e.code})
            console.log("successfully uploaded ")
        }
        res.sendStatus(401);
       

    }

});


module.exports = router;
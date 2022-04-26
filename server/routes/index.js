const express = require('express');

const db = require('../db');
const authorize = require('../middleware/auth-middleware.js');
const router = express.Router();

router.get("/insertFeedback", async (req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET"); // If needed
    res.setHeader(
      "Access-Control-Allow-Headers",
      "X-Requested-With,content-type"
    );
    try {
      res.statusCode = 200;
  
      let result = await db.insertfeedback(
        req.query.user_id,
        req.query.contact,
        req.query.name,
        req.query.feedback,
      );
      res.json(e.statusCode);
      console.log("successfully uploaded ");
    } catch (e) {
      console.log("some error");
      if (e.code == "Duplicate entry") {
        res.statusCode = 500;
  
        res.json({ error: e.statuscode });
      } else {
        res.json({ error: e.code });
        console.log("successfully send! ");
      }
      res.sendStatus(500);
    }
  });


  router.get("/insertBooking", async (req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET"); // If needed
    res.setHeader(
      "Access-Control-Allow-Headers",
      "X-Requested-With,content-type"
    );
    try {
      res.statusCode = 200;
  
      let result = await db.insertbooking(
        req.query.booking_date,
        req.query.booking_time,
        req.query.booking_Day,
        req.query.game_time,
      );
      res.json(e.statusCode);
      console.log("successfully uploaded ");
    } catch (e) {
      console.log("some error");
      if (e.code == "Duplicate entry") {
        res.statusCode = 500;
  
        res.json({ error: e.statuscode });
      } else {
        res.json({ error: e.code });
        console.log("successfully send! ");
      }
      res.sendStatus(500);
    }
  });
  
  
  router.get('/feedback', async(req,res,next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Accesss-Control-Allow-Methods', 'GET'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); 
    try{
        
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


router.get('/insertlogin', async (req, res) => {
    console.log("insertlogin");
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    try {

        let result = await db.insertlogin(
          req.query.email,
           req.query.password);


        res.json(result);
        console.log("successfully uploaded ");
        res.status(200)
    }
    catch (e) {
        res.status(401);
        console.log("some error");
        res.json([{ 'error': "Something Went Wrong" }]);
    }


});

  router.get("/insertregistration", async (req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET"); // If needed
    res.setHeader(
      "Access-Control-Allow-Headers",
      "X-Requested-With,content-type"
    );
    try {
      res.statusCode = 200;
  
      let result = await db.insertRegistration(
        req.query.name,
        req.query.email,
        req.query.password,
        req.query.cpassword,
        
      );
      res.json(200);
      console.log("successfully uploaded ");
    } catch (e) {
      console.log("some error");
      if (e.code == "Duplicate entry") {
        res.statusCode = 500;
  
        res.json({ error: e.statuscode });
      } else {
        res.json({ error: e });
        
      }
      res.sendStatus(500);
    }
  }

  
  
  );

  //for admin

  router.get("/getUser", async (req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET"); // If needed
    res.setHeader(
      "Access-Control-Allow-Headers",
      "X-Requested-With,content-type"
    );
    try {
      res.statusCode = 200;
  
      let result = await db.getUser(
        
      );
      res.json({"userCount":result.length});
      console.log("successfully uploaded ");
    } catch (e) {
      console.log("some error");
      if (e.code == "Duplicate entry") {
        res.statusCode = 500;
  
        res.json({ error: e.statuscode });
      } else {
        res.json({ error: e });
        
      }
      res.sendStatus(500);
    }
  }

  
  
  );

  router.get("/getUserFeedback", async (req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET"); // If needed
    res.setHeader(
      "Access-Control-Allow-Headers",
      "X-Requested-With,content-type"
    );
    try {
      res.statusCode = 200;
  
      let result = await db.getUserfeedback();
      res.json({"feedbackCount":result.length});
      console.log("successfully uploaded ");
    } catch (e) {
      console.log("some error");
      if (e.code == "Duplicate entry") {
        res.statusCode = 500;
  
        res.json({ error: e.statuscode });
      } else {
        res.json({ error: e });
        
      }
      res.sendStatus(500);
    }
  }
  
  );

  
router.get('/feedbacks', async (req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Accesss-Control-Allow-Methods', 'GET'); // If needed
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  try {

      res.statusCode = 200;
      let result = await db.getFeedback();
      res.json(result);

  }
  catch (e) {
      console.log("some error");
      console.log(e);
      res.sendStatus(500);
  }

});

router.get('/booking', async (req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Accesss-Control-Allow-Methods', 'GET'); // If needed
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  try {

      res.statusCode = 200;
      let result = await db.getBooking();
      res.json(result);

  }
  catch (e) {
      console.log("some error");
      console.log(e);
      res.sendStatus(500);
  }

});

router.get('/deletefeedback', async (req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); // If needed
  try {
      console.log("not error");
      res.statusCode = 200;
      let result = await db.deletefeedback(req.query.user_id);
      res.json(result);

  }
  catch (e) {
      console.log("some error");
      console.log(e);

      res.sendStatus(500);
  }
});

router.get('/deletebooking', async (req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); // If needed
  try {
      console.log("not error");
      res.statusCode = 200;
      let result = await db.deletebooking(req.query.booking_time);
      res.json(result);

  }
  catch (e) {
      console.log("some error");
      console.log(e);

      res.sendStatus(500);
  }

});



module.exports = router;
const mysql = require('mysql');

const pool = mysql.createPool({

    connectionLimit:10000,
    

    user: 'root',
    password: '',
    database:'signalapp',
    host:'localhost',
    port: '3306'


});

let signalapp={};

signalapp.all = () => {

    return new Promise((resolve,reject) => {

        pool.query(`SELECT * from feedback LIMIT 10`,(err,results) => {
            
            if(err){
                return reject(err);
            }
            else{
                return resolve(results);
            }

        });


    });


};



//staff selected
signalapp.searchProduct = (term,limit) => {

    return new Promise((resolve,reject) => {
        pool.query(`SELECT * FROM products WHERE tags LIKE '%' ? '%' OR name LIKE '%' ? '%' LIMIT ?,10`,[term,term,limit],(err,results) => {
            
            if(err){
                return reject(err);
            }
            else{
                return resolve(results);
            }

        });


    });


};


//get staffs
signalapp.getstaff = () => {

    return new Promise((resolve,reject) => {
          
        pool.query(`SELECT * FROM staff`,(err,results) => {

            
            if(err){
                return reject(err);
            }
            else{
                return resolve(results);
            }

        });


    });


};

//get medicine
signalapp.getmedicine = () => {

    return new Promise((resolve,reject) => {
          
        pool.query(`SELECT * FROM medicine`,(err,results) => {

            
            if(err){
                return reject(err);
            }
            else{
                return resolve(results);
            }

        });


    });


};

signalapp.getmedical = () => {

    return new Promise((resolve,reject) => {
          
        pool.query(`SELECT * FROM medicalitems`,(err,results) => {

            
            if(err){
                return reject(err);
            }
            else{
                return resolve(results);
            }

        });


    });


};

signalapp.getemergency = () => {

    return new Promise((resolve,reject) => {
          
        pool.query(`SELECT * FROM emergencycontact`,(err,results) => {

            
            if(err){
                return reject(err);
            }
            else{
                return resolve(results);
            }

        });


    });


};


signalapp.getabortion = () => {

    return new Promise((resolve,reject) => {
          
        pool.query(`SELECT * FROM abortion`,(err,results) => {

            
            if(err){
                return reject(err);
            }
            else{
                return resolve(results);
            }

        });


    });


};



signalapp.getvolunteer = () => {

    return new Promise((resolve,reject) => {
          
        pool.query(`SELECT * FROM volunteer`,(err,results) => {

            
            if(err){
                return reject(err);
            }
            else{
                return resolve(results);
            }

        });


    });


};



signalapp.getsexeducation = () => {

    return new Promise((resolve,reject) => {
          
        pool.query(`SELECT * FROM sexeducation`,(err,results) => {

            
            if(err){
                return reject(err);
            }
            else{
                return resolve(results);
            }

        });


    });


};


signalapp.gethelp = () => {

    return new Promise((resolve,reject) => {
          
        pool.query(`SELECT * FROM help`,(err,results) => {

            
            if(err){
                return reject(err);
            }
            else{
                return resolve(results);
            }

        });


    });


};



signalapp.getInvitations = () => {

    return new Promise((resolve,reject) => {
          
        pool.query(`SELECT * FROM invitation`,(err,results) => {

            
            if(err){
                return reject(err);
            }
            else{
                return resolve(results);
            }

        });


    });


};




signalapp.getFeedback = () => {

    return new Promise((resolve,reject) => {
          
        pool.query(`SELECT * FROM feedback`,(err,results) => {

            
            if(err){
                return reject(err);
            }
            else{
                return resolve(results);
            }

        });


    });


};





signalapp.getVehiclesDetails = (id) => {

    return new Promise((resolve,reject) => {

        pool.query(`SELECT * FROM vehicles WHERE id LIKE ?` ,[id],(err,results) => {

            
            if(err){
                return reject(err);
            }
            else{
                return resolve(results);
            }

        });


    });


};

signalapp.deletemedicine = (med_id) => {

    return new Promise((resolve,reject) => {

        pool.query(`DELETE  FROM medicine WHERE med_id = ?` ,[med_id],(err,results) => {

            
            if(err){
                return reject(err);
            }
            else{
                return resolve(results);
            }

        });


    });


};


signalapp.deleteInvitation = (I_id) => {

    return new Promise((resolve,reject) => {

        pool.query(`DELETE  FROM invitation WHERE I_id = ?` ,[I_id],(err,results) => {

            
            if(err){
                return reject(err);
            }
            else{
                return resolve(results);
            }

        });


    });


};






signalapp.deleteStaff = (med_id) => {

    return new Promise((resolve,reject) => {

        pool.query(`DELETE  FROM staff WHERE staff_id = ?` ,[med_id],(err,results) => {

            
            if(err){
                return reject(err);
            }
            else{
                return resolve(results);
            }

        });


    });


};



signalapp.deleteItm = (itm_id) => {

    return new Promise((resolve,reject) => {

        pool.query(`DELETE  FROM medicalitems WHERE itm_id = ?` ,[itm_id],(err,results) => {

            
            if(err){
                return reject(err);
            }
            else{
                return resolve(results);
            }

        });


    });


};

signalapp.deleteVolunteer = (V_ID) => {

    return new Promise((resolve,reject) => {

        pool.query(`DELETE  FROM volunteer WHERE V_ID = ?` ,[V_ID],(err,results) => {

            
            if(err){
                return reject(err);
            }
            else{
                return resolve(results);
            }

        });


    });


};


signalapp.Deletefeedback = (UID) => {

    return new Promise((resolve,reject) => {

        pool.query(`DELETE  FROM feedback WHERE UID = ?` ,[UID],(err,results) => {

            
            if(err){
                return reject(err);
            }
            else{
                return resolve(results);
            }

        });


    });


};








signalapp.ViewStaffRegistration = () => {

    return new Promise((resolve,reject) => {

        pool.query(`SELECT * FROM staffregistration`,(err,results) => {

            
            if(err){
                return reject(err);
            }
            else{
                return resolve(results);
            }

        });


    });


};


// insert feedback
signalapp.insertfeedback = (user_id,contact,name,feedback) => {

    return new Promise((resolve,reject) => {

        pool.query(`insert into feedback(UID, contact, Name, feedback) values(?, ?, ?, ?)`,[user_id, contact, name, feedback],(err,results) => {
            
          
           

            if(err){
               
                return reject(err);}
         
            else{
                return resolve(results);
            }

        });


    });


};





signalapp.insertemergency = (E_ID,Name,Contact1,Contact2,location) => {

    return new Promise((resolve,reject) => {

        pool.query(`insert into emergencycontact(E_ID, Name, Contact1, Contact2, location) values(?, ?, ?, ?, ?)`,[E_ID, Name, Contact1, Contact2, location],(err,results) => {
            
          
           

            if(err){
               
                return reject(err);}
         
            else{
                return resolve(results);
            }

        });


    });


};




signalapp.insertinvite = (I_id,user_id,name,staff_id,contact) => {

    return new Promise((resolve,reject) => {

        pool.query(`insert into invitation(I_id, user_id, name, staff_id, contact) values(?, ?, ?, ?, ?)`,[I_id, user_id, name, staff_id, contact],(err,results) => {
            
          
           

            if(err){
               
                return reject(err);}
         
            else{
                return resolve(results);
            }

        });


    });


};



signalapp.help = (topic,image,details) => {

    return new Promise((resolve,reject) => {

        pool.query(`insert into help(topic, image, details) values(?, ?, ?)`,[topic, image, details],(err,results) => {
            
          
           

            if(err){
               
                return reject(err);}
         
            else{
                return resolve(results);
            }

        });


    });


};
signalapp.insertSexEducation = (topic,article1,date,image1,article2,image2) => {

    return new Promise((resolve,reject) => {

        pool.query(`insert into sexeducation(topic, article1, date, image1, article2, image2) values(?, ?, ?, ?, ?, ?)`,[topic, article1, date, image1, article2, image2],(err,results) => {
            
          
           

            if(err){
               
                return reject(err);}
         
            else{
                return resolve(results);
            }

        });


    });


};


signalapp.insertstaff = (S_ID,Name,staff_type,location,fee,reg_no,photo) => {

    return new Promise((resolve,reject) => {

        pool.query(`insert into staff(staff_id, name, staff_type, location, fee, reg_no, photo) values(?, ?, ?, ?, ?, ?, ?)`,[S_ID, Name, staff_type, location, fee, reg_no, photo],(err,results) => {
            
          
           

            if(err){
               
                return reject(err);}
         
            else{
                return resolve(results);
            }

        });


    });


};

signalapp.insertvolunteer = (V_ID,name,location,contact,type,details,email,image) => {

    return new Promise((resolve,reject) => {

        pool.query(`insert into volunteer(V_ID, name, location, contact, type, details, email, image) values(?, ?, ?, ?, ?, ?, ?, ?)`,[V_ID, name, location, contact, type, details, email, image],(err,results) => {
            
          
           

            if(err){
               
                return reject(err);}
         
            else{
                return resolve(results);
            }

        });


    });


};



signalapp.insertStaffRegistration = (U_id,image,image1,image2,description) => {

    return new Promise((resolve,reject) => {

        pool.query(`insert into staffRegistration(U_id, image, image1, image2, description) values(?, ?, ?, ?, ?)`,[U_id, image, image1, image2, description],(err,results) => {
            
          
           

            if(err){
               
                return reject(err);}
         
            else{
                return resolve(results);
            }

        });


    });


};




signalapp.insertmedicalItem = (itm_id,name,otherName,company,price,quantity,description,tags,images) => {

    return new Promise((resolve,reject) => {

        pool.query(`insert into medicalitems(itm_id, name, otherName, company, price, quantity, description, tags, images) values(?, ?, ?, ?, ?, ?, ?, ?, ?)`,[itm_id, name, otherName, company, price, quantity, description, tags, images],(err,results) => {
            
          
           

            if(err){
               
                return reject(err);}
         
            else{
                return resolve(results);
            }

        });


    });


};












signalapp.insertmedicine = (med_id,brand_name,generic_name,company,price,quantity,description,tags,images) => {

    return new Promise((resolve,reject) => {

        pool.query(`insert into medicine(med_id, brand_name, generic_name, company, price, quantity, description, tags, images) values(?, ?, ?, ?, ?, ?, ?, ?, ?)`,[med_id, brand_name, generic_name, company, price, quantity, description, tags, images],(err,results) => {
            
          
           

            if(err){
               
                return reject(err);}
         
            else{
                return resolve(results);
            }

        });


    });


};





signalapp.insertAbortion = (place_ID,name,location,contact,details,images) => {

    return new Promise((resolve,reject) => {

        pool.query(`insert into abortion(place_ID, name, location, contact, details, images) values(?, ?, ?, ?, ?, ?)`,[place_ID, name, location, contact, details, images],(err,results) => {
            
          
           

            if(err){
               
                return reject(err);}
         
            else{
                return resolve(results);
            }

        });


    });


};


//inserting user details
signalapp.registration = (u_id,name,email,contact1,contact2,location,password) => {

    return new Promise((resolve,reject) => {

        pool.query(`insert into user(u_id, name, email, contact1, contact2, location, password) values(?, ?, ?, ?, ?, ?, ?)`,[u_id, name, email, contact1, contact2, location, password],(err,results) => {
            
          
           

            if(err){
               
                return reject(err);}
         
            else{
                return resolve(results);
            }

        });


    });


};

// Get username password
signalapp.login = (email,password) => {

    return new Promise((resolve,reject) => {
       
        pool.query("SELECT * FROM user WHERE (email, password) = (?, ?)", [email, password], function(err, row) {
            console.log(row.length);
            if(row.length!=0) {
              console.log("User Logged In");
              resolve(row);
            
              } else {
              res.status(404);
              console.error("Failure");
                reject(err);
            }
          });

    });


};




module.exports = signalapp;
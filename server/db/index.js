const mysql = require('mysql');

const pool = mysql.createPool({

    connectionLimit:10000,
    

    user: 'root',
    password: '',
    database:'finalyearproject',
    host:'localhost',
    port: '3306'


});

let futsal={};



futsal.insertfeedback = (user_id,contact, name, feedback) => {

    return new Promise((resolve,reject) => {

        pool.query('insert into feedback(user_id, contact, name, feedback) values(?, ?, ?, ?)',
        [ user_id, contact, name, feedback],(err,results) => {
        
            if(err){
               
                return reject(err);}
         
            else{
                return resolve(results);
            }

        });
    });

};


futsal.insertbooking = (booking_date,booking_time, booking_Day, game_duration) => {

    return new Promise((resolve,reject) => {

        pool.query('insert into booking(booking_date, booking_time, booking_Day, game_duration) values(?, ?, ?, ?)',
        [ booking_date, booking_time, booking_Day, game_duration],(err,results) => {
        
            if(err){
               
                return reject(err);}
         
            else{
                return resolve(results);
            }

        });
    });

};

futsal.insertlogin = (email,password) => {

    return new Promise((resolve,reject) => {
        
        pool.query(`Select * from registration where email=? and password=?`,
        [email, password],(err,results) => {
            console.log(results);
            
            if(err){
                console.log(err);
               
                return reject(err);}
         
            else{
                console.log(results.length);
                if(results.length == 0){
                    console.log(err);
                    return reject(err);
                }
                else{
                    return resolve(results);
                }
          
            }

        });


    });


};




futsal.insertRegistration = (name,email,password,cpassword) => {

    return new Promise((resolve,reject) => {

        pool.query(`insert into registration(name, email, password, cpassword) values(?, ?, ?, ?)`
        ,[ name, email, password, cpassword],(err,results) => {
            
            if(err){
               
                return reject(err);}
         
            else{
                return resolve(results);
            }

        });


    });


};

//for admin

futsal.getUser = () => {

    return new Promise((resolve,reject) => {

        pool.query(`Select * from registration`
        ,(err,results) => {
            
            if(err){
               
                return reject(err);}
         
            else{
                return resolve(results);
            }

        });


    });


};

futsal.getFeedback = () => {

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



futsal.getBooking = () => {

    return new Promise((resolve,reject) => {
          
        pool.query(`SELECT * FROM booking`,(err,results) => {

            
            if(err){
                return reject(err);
            }
            else{
                return resolve(results);
            }

        });


    });


};

futsal.deletebooking = (booking_time) => {

    return new Promise((resolve,reject) => {

        pool.query(`DELETE  FROM booking WHERE booking_time = ? `,[booking_time],(err,results) => {

            
            if(err){
                return reject(err);
            }
            else{
                return resolve(results);
            }

        });


    });

};


futsal.deletefeedback = (user_id) => {

    return new Promise((resolve,reject) => {

        pool.query(`DELETE  FROM feedback WHERE user_id = ?` ,[user_id],(err,results) => {

            
            if(err){
                return reject(err);
            }
            else{
                return resolve(results);
            }

        });


    });

};


futsal.getUserfeedback = () => {
    return new Promise((resolve,reject) => {
        pool.query(`Select * from feedback`
        ,(err,results) => {
            
            if(err){
               
                return reject(err);}
         
            else{
                return resolve(results);
            }
        });

    });
};



module.exports = futsal;


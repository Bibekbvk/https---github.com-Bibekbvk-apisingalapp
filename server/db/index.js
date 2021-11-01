const mysql = require('mysql');

const pool = mysql.createPool({

    connectionLimit:10000,
    

    user: 'root',
    password: '',
    database:'somu',
    host:'localhost',
    port: '3306'


});

let signalapp={};

//get medicine
signalapp.getnews = () => {

    return new Promise((resolve,reject) => {
          
        pool.query(`SELECT * FROM news`,(err,results) => {

            
            if(err){
                return reject(err);
            }
            else{
                return resolve(results);
            }

        });


    });


};

signalapp.getarticle = () => {

    return new Promise((resolve,reject) => {
          
        pool.query(`SELECT * FROM article`,(err,results) => {

            
            if(err){
                return reject(err);
            }
            else{
                return resolve(results);
            }

        });


    });


};




signalapp.getsignal_app = () => {

    return new Promise((resolve,reject) => {
          
        pool.query(`SELECT * FROM signal_app`,(err,results) => {

            
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

signalapp.insertfeedback = (contact,name,feedback) => {

    return new Promise((resolve,reject) => {

        pool.query('insert into feedback(  name, contact, feedback) values(?, ?, ?)',
        [ contact, name, feedback],(err,results) => {
        
            if(err){
               
                return reject(err);}
         
            else{
                return resolve(results);
            }

        });
    });

};





module.exports = signalapp;


const mysql=require("mysql");

const connection=mysql.createConnection({
    host:"localhost",
    user:"Pranav",
    password:"Root@1234",
    port:"3306",
    database:"Pranav"
})

const con=connection.connect((err)=>{
    if(err){
        console.log("-------Error----------");
        console.log(err);
    }
    else{
        console.log("Connected to MySQL");
    }
})

module.exports=connection;
const express = require("express");
const app = express();
const mysqlcon = require("./Database/sqlconnection");
const bodyparser = require("body-parser");
const cors = require("cors");


//middleware
app.use(bodyparser.json());
app.use(cors());





app.get("/", (req, resp) => {
    resp.send("<h1>Welcome to MySQL</h1>");
});


app.get("/user/data", (req, resp) => {
    mysqlcon.query("select * from user", (err, result) => {
        if (err) {
            console.log(err);
        }
        else {
            resp.json(result);
        }
    })
})

app.post("/adduser", (req, res) => {
    let sqlquery = `insert into user values("${req.body.firstname}","${req.body.lastname}","${req.body.email}","${req.body.password}")`;
    mysqlcon.query(sqlquery, (err, result) => {
        if (err) {
            console.log(err);
        }
        else {
            res.json(result);
        }
    }
    )
})

app.listen(4000);
console.log("Server is running at port 4000");
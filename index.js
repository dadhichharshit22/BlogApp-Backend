const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT|| 3000;

// middleware
 app.use(express.json());
//app.use(bodyParser.json());

const blog = require("./routes/blog");

// mount
app.use("/api/v1",blog);

const connectWithDB = require("./config/database");
connectWithDB();

// start the server
app.listen(PORT,()=>{
    console.log(`App is started at port no. ${PORT}`);
})

app.get("/",(req,res)=>{
    res.send(`<h1>This is my homepage baby</h1>`);
})
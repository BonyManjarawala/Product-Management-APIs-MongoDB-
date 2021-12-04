require("dotenv").config();
const express = require("express");
const app = express();
app.use(express.json());
const port = 5000;
const mongoose = require("mongoose");


const companyModule = require("./routes/companyr");
const productModule = require("./routes/productr");
const sellerrModule = require("./routes/sellerrr");


mongoose
.connect(process.env.MONGOURL)
.then( ()=> console.log("Mongo DB connected"));

app.get("/",(req,res)=> res.send("Hello User"));
app.use("/company",companyModule);
app.use("/product",productModule);
app.use("/seller",sellerrModule);


app.listen(port, () => console.log(`Server running  on port 5000!`));
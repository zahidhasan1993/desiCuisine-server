const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");
const chefs = require('./chefs.json');

app.use(cors());

app.get("/", (req,res) => {
    res.send('welcome to Chefs Table');
})

app.get("/chefs",(req,res) => {
    res.send(chefs);
    // console.log(req);
})

app.get("/chefs/:id", (req,res) => {
    const id = Number(req.params.id);
console.log(id);
    const newData = chefs.find(c => c.id === id);

    res.send(newData);
})


app.listen(port, () => {
    console.log(`example app listening port ${port}`);
})
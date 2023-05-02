const express = require('express');
const app = express();
const port = 5000;


app.get("/", (req,res) => {
    res.send('welcome to Chefs Table');
})


app.listen(port, () => {
    console.log(`example app listening port ${port}`);
})
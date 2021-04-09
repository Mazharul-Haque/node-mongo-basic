const express = require('express');

const app = express();

app.get('/', (req, res)=>{
    res.send('Thank you for calling, i know how to open node');
})

app.listen(3000, ()=> console.log("Connecting...to 3000"));


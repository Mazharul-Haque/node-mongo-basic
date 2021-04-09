const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
const users= ['apple', 'banana', 'orange']

app.get('/', (req, res)=>{
    const team = {
        name : 'Manchester City',
        League : 'UCL'

    }
    res.send(team);
});
app.get('/fruits/banana', (req, res)=> {
    res.send({fruit:'banana', quantity : 1000, price:10000});
});
//users
app.get('/users/:id', (req, res)=>{
    const id= req.params.id;
    console.log(req.query);
    const name = users[id];
    res.send({id, name});

})

app.listen(3000, ()=> console.log("Connecting...to 3000"));


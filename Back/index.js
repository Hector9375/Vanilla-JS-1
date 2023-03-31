const express = require('express');

const cors = require('cors');
const coommon = require('./router/common');

const app = express();

const port = 3030;

const DB = [{
    'sound' : '멍멍'
},
{
    'sound' : '야옹'
},
{
    'sound' : '꿀꿀'
},
{
    'sound' : '알수없음'
}];
app.get('/sound/:name', (req,res) => {
    const name = req.params
    console.log(name);
    if(name.name === 'dog') {
        res.json(DB[0]);
    }else if(name.name === 'cat'){
        res.json(DB[1]);
    }else if(name.name === 'pig'){
        res.json(DB[2]);
    }else {
        res.json(DB[3]);
    }
})

// 변수.use.cors() 를 실행하면 어떤 HTML에서 실행하든 가능하게 해줌

// app.get('/', (req, res) => {
//     res.send('Hello World!');
// })

// app.get('/user/:id', (req, res) =>{
//     // const q = req.params
//     // console.log(q);
//     const q = req.query
//     console.log(q);

//     res.json({'user:id' : q.id})
// })
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})



  
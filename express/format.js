
const fs=require('fs');
const text=fs.readFileSync('text.txt','utf-8');
const data=JSON.parse(fs.readFileSync('data.json','utf-8'));
const products=data.products;

const express=require('express');
const { type } = require('os');
const server=express();


// bodyparser
// server.use(express.static('public'));


// middleware
// server.use((req,res,next)=>{
//     console.log(req.method,req.ip,req.hostname);
//     next();
// })

const auth=(req,res,next)=>{
    // console.log(req.query.pass);
    // if(req.query.pass=='123'){
    //     next();
    // }
    // else{
    //     res.sendStatus(401);
    // }
    next();
}

// server.use(auth);




server.get('/product/:id',auth,(req,res)=>{
    res.json(products[0]);
})
server.get('/',auth,(req,res)=>{
    res.json({type:'get'});
})
server.put('/',(req,res)=>{
    res.json({type:'put'});
})
server.delete('/',(req,res)=>{
    res.json({type:'delete'});
})
server.patch('/',(req,res)=>{
    res.json({type:'patch'});
})


server.get('/demo',(req,res)=>{
    // res.json(products);
    // res.end('Hello');
    // res.sendFile('');
})

server.listen(8080,()=>{
    console.log("hey,Server Started:")
})

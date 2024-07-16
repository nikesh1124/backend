
const fs=require('fs');
const text=fs.readFileSync('text.txt','utf-8');
const data=JSON.parse(fs.readFileSync('data.json','utf-8'));
const products=data.products;

const express=require('express');
const { type } = require('os');
const server=express();


// bodyparser
// server.use(express.static('public'));
server.use(express.json());


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

// post
// server.post('/',(req,res)=>{
//     res.json(req.body);
// })

// put
// server.put('/product/:id',(req,res)=>{
//      let id=+req.params.id;
//    let proInd=products.find(p=>p.id=id);
//    products.splice(proInd,1,{...req.body,id:id});
//    res.json(products);
// })

// patch
// server.patch('/products/:id', (req, res) => {
//     const id = +req.params.id;
//     const productIndex = products.findIndex(p=>p.id===id)
//     const product = products[productIndex];
//     products.splice(productIndex,1,{...product,...req.body})
//     res.status(201).json(products);
//   });

// Delete DELETE /products/:id
// server.delete('/products/:id', (req, res) => {
//     const id = +req.params.id;
//     const productIndex = products.findIndex(p=>p.id===id)
//     const product = products[productIndex];
//     products.splice(productIndex,1)
//     res.status(201).json(product);
//   });
  

// // get one product
// server.get('/product/:id',auth,(req,res)=>{
//     const id=+req.params.id;
//     const prd=products.find(p=>p.id=id);
//     res.json(prd);
// })
server.get('/',(req,res)=>{
    res.json(products);
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

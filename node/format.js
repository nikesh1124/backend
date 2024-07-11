
const http=require('http');
const fs=require('fs');

const text=fs.readFileSync('text.txt','utf-8');
const data=JSON.parse(fs.readFileSync('data.json','utf-8'));
const product=data.products[0];

console.log("hey Nikesh");

const server=http.createServer((req,res)=>{

    switch(req.url){
        case '/':
             res.setHeader('content-type','text');
            //  res.setHeader('content-type','text/html');
             res.end(text);
             break;
        case '/api':
            res.setHeader('content-type','application/json');
            res.end(JSON.stringify(data));
            break;
        case '/product':
             res.setHeader('content-type','text');
            //  let modifiedtext=text.replace('chrome',product.title);
             let modifiedtext=text.replace('chrome','Browser');
             res.end(modifiedtext);
             break;    
        default:
            res.writeHead(404);
            // res.setHeader('content-type','text/html');
            res.end();   
    }
    

    console.log("Hy,Server Started:");
   
    
})
server.listen(8080);
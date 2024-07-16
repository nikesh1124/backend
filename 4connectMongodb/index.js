const express = require('express');
const server = express();
const mongoose = require('mongoose');
const { Schema } = mongoose;

//db connection
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/nikesh');
  console.log('database connected')
}
 
const productSchema = new Schema({
    title: {type:String},
    description: String,
    price: {type: Number, min:[0,'wrong price']},
    discountPercentage: {type: Number, min:[0,'wrong min discount'], max:[50,'wrong max discount']},
    rating: {type: Number, min:[0,'wrong min rating'], max:[5,'wrong max rating']},
    brand: {type: String},
    category: {type: String},
    thumbnail: {type: String},
    images: [ String ] 
  });

  let Product = mongoose.model('Product', productSchema);


//bodyParser
server.use(express.json());
server.use(express.static('public'));

server.post('/',(req,res)=>{
  let product=new Product();
  product.title="Nikeshhhh Phone";
  product.description="This is description";
  product.brand="New Apple ";
  product.save();
  res.json({type:"post"})
})

server.listen(8080, () => {
  console.log('server stated');
});
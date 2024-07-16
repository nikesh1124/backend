const express = require('express');
const server = express();
// const mongoose = require('mongoose');
// const { Schema } = mongoose;


// const productSchema = new Schema({
//     title: {type: String, required: true, unique: true} ,
//     description: String,
//     price: {type: Number, min:[0,'wrong price'],required: true},
//     discountPercentage: {type: Number, min:[0,'wrong min discount'], max:[50,'wrong max discount']},
//     rating: {type: Number, min:[0,'wrong min rating'], max:[5,'wrong max rating']},
//     brand: {type: String,required: true},
//     category: {type: String, required: true},
//     thumbnail: {type: String, required: true},
//     images: [ String ]
//   });
  
// const Product = mongoose.model('Product', productSchema);

//bodyParser
server.use(express.json());
server.use(express.static('public'));

server.listen(8080, () => {
  console.log('server started');
});
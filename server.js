import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
// import config from 'config.local';
import logger from 'morgan';
// import routes from './routes/index';
import Product from '../models/product';
const app = express();


mongoose.connect('mongodb://localhost/productdb');

app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send({message: 'test'});
});

app.post('/cart/add', (req, res) => {
  var product = new Product();
  product.name = req.body.name;
  product.description = req.body.description;
  product.price = req.body.price;
  product.imageurl = req.body.imageurl;

  //save a product
  product.save((err) => {
    if(err) {
      console.error('Error saving to database', err)
      res.send(err);
    } else {
      console.log('product saved', product)
      res.json({message: 'Product added to database'});
    }
  });
});

//get a list of products
app.get('/cart/list', (req, res) => {
  Product.find((err, product)=> {
    if(err) {
      console.error(err);
    } else {
      res.json(product);
    }
  });
});

//get one document by id
app.get('/cart/list/:product_id', (req, res) => {
  Product.findById(req.params.product_id, (err, product)=> {
    if(err) {
      console.error(`Can not find the id ${req.params.product_id}, ${err}`);
    } else {
      res.json(product);
    }
  });
});

app.put('/cart/update/:product_id', (req, res) => {
  Product.findById(req.params.product_id, (err, product)=> {
    if(err) {
      console.error(`Can not find the id ${req.params.product_id}, ${err}`);
    } else {
      product.name = req.body.name;
      product.description = req.body.description;
      product.price = req.body.price;
      product.imageurl = req.body.imageurl;
      product.save((err) => {
        if(err) {
          res.send({error: err});
        } else {
          res.json({message: 'Product updated'});
        }
      })

    }
  });
});
//fix this later...
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`app listening on port ${PORT}`);
})

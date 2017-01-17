import {express} from 'express';
const router = express.Router();
import Product from './models/product';

router.get('/', (req, res) => {
  res.send({'message': 'it works!'});
});

router.post('/cart/add', (req, res) => {
  let product = new Product();
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
      res.json({message: 'Product added to database'});
    }
  });
});

//get a list of products
router.get('/cart/list', (req, res) => {
  Product.find((err, product)=> {
    if(err) {
      console.error(err);
    } else {
      res.json(product);
    }
  });
});
module.exports = router;

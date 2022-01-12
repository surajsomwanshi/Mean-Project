const express = require("express");//import express module

const router = express.Router();//data <-API->app

const Product = require("../model/product");//importing model folder and fetching product schema from the product.js

// retrieving products list
router.get("/products", (req, res, next) => {
    // res.send("<h1>Retriving the products list</h1>");
    
    //find the product from the product list
     Product.find(function (err, products) {
   if (err) console.log("routes.js: err to 'find()' products : ", err); 
   res.json(products);
 });
});

//to add product
router.post("/product", (req, res, next) => {
    //logic to add products
   let newProduct = new Product({
   prodId: req.body.prodId,//request.body to get the values from the inputs 
   prodName: req.body.prodName,
   price: req.body.price,
 });

  //save the current add product
 newProduct.save((err, product) => {
   console.log("routes->save(): product : ", product);
   if (err) {
     res.json({ msg: "Failed to add Product" });
   } else {
     res.json({ msg: "Product added successfully...!", newProduct: product });
   }
 });
});

//to delete product
router.delete("/product/:id", (req, res, next) => {
 //logic to delete product
 
  //remove the product from the list
 Product.deleteOne({ _id: req.params.id }, function (err, result) {
   if (err) {
     res.json(err);
   } else {
     res.json(result);
   }
 });
});

//update product
router.put("/product/:id", (req, res, next) => {
  console.log("req", req.body);

  //find the product to update from the product list
  Product.findOne({ _id: req.params.id }, function (err, product) {
    if (err) {
      res.json(err);
    } else {
      product.prodId = req.body.prodId;
      product.prodName = req.body.prodName;
      product.price = req.body.price;
    
      //save the updated product to the product list
      product.save((err, product) => {
        console.log("findOne->save(): product :", product);
        if (err) {
          res.json({ msg: "Failed to update Product" });
        } else {
          res.json(product);
        }
      });
    }
  });
});



module.exports = router;
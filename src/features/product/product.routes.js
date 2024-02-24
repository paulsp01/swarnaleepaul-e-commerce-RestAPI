
//Manage routes/path to productController

import express from 'express';
import ProductController from './product.controller.js';
import {upload} from '../../middilewares/fileUpload.middileware.js';
 
//initialize express router
const productRouter=express.Router();
const productController=new ProductController();

//all the origin paths to the controller methods
productRouter.get("/", productController.getAllProducts);
productRouter.post("/", upload.single('imageUrl') ,productController.addProduct);

export default productRouter;
import express from "express" 

import Product from "../models/product.js";

const router = express.Router();

router.post("/products", async (req,res) => {
    console.log(req.body)
    const productss = new Product({
    ...req.body
    
})

// Product.Save()
res.send(productss)
})

export default router;


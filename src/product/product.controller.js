const express = require("express");
const router = express.Router();
const prisma = require("../db");
const { getAllProducts, getProductById, deleteProduct, createProduct, updateProduct } = require("./product.service");

router.get("/", async (req, res) => {
    try {
        const products = await getAllProducts();
        res.send(products);
    } catch (error) {
        res.status(500).json({
            message: "Error retrieving products",
            code: 500,
            error: error.message
        });
    }
});

router.post("/", async (req, res) => {
    try {
        const newProduct = req.body;
        const product = await createProduct(newProduct);
        res.status(201).send({
            data: product,
            message: "Product created successfully",
            code: 201,
        });
    } catch (error) {
        res.status(500).json({
            message: "Error creating product",
            code: 500,
            error: error.message
        });
    }
});

router.delete("/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const product = await deleteProduct(id);
        res.status(200).send(`Product ${product.name} was deleted`);
    } catch (error) {
        res.status(500).json({
            message: "Error deleting product",
            code: 500,
            error: error.message
        });
    }
});

router.put("/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const updatedProductData = req.body;
        const updatedProduct = await updateProduct(id, updatedProductData);
        res.status(200).send({
            data: updatedProduct,
            message: "Product updated successfully",
            code: 200,
        });
    } catch (error) {
        res.status(500).json({
            message: "Error updating product",
            code: 500,
            error: error.message
        });
    }
});

router.get("/:id", async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const product = await getProductById(id);
        if (!product) {
            return res.status(404).json({
                message: "Product not found",
                code: 404,
            });
        }
        res.status(200).json({
            data: product,
            message: "Product retrieved successfully",
            code: 200,
        });
    } catch (error) {
        res.status(500).json({
            message: "Error retrieving product",
            code: 500,
            error: error.message
        });
    }
});

module.exports = router;
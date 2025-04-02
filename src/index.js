const express = require("express");
const dotenv = require("dotenv");
const app = express();
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();
dotenv.config();

const PORT = process.env.PORT;

app.use(express.json());

app.get("/api", (req, res) => {
    res.send("Hello World!");
});

app.get("/products", async (req, res) => {
    const products = await prisma.product.findMany();
    res.send(products);
});

app.post("/products", async (req, res) => {
    const newProduct = req.body;

    const product = await prisma.product.create({
        data: {
            name: newProduct.name,
            price: newProduct.price,
            description: newProduct.description,
            image: newProduct.image,
        },
    });

    res.send({
        data: product,
        message: "Product created successfully",
        code: 201,
    });
});

app.delete("/products/:id", async (req, res) => {
    
    try {
        const id = req.params.id;
        const product = await prisma.product.delete({
            where: { id: parseInt(id) }
        });
        res.status(200).send(`Product ${product.name} was deleted`);
    } catch {
        res.status(404).send(`Product not found`);
    }
});

app.put("/products/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const updatedProductData = req.body;

        const updatedProduct = await prisma.product.update({
            where: { id: parseInt(id) },
            data: {
                name: updatedProductData.name,
                price: updatedProductData.price,
                description: updatedProductData.description,
                image: updatedProductData.image,
            },
        });

        res.status(200).send({
            data: updatedProduct,
            message: "Product updated successfully",
            code: 200,
        });
    } catch (error) {
        res.status(404).send({
            message: "Product not found or update failed",
            error: error.message,
        });
    }
});

app.get("/product/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const product = await prisma.product.findUnique({
            where: { id: parseInt(id) }
        });

        if (product) {
            res.status(200).send({
                data: product,
                message: "Product retrieved successfully",
                code: 200,
            });
        } else {
            res.status(404).send({
                message: "Product not found",
                code: 404,
            });
        }
    } catch (error) {
        res.status(500).send({
            message: "An error occurred while retrieving the product",
            error: error.message,
        });
    }
});



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
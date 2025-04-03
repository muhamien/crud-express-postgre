const express = require("express");
const dotenv = require("dotenv");
const app = express();
const productController = require("./product/product.controller");

dotenv.config();

const PORT = process.env.PORT;

app.use(express.json());

app.get("/api", (req, res) => {
    res.send("Hello World!");
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

app.use("/products", productController);
const prisma = require('../db');

const _fetchProducts = async () => {
  const products = await prisma.product.findMany();
  return products;
};

const _createProduct = async (product) => {
  const newProduct = await prisma.product.create({
    data: product,
  });
  return newProduct;
};

const _updateProduct = async (productId, productData) => {
  const updatedProduct = await prisma.product.update({
    where: { id: productId },
    data: productData,
  });
  return updatedProduct;
};

const _deleteProduct = async (productId) => {
    const deletedProduct = await prisma.product.delete({
      where: { id: productId },
    });
    return deletedProduct;
};

const _fetchProductById = async (productId) => {
    const product = await prisma.product.findUnique({
      where: { id: productId },
    });
    return product;
};


module.exports = {
    _fetchProducts,
    _createProduct,
    _updateProduct,
    _deleteProduct,
    _fetchProductById,
};
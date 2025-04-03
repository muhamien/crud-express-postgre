const { _createProduct, _fetchProducts, _fetchProductById, _updateProduct, _deleteProduct } = require("./product.repository");

const getAllProducts = async () => {
  return await _fetchProducts();
};

const createProduct = async (product) => {
  return await _createProduct(product)
};

const getProductById = async (id) => {
  return await _fetchProductById(id);
};

const updateProduct = async (id, product) => {
  return await _updateProduct(id, product);
};

const deleteProduct = async (id) => {
  return await _deleteProduct(id);
};

module.exports = {
    getAllProducts,
    createProduct,
    getProductById,
    updateProduct,
    deleteProduct
};
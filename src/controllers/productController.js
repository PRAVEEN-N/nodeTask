const ProductService = require('../services/productService');


// Create new product and save it to the database
exports.createProduct = async (req, res) => {
  try {
    const { title, description, inventory } = req.body;
    const product = await ProductService.createProduct(title, description, inventory, req.user.id);
    res.status(201).json(product);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


// Get all products
exports.getProducts = async (req, res) => {
  try {
    const products = await ProductService.getProducts();
    res.status(200).json(products);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Update a specified product
exports.updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, inventory } = req.body;
    const product = await ProductService.updateProduct(id, title, description, inventory, req.user.id, req.user.role);
    res.status(200).json(product);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete a specified product
exports.deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await ProductService.deleteProduct(id, req.user.id, req.user.role);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
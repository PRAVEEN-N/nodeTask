const Product = require('../models/Product');
const { ROLES } = require('../config');

// ProductService class to handle all product operations
class ProductService {
    // Method to create a new product
    static async createProduct(title, description, inventory, userId) {
        const product = await Product.create({ title, description, inventory, userId });
        return product;
    }

    // Method to get all products
    static async getProducts() {
        return await Product.findAll();
    }

    static async getProductById(id) {
        // Check if product exists
        const product = await Product.findOne({ where: { id } });
        if (!product) {
            throw new Error('Product not found');
        }
        return product;
    };

    // Method to update a specific product
    static async updateProduct(id, title, description, inventory, userId, role) {
        // Check if product exists
        const product = await Product.findOne({ where: { id } });

        if (!product) throw new Error('Product not found');

        // Check the role of the user (only ADMIN or MANAGER can edit the product)
        if (role === ROLES.ADMIN || role === ROLES.MANAGER) {
            product.title = title;
            product.description = description;
            product.inventory = inventory;
            await product.save();
            return product;
        } else {
            throw new Error('Forbidden');
        }
    }

    // Method to delete a specific product
    static async deleteProduct(id, userId, role) {

        // Check if user role is ADMIN
        if (role === ROLES.ADMIN) {

            // Find product by id
            const product = await Product.findOne({ where: { id } });

            if (!product) throw new Error('Product not found');
            await product.destroy();
            return { message: 'Product deleted' };
        } else {
            throw new Error('Forbidden');
        }
    }
}

module.exports = ProductService;
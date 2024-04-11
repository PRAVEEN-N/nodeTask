const express = require('express');
const productController = require('../controllers/productController');
const { verifyToken, authorizeAdmin, authorizeAdminManager } = require('../middlewares/authMiddleware');

const router = express.Router();

// Route to create a new product. Only accessible to admins.
router.post('/', verifyToken, authorizeAdmin, productController.createProduct);

// Route to get all products. Accessible to both admins and managers
router.get('/:id?', verifyToken, authorizeAdminManager, productController.getProducts);

// Route to update existing product. Accessible to both admins and managers.
router.put('/:id', verifyToken, authorizeAdminManager, productController.updateProduct);

// Route to delete a product. Only accessible to admins.
router.delete('/:id', verifyToken, authorizeAdmin, productController.deleteProduct);

module.exports = router;

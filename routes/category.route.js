const categoryController = require('../controllers/categoryController');

const categoryRoutes = (app) => {
    app.get('/categories', categoryController.getAllCategories);
    app.get('/categories/:id', categoryController.getCategoryById);
    
    app.get('/categories-create', categoryController.viewCreate);
    app.post('/categories', categoryController.createCategory);

    app.get('/categories/:id/edit', categoryController.viewUpdate);
    app.post('/categories/:id', categoryController.updateCategory);

    app.get('/categories/:id/delete', categoryController.deleteCategory);
};

module.exports = categoryRoutes;
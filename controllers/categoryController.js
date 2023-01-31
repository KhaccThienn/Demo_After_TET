const categories = require('../models/category');

const categoryController = {
    getAllCategories: (req, res) => {
        categories.getAll((err, data) => {
            if (err) {
                res.send(err);
            } else {
                res.render('category/list', { category: data });
            }
        });
    },
    getCategoryById: (req, res) => {
        categories.getById(req.params.id, (err, data) => {
            if (err) {
                res.send(err);
            } else {
                res.render('category/details', { category: data });
            }
        });
    },
    viewCreate: (req, res) => {
        res.render('category/create');
    },
    createCategory: (req, res) => {
        categories.create(req.body, (err, data) => {
            if (err) {
                res.send(err);
            } else {
                res.redirect('/categories');
            }
        });
    },
    viewUpdate: (req, res) => {
        categories.getById(req.params.id, (err, data) => {
            if (err) {
                res.send(err);
            } else {
                res.render('category/update', { category: data });
            }
        });
    },
    updateCategory: (req, res) => {
        categories.update(req.params.id, req.body, (err, data) => {
            if (err) {
                res.send(err);
            } else {
                res.redirect('/categories');
            }
        });
    },
    deleteCategory: (req, res) => {
        categories.delete(req.params.id, (err, data) => {
            if (err) {
                res.send(err);
            } else {
                res.redirect('/categories');
                console.log(data);
            }
        });
    }
};

module.exports = categoryController;
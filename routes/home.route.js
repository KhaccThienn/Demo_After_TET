const homeController = require("../controllers/homeController");

const homeRoute = (app) => {
    app.get('/', homeController.index);
};
module.exports = homeRoute;
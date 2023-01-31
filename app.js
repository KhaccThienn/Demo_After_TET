require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const conn = require('./database/connect');
const categoryRoutes = require('./routes/category.route');
const homeRoute = require('./routes/home.route');

const app = express();
const port = process.env.PORT;

app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(express.static(__dirname + 'public'));
app.use(bodyParser.urlencoded({
    extended: true
}));

categoryRoutes(app);
homeRoute(app);

const server = app.listen(port, "127.0.0.1", () => {

    const host = server.address().address;
    const port = server.address().port;

    console.log("API App is Listening at http://%s:%s", host, port);
});
const conn = require('../database/connect');

const category = {
    getAll: (callback) => {
        let sql = "SELECT * FROM categories ORDER BY id DESC";
        conn.query(sql, (err, data) => {
            if (err) {
                console.log("Error: " + err);
                callback(err, null);
            } else {
                console.log("Data: " + data);
                callback(null, data);
            }
        });
    },

    getById: (id, callback) => {
        let sql = "SELECT * FROM categories WHERE id = ?";
        conn.query(sql, [id], (err, data) => {
            if (err) {
                console.log("Error: " + err);
                callback(err, null);
            } else {
                console.log("Data: " + data);
                callback(null, data[0]);
            }
        });
    },

    create: (data, callback) => {
        let sql = "INSERT INTO categories SET ?";
        conn.query(sql, data, (err, data) => {
            if (err) {
                console.log("Error: " + err);
                callback(err, null);
            } else {
                console.log("Data: " + data);
                callback(null, data);
            }
        });
    },

    update: (id, data, callback) => {
        let sql = "UPDATE categories SET ? WHERE id =?";
        conn.query(sql, [data, id], (err, data) => {
            if (err) {
                console.log("Error: " + err);
                callback(err, null);
            } else {
                console.log("Data: " + data);
                callback(null, data);
            }
        });
    },

    delete: (id, callback) => {
        let sql = "DELETE FROM categories WHERE id = ?";
        conn.query(sql, [id], (err, data) => {
            if (err) {
                console.log("Error: " + err);
                callback(err, null);
            } else {
                console.log("Data: " + data);
                callback(null, data);
            }
        });
    }
};

module.exports = category;
let connection = require('../config/db.js');
let userController = {};




userController.listCustomer = (req, res) => {
    let sql = 'SELECT * FROM customers';

    connection.query(sql, (err, results) => {
        console.log(results)

        res.render('listCustomer', { results })
    });
};
userController.viewForm = (req, res) => {


    res.render('register.ejs')
};

userController.saveCustomer = (req, res) => {
    let name = req.body.name
    let last_name = req.body.last_name
    let phone = req.body.phone
    let address = req.body.address

    let sql = `INSERT INTO  customers (name,last_name,phone,address) VALUES ('${name}','${last_name}',${phone},'${address}')`;

    connection.query(sql, (err, result) => {
        if (err) throw err;
        res.redirect('/customers/listCustomer')
    })
}


userController.editProfile = (req, res) => {
    let id_user = req.params.iduser;

    let sql = `SELECT * FROM customers WHERE id_user = ${id_user}`;
    connection.query(sql, (err, results) => {

        res.render('viewCustomer', { results })
    })
}


userController.updateCustomer = (req, res) => {
    let id_user = req.params.iduser;
    console.log(id_user)
    let name = req.body.name;
    let last_name = req.body.last_name;
    let phone = req.body.phone;
    let address = req.body.address;
    let sql = `UPDATE  customers  SET name = '${name}',
    last_name = '${last_name}', phone = '${phone}',address = '${address}'
      WHERE id_user= ${id_user}`;
    connection.query(sql, (err, result) => {
        if (err) throw err;
        res.redirect('/customers/listCustomer')
    })
};

userController.deleteProfile = (req, res) => {
    console.log(req.params)
    let id_user = req.params.iduser;
    let sql = `DELETE FROM customers WHERE id_user = ${id_user}`;

    connection.query(sql, (err, result) => {
        res.redirect('/customers/listCustomer')
    })
}
module.exports = userController;
let connection = require('../config/db.js');
let rentingController = {};

// listar todos los alquileres
rentingController.listRenting = (req, res) => {

    let sql = ` SELECT * FROM user_movies  
    JOIN movies on movies.id_movie = user_movies.id_movie 
    JOIN customers on customers.id_user = user_movies.id_user`;

    connection.query(sql, (err, results) => {
        if (err) throw err;

        res.render('listRenting', { results })
    })
}

// Renderiza la vista del formulario para crear un alquiler
rentingController.viewFormRenting = (req, res) => {

    res.render('viewFormRenting')
}


//Recoge los datos del formulario de la vista viewFormRenting  y los guarda en bd(tabla intermedia)
rentingController.saveRenting = (req, res) => {
    const { id_user, id_movie } = req.body;

    let sql = `INSERT INTO user_movies (id_user,id_movie) VALUES (${id_user},${id_movie})`;
    connection.query(sql, (err, result) => {
        if (err) throw err;
        res.redirect('/renting')
    })
}

//Elimina el renting de la tabla intermedia
rentingController.deleteRenting = (req, res) => {
    let id_transaction = req.params.id_transaction;
    let sql = `DELETE FROM user_movies WHERE id_transaction= ${id_transaction}`;

    connection.query(sql, (err, resutl) => {
        if (err) throw err;
        res.redirect('/renting')
    })
}


// Renderiza la vista viewSingleRenting y haz un SELECT a bd segun el id

rentingController.viewSingleRenting = (req, res) => {
    let id_transaction = req.params.id_transaction;
    let sql = `SELECT * FROM user_movies WHERE id_transaction = ${id_transaction}`;

    connection.query(sql, (err, result) => {
        if (err) throw err;
        res.render('viewSingleRenting', { result })
    })
}


//Recojo los datos y los actualizo en BD

rentingController.updateRenting = (req, res) => {
    let id_transaction = req.params.id_transaction;

    const { id_user, id_movie } = req.body;

    let sql = `UPDATE  user_movies  SET id_user = '${id_user}',
    id_movie = '${id_movie}'
      WHERE id_transaction= ${id_transaction}`;

    connection.query(sql, (err, result) => {
        if (err) throw err;
        res.redirect('/renting');
    })
}



//Busqueda de una sola Movie

rentingController.searchMovie = (req, res) => {

    let title = req.body.title;
    let sql = `SELECT * FROM movies WHERE title = '${title}'`
    console.log('ESTE ES EL TITULO-----------' + title)
    connection.query(sql, (err, result) => {
        console.log(result)
        if (err) throw err;
        res.render('SingleMovie', { result })
    })
}




module.exports = rentingController;
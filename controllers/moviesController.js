let connection = require('../config/db.js');
let moviesController = {};

//Listar la tabla movie
moviesController.listMovies = (req, res) => {

    let sql = `SELECT * FROM movies`;

    connection.query(sql, (err, results) => {
        if (err) throw err;
        res.render('listMovies', { results })
    })
}

// Renderizar el formulario para crear movie
moviesController.viewFormMovie = (req, res) => {

    res.render('formMovie')
}


//Registrar nueva movie en bbdd

moviesController.saveNewMovie = (req, res) => {

    // let title= req.body.title;
    // let release_date= req.body.release_date;
    // let gender= req.body.gender;
    // let description = req.body.description;

    const { title, release_date, gender, description } = req.body;

    let sql = `INSERT INTO movies (title,release_date,gender,description) VALUES (
    '${title}','${release_date}','${gender}','${description}'
    )`;

    connection.query(sql, (err, result) => {
        if (err) throw err;

        res.redirect('/movies')

    })

}

//Eliminar movie

moviesController.deleteMovie = (req, res) => {
    let id_movie = req.params.id_movie;

    let sql = `DELETE FROM movies WHERE id_movie = ${id_movie}`;

    connection.query(sql, (err, result) => {
        if (err) throw err;

        res.redirect('/movies')
    })

}

//renderiza  la vista viewSingleMovie y haz un select de esa pelicula en base de datos
moviesController.selectSingleMovie = (req, res) => {

    let id_movie = req.params.id_movie;
    let sql = `SELECT * FROM movies WHERE id_movie = ${id_movie}`;

    connection.query(sql, (err, result) => {
        if (err) throw err;

        res.render('viewSingleMovie', { result })
    })
}

//Recoge los datos del formulario (viewSingleMovie) y Actualiza
moviesController.updateMovie = (req, res) => {
    let id_movie = req.params.id_movie;
    const { title, release_date, gender, description } = req.body;
    let sql = `UPDATE movies SET title= 
    '${title}',release_date='${release_date}',gender='${gender}',description='${description}' 
    WHERE id_movie= ${id_movie}`;
    connection.query(sql, (err, result) => {
        if (err) throw err;

        res.redirect('/movies')
    })
}
module.exports = moviesController;
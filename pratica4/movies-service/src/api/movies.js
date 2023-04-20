module.exports = (app, repository) => {
    app.get('/', (req, res, next) => {
        repository.getAllMovies((err, movies) => {
            if (err) return next(err);
            res.json(movies);
        });
    })

    app.get('/premieres', (req, res, next) => {
        repository.getMoviePremiers((err, movies) => {
            if (err) return next(err);
            res.json(movies)
        });
    })

    app.get('/:id', (req, res, next) => {
        repository.getMovieById(req.params.id, (err, movies)=> {
            if (err) return next(err);
            res.json(movies)
        });
    })
    
}
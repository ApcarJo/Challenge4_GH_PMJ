const router = require("express").Router();
const moviesController = require("../controllers/moviesController.js");

// CRUD

router.get('/', async (req, res) => {
    try {
        res.json(await moviesController.findTopRated());
    }catch (err) {
        return res.status(500).json({
        message: err.message
        });
    }
});

//Búsqueda de película por ID
router.get('/:id', async (req, res)=> {
    try {
        let id = req.params.id;
        res.json(await moviesController.searchById(id));
        
    } catch (err) {
        return res.status(500).json({
            mensaje: err.message
        })
    }
})

// Getting movies by title

router.get('/:title', async (req, res)=> {
    try {
        let title = req.params.title;
        res.json(await moviesController.searchById(title));
    } catch (err) {
        return res.status(500).json({
            mensaje: err.message
        })
    }
})

router.get('/search/genre/:code', async (req, res)=> {
    try {
        let code = req.params.code;
        res.json(await moviesController.searchByGenre(code));
        
    } catch (err) {
        return res.status(500).json({
            mensaje: err.message
        })
    }
})


module.exports = router;
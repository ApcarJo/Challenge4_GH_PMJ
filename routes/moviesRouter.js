const router = require("express").Router();
const moviesController = require("../controller/moviesController");

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


module.exports = router;
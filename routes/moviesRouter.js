const router = require("express").Router();
const moviesController = require("../controllers/moviesController");

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



module.exports = router;
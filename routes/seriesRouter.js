const router = require("express").Router();
const seriesController = require("../controllers/seriesController");

// CRUD
// GET

router.get("/search/:id", async (req,res) =>{
    try{
        let id = req.params.id;
        res.json(await seriesController.searchById(id));
    }catch (err){
        return res.status(500).json({
            message: err.message
    });
    }
});

module.exports = router;
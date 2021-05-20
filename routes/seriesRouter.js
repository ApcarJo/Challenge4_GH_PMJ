const router = require("express").Router();
const seriesController = require("../controller/seriesController.js");

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

router.get('/onTheAir7', async (req,res)=> {
    try {
        res.json(await seriesController.findOnTheAir7())
    } catch (err) {
        return res.status(500).json({
            message: err.message
        })
    }
})



module.exports = router;
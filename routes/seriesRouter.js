const router = require("express").Router();
const seriesController = require("../controllers/seriesController.js");

// CRUD
// GET

router.get("/id/:id", async (req,res) =>{
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

router.get("/title/:tvTitle", async (req,res) => {
    try {
        let tvTitle = req.params.tvTitle;
        tvTitle = tvTitle.charAt(0).toUpperCase() + tvTitle.slice(1);
        res.json(await seriesController.searchByTvTitle(tvTitle));
    } catch (err) {
        return res.status(500).json({
            message: err.message
        });
    }
});



module.exports = router;
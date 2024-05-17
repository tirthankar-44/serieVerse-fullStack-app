const express = require('express');

const Series = require('../model/serie.js');

const router = express.Router();
router.use(express.json());

router.get('/', async (req, res) => {
    try{
        const series = await Series.find({
            type: "Live Action"
        }).
        sort({rating: -1});
        res.status(200).json(series);
    }
    catch(err){
        res.status(500).json({msg: err.message});
    }
});

router.get('/:genre', async (req, res) => {
    try{
        const series = await Series.find({
            type: "Live Action",
            genre: req.params.genre
        }).
        sort({rating: -1});
        res.status(200).json(series);
    }
    catch(err){
        res.status(500).json({msg: err.message});
    }
});

module.exports = router;
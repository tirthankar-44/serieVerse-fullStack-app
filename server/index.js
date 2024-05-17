const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

const Series = require('./model/serie.js');
const animationRouter = require('./routes/animationRoute.js');
const liveActionRouter = require('./routes/liveActionRoute.js');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI;

app.use(cors());
app.use(express.json());

mongoose.connect(MONGODB_URI)
    .then(() => {
        console.log('Connected to MongoDB');
        app.listen(PORT, (err) => {
            if(err) console.log(err.message);
            else console.log('Server running...');
        })
    })
    .catch((err) => console.log(err.message));


app.get('/', async (req, res) => {
    res.send('<h1>Helloo!!</h1>');
});

// Get ALL Series
app.get('/all', async (req, res) => {
    try{
        const series = await Series.find()
        .sort({rating: -1});
        res.status(200).json(series);
    }
    catch(err){
        res.status(500).json({msg: err.message});
    }
});

// Get ALL animation series, including all genres
app.use('/animation', animationRouter);

// Get ALL Live Action series, including all genres
app.use('/live-action', liveActionRouter);


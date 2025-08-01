require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const petRouter = require('./Routes/PetRoute')
const AdoptFormRoute = require('./Routes/AdoptFormRoute')
const AdminRoute = require('./Routes/AdminRoute')
const cors = require('cors');

const app = express();

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(petRouter)
app.use('/form', AdoptFormRoute)
app.use('/admin', AdminRoute)

mongoose.connect(process.env.mongooseURL)
    .then(() => {
        console.log('Connected to DB');
        // const PORT = 4000;
        app.listen(process.env.PORT || 8000, () => {
            console.log(`Listening on port ${process.env.PORT || 8000}`);
        })
    })
    .catch((err) => {
        console.error(err);
    })

module.exports = app;
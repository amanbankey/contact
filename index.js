const express = require('express');
const cors = require('cors');

const app = express();
require('dotenv').config();

const contactRoute = require('./routes/contactRoute')
const PORT = process.env.PORT || 5000;

app.use(cors());

app.use(express.json());
app.use('/', contactRoute)

app.listen(PORT, () => {
    console.log(`Server start running at PORT ${PORT}`)
})
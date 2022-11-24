const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}))

const dbURL = 'mongodb+srv://Shaheer:abcd1234@test.kdydufa.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true})
.then((result) => app.listen(3000))
.catch((err => console.log(err)))

app.use('/api/users', require('./routes/usersRoutes'))


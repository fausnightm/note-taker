const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

const fs = require('fs')
const path = require('path');

const routesApi = require('./routes/routesApi')
const routesHtml = require('./routes/routesHtml')

app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));
app.use(express.json());
app.use('/api', routesApi);
app.use('/', routesHtml);


app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});  
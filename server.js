const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

const fs = require('fs')
const path = require('path');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname));


app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});  
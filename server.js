// default
const express = require("express");
const bodyParser = require("body-parser");


const app = express();
app.set('trust proxy', 1);

// app.use(rateLimiterMiddleware);

const port = process.env.port || 6000;

// Middlewares
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}));

// for deploy only
const path = require("path");
app.use(express.static(path.resolve(__dirname,"./build/html")));

// Import Routes

app.get('*', function (request, response){
    response.sendFile(path.resolve(__dirname, './build/html', 'index.html'))
})

app.listen(port, () => console.log(`Listening on port ${port}`));
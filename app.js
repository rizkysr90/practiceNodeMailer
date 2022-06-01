require('dotenv').config();
const express = require('express');
const app = express();
const morgan = require('morgan');
const route = require('./src/routes');

app.use(morgan('tiny'));
app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use('/',route);

/* Error handler middleware */
app.use((err, req, res, next) => {
    console.log(err);
    const statusCode = err.statusCode || 500;
    const statusMessage = err.message || 'Internal Server Error';
    res.status(statusCode).json({
        error : {
            message : statusMessage,
            code : statusCode,
        }
    });
    
});

module.exports = app

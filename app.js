const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const heroesRouter = require('./src/routes/api/heroesRouter');
const { errorHandler } = require('./src/helpers/apiHelpers');

const app = express();

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short';

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

app.use('/api/superheroes', heroesRouter);

app.use(errorHandler);

module.exports = app;
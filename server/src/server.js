const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const { PORT } = require('./config');
const db = require('./db');

const app = express();
app.disable('x-powered-by');
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

const universityRouter = require('./resources/university/university.router');
app.use('/universities', universityRouter);

const professorRouter = require('./resources/professor/professor.router');
app.use('/professors', professorRouter);

const startServer = async () => {
    await db.connect();
    app.listen(PORT, () => {
        console.log(`Express API is ready and listening on port :${PORT}`);
    });
}

startServer();

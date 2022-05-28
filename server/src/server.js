const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const app = express();
app.disable('x-powerd-by');
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.get("/", async (req, res) => {
    res.status(200).send({ saludo: "hi!" });
});

app.listen(9000, () => {
    console.log("Express API is ready and listening on :9000");
});
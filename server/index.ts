import express from 'express';

const port = 4000;
const app = express();

app.use('/', (req, res) => {
    res.send("Hello server!")
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
});

module.exports = app;

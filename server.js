const express = require('express');
const app = express();

const PORT = process.env.PORT || 8080;
app.use(express.static(__dirname + '/dist/full-fastqueue-front'));

app.get('/*', (req, res) => {
    res.sendFile(__dirname + '/dist/full-fastqueue-front/index.html');
});

app.listen(PORT, () => {
    console.log('Servidor front iniciado na porta ' + PORT);
})
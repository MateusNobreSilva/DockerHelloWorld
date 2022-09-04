const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Olá minha Imagem')
});

app.listen(port, () => {
    console.log(`Exexutando na porta: ${port}`)
})
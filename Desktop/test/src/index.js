const express = require('express');
const app = express();

const PORT = 9000;

app.get('/', (request,response) => {
    response.json({message: 'Hello world'});
});

app.listen(PORT, () => {
    console.log(`the server is run on ${PORT}`);
})
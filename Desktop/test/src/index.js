const express = require('express');
const app = express();

const PORT = 9000;

app.use(express.json());

app.get('/', (request,response) => {

    const { name } = request.body;

    response.json({message: `Hello ${name}`});
});

app.listen(PORT, () => {          
    console.log(` Server is run on ${PORT}`);
})
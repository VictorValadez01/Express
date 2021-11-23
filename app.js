const express = require('express');
const port = 3002;
//para permitir el manejo de POST Y PUT
const bodyParser =  require ('body-parser');
const routes = require('./routes/routes');
const app = express();

//usar Node.js body parsing middleware
app.use(express.json());
app.use(express.urlencoded({
    extended: true,
}));
routes(app);

//inicia el servidor
const server = app.listen(port, (error)=>{
    if(error) return console.log('Error : ${error}');

    console.log('El servidor escucha en el puerto ${server.address().port}');
});
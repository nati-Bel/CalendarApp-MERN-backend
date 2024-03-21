const express = require('express');
require('dotenv').config();

console.log(process.env)

//Crear el servidor de express
const app= express();

//Escuchar peticiones
app.listen( process.env.PORT, ()=>{
    console.log(`Server running in port ${4000}`);
});


//Directorio publico
app.use( express.static('public'));

//Lectura y parseo del body
app.use( express.json());

//Rutas
app.use('/api/auth', require('./routes/auth'));
//TODO :CRUD : Eventos
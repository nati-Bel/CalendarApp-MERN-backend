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


//Rutas
// app.get('/', (req, res) => {
    
//     res.json({
//         ok:true
//     })

// });
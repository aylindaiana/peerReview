const express = require('express');
const app = express();
const path = require('path');
//const path = require('path')
let part = 3000;
//app.use(express.static('public')); // para acceder a sus archivos sin especificar la carpeta, o sea que queda estatico (se debe agregar antes de todos los links)
app.use(express.static(path.join(__dirname,'public')));

// app.get('*',(req,res))
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './views/home.html'))
})
app.listen(part, ()=> console.log('servidor recorrido'))

// control + k + c   // Comentar texto seleccionado
// control + k + u // Des comentar texto comentado

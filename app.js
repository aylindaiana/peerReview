const express = require('express');
const app = express();
const path = require('path');
const mainRouter = require('./routes/main');

app.set('view engine', 'ejs');
app.set('views', (path.resolve('views')));

let part = 3000;
//app.use(express.static('public')); // para acceder a sus archivos sin especificar la carpeta, o sea que queda estatico (se debe agregar antes de todos los links)
app.use(express.static(path.resolve(__dirname,"./public")));

app.use('/', mainRouter)
// app.get('*',(req,res))
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, './views/home.html'));
});
app.post("/", (req, res) => {
    res.sendFile(__dirname, "./views/home.html");
});
app.get("/login", (req, res) => {
    res.sendFile(__dirname, "./views/login.html")
})
app.get("/register", (req, res) =>{
    res.sendFile(path.join(__dirname, "./views/register.html"));
});
app.post("/register", (req, res) =>{
    res.sendFile(__dirname, "./views/register.html");
});
app.get("/login", (req, res) =>{
    res.sendFile(path.join(__dirname, "./views/login.html"));
});
app.post("/login", (req, res) =>{
    res.sendFile(__dirname, "./views/login.html");
});

// app.listen(part, ()=> console.log('servidor recorrido'))
app.listen(process.env.PORT || 3000, function(){
   console.log ('Servidor corriendo en el puerto 3000')
})  

// control + k + c   // Comentar texto seleccionado
// control + k + u // Des comentar texto comentado


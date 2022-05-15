const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController')

router.get('/', mainController.index);
router.get('/detalle/:id', mainController.detail)
router.get('/register');
// app.get("/", (req, res) => {
//     res.sendFile(path.join(__dirname, './views/home.html'));
// }); 

// app.get("/register", (req, res) =>{
//     res.sendFile(path.join(__dirname, "./views/register.html"));
// });

module.exports =  router;
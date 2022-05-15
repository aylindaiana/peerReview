let productos = [
{
    id: 1,
    nombre:'Cafetera Moulinex',
    precio: '$6.700',
    descuento: '40%',
    imagen: 'img-cafetera-moulinex.jpg'
    },
    {
    id:2,
    nombre: 'MacBook Pro 2019',
    precio: '$230.000',
    descuento: '20%',
    imagen: 'img-macbook-pro-2019.jpg'
    },
    {
        id:3,
        nombre: 'Samsung Galaxy s10',
        precio: '$70.500',
        descuento: '10%',
        imagen: 'img-samsung-galaxy-s10.jpg'
    },
    {
        id:4,
        nombre: 'SmartTv Samsung 43',
        precio: '$23.200',
        descuento: '5%',
        imagen:'img-tv-samsung-smart.jpg'
    }
]

const mainController = {

    index : (req, res) => {

        res.render('home', {productos:productos})
    },
    detail: (req, res) => {
    
        let detalleProducto = productos.find(producto => producto.id == req.params.id);

            res.render('detail', {producto: detalleProducto} )
    }
}

module.exports = mainController;
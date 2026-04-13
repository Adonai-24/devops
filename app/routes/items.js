const express = require('express')
const router = express.Router()

const productos = [
  {
    id: 1,
    nombre: 'Laptop Gamer RTX Pro',
    precio: 1800,
    imagen: '/assets/img/products/pexels-ekaterina-bolovtsova-6372816.webp',
    descripcion: 'Rendimiento extremo para gaming.',
    detalles:
      'Laptop con RTX 4060, Intel i7, 16GB RAM y 1TB SSD. Ideal para juegos AAA, streaming y multitarea sin interrupciones.'
  },
  {
    id: 2,
    nombre: 'PC Gamer Elite',
    precio: 2200,
    imagen: '/assets/img/products/pexels-jorge-david-arley-campos-3570916-5569379.webp',
    descripcion: 'Potencia de escritorio sin límites.',
    detalles:
      'PC con Ryzen 7, RTX 4070, 32GB RAM y SSD NVMe. Diseñada para gaming en ultra y creación de contenido.'
  },
  {
    id: 3,
    nombre: 'Teclado Mecánico RGB Pro',
    precio: 130,
    imagen: '/assets/img/products/pexels-bertellifotografia-32755763.webp',
    descripcion: 'Precisión y respuesta inmediata.',
    detalles:
      'Teclado mecánico con switches rojos, iluminación RGB personalizable y estructura metálica.'
  },
  {
    id: 4,
    nombre: 'Mouse Gamer Ultra DPI',
    precio: 90,
    imagen: '/assets/img/products/pexels-atahandemir-28779692.webp',
    descripcion: 'Control total en cada movimiento.',
    detalles:
      'Mouse con hasta 20000 DPI, botones programables y diseño ergonómico para largas sesiones.'
  },
  {
    id: 5,
    nombre: 'Monitor Gamer 27" 165Hz',
    precio: 350,
    imagen: '/assets/img/products/pexels-rdne-7915357.webp',
    descripcion: 'Fluidez y ventaja competitiva.',
    detalles:
      'Monitor Full HD/2K, 165Hz, 1ms de respuesta. Ideal para shooters y juegos competitivos.'
  },
  // {
  //   id: 6,
  //   nombre: 'Headset Gamer 7.1 RGB',
  //   precio: 110,
  //   imagen: '/assets/img/prod6.jpg',
  //   descripcion: 'Inmersión total en el juego.',
  //   detalles:
  //     'Audio surround 7.1, micrófono con cancelación de ruido y diseño cómodo para largas sesiones.'
  // },
  // {
  //   id: 7,
  //   nombre: 'Silla Gamer Pro Ergonómica',
  //   precio: 250,
  //   imagen: '/assets/img/prod7.jpg',
  //   descripcion: 'Comodidad para largas horas.',
  //   detalles:
  //     'Silla reclinable con soporte lumbar y cervical, materiales premium y diseño gamer.'
  // },
  // {
  //   id: 8,
  //   nombre: 'Escritorio Gamer RGB',
  //   precio: 400,
  //   imagen: '/assets/img/prod8.jpg',
  //   descripcion: 'Tu setup perfecto.',
  //   detalles:
  //     'Escritorio amplio con iluminación RGB, soporte para monitor y estructura resistente.'
  // },
  // {
  //   id: 9,
  //   nombre: 'Mousepad XL RGB',
  //   precio: 45,
  //   imagen: '/assets/img/prod9.jpg',
  //   descripcion: 'Superficie amplia y precisa.',
  //   detalles: 'Mousepad extendido con iluminación RGB y base antideslizante.'
  // },
  // {
  //   id: 10,
  //   nombre: 'Micrófono Streaming Pro',
  //   precio: 140,
  //   imagen: '/assets/img/prod10.jpg',
  //   descripcion: 'Calidad de audio profesional.',
  //   detalles:
  //     'Micrófono condensador USB con filtro anti-pop y soporte incluido.'
  // },
  // {
  //   id: 11,
  //   nombre: 'Webcam Full HD Streaming',
  //   precio: 85,
  //   imagen: '/assets/img/prod11.jpg',
  //   descripcion: 'Imagen clara para streaming.',
  //   detalles: 'Resolución 1080p, autoenfoque y micrófono integrado.'
  // },
  // {
  //   id: 12,
  //   nombre: 'Router Gaming WiFi 6',
  //   precio: 200,
  //   imagen: '/assets/img/prod12.jpg',
  //   descripcion: 'Conexión sin lag.',
  //   detalles:
  //     'Router de alta velocidad con baja latencia, ideal para gaming online.'
  // },
  // {
  //   id: 13,
  //   nombre: 'Tarjeta Gráfica RTX 4060',
  //   precio: 650,
  //   imagen: '/assets/img/prod13.jpg',
  //   descripcion: 'Gráficos de última generación.',
  //   detalles:
  //     'GPU con Ray Tracing y DLSS para máximo rendimiento en juegos modernos.'
  // },
  // {
  //   id: 14,
  //   nombre: 'SSD NVMe 1TB Gamer',
  //   precio: 150,
  //   imagen: '/assets/img/prod14.jpg',
  //   descripcion: 'Carga ultra rápida.',
  //   detalles: 'SSD de alta velocidad para reducir tiempos de carga en juegos.'
  // },
]

router.get('/', (req, res) => {
  res.render('items', { productos })
})

router.get('/:id', (req, res) => {
  const producto = productos.find((p) => p.id == req.params.id)
  res.render('detail', { producto })
})

module.exports = router

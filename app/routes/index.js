const express = require('express')
const router = express.Router()

const actividades = [
  {
    id: 1,
    nombre: 'Actividad 1',
    descripcion:
      'Implementación de Infraestructura Segura en Google Cloud (VPC & Bastion Host)'
  },
  {
    id: 2,
    nombre: 'Actividad 2',
    descripcion: 'Implementación de SAST con SonarQube y GitHub Actions'
  }
]

router.get('/', (req, res) => {
  res.render('index', { actividades })
})

module.exports = router

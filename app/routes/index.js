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
  },
  {
    id: 3,
    nombre: 'Actividad 3',
    descripcion: 'Implementación de Pipeline CI/CD con Filtros de Calidad'
  },
]

router.get('/', (req, res) => {
  res.render('index', { actividades })
})

module.exports = router

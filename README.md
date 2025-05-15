# 🚗 Car Dealership

¡Bienvenido al proyecto **Car Dealership**! 🚙✨

Este proyecto es una API RESTful desarrollada con [NestJS](https://nestjs.com/) 🐦, creada como parte del curso práctico de **devtalles** dictado por Fernando Herrera. El objetivo es aprender y practicar los conceptos fundamentales de NestJS en un entorno realista, simulando la gestión de un concesionario de autos.

---

## 📋 Descripción

La aplicación permite gestionar información relacionada con vehículos 🚘, incluyendo operaciones CRUD (crear, leer, actualizar y eliminar) y otras funcionalidades típicas de una API moderna. El proyecto está estructurado siguiendo las mejores prácticas recomendadas por NestJS.

## ✨ Características principales

- 🧩 Arquitectura modular basada en NestJS
- 🛣️ Uso de controladores, servicios y DTOs
- 🛡️ Validación de datos con `class-validator` y `class-transformer`
- 🆔 Uso de UUID para identificadores únicos
- 🧪 Pruebas unitarias y de integración con Jest

## ⚙️ Requisitos previos

- 🟢 Node.js (v18 o superior recomendado)
- 📦 npm (v9 o superior)

## 🚀 Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/29dalfonzo/car-dealership.git
   cd car-dealership
   ```
2. Instala las dependencias:
   ```bash
   npm install
   ```

## 🏁 Uso

- Para iniciar el servidor en modo desarrollo:
  ```bash
  npm run start:dev
  ```
- Para compilar y ejecutar en producción:
  ```bash
  npm run build
  npm run start:prod
  ```
- Para ejecutar las pruebas:
  ```bash
  npm run test
  ```

## 🗂️ Estructura del proyecto

```
car-dealership/
├── src/
│   ├── main.ts
│   ├── app.module.ts
│   └── ...
├── test/
├── package.json
├── README.md
└── ...
```

- `src/`: Código fuente principal de la aplicación.
- `test/`: Pruebas unitarias y de integración.
- `package.json`: Dependencias y scripts del proyecto.

## 👨‍🏫 Autor

Curso de devtalles dictado por Fernando Herrera.

---

> 📚 Proyecto realizado con fines educativos para practicar NestJS.

---
title: UVfit, app de salud y entrenamiento
summary: Una app en React Native para registrar entrenamiento, alimentación y sueño. Sincroniza la actividad desde Android Health Connect, y su backend en FastAPI maneja la autenticación con JWT.
stack: [TypeScript, React Native, Expo, SQLite, FastAPI, SQLAlchemy, Azure, GitHub Actions]
repo: https://github.com/thetygerpotatto/uvfit
order: 5
---

## Problema
Los estudiantes que quieren mejorar sus hábitos terminan repartidos entre apps distintas para ejercicio, comidas y sueño. Queríamos una sola app que reuniera las tres cosas y aprovechara los datos que el teléfono ya recoge.

## Enfoque
- **App móvil** en React Native + Expo con navegación basada en archivos (Expo Router). Tiene pestañas de Entrenamiento, Comida, Sueño, Estadísticas y Ajustes.
- **Integración con Android Health Connect** para importar pasos y actividad automáticamente.
- **Funciona sin conexión:** los registros diarios se guardan en el dispositivo con expo-sqlite, y un **gráfico de radar** resume entrenamiento, sueño y alimentación.
- **Backend** ([uvfitServer](https://github.com/thetygerpotatto/uvfitServer)) en **FastAPI + SQLAlchemy**: registro e inicio de sesión con contraseñas cifradas con bcrypt y autenticación **JWT**, además de sincronización del perfil.
- **CI/CD:** un pipeline de GitHub Actions desplegaba la API en **Azure App Service** con una base de datos Azure SQL.

## Resultado
Una app Android funcional con backend en la nube, hecha en equipo en la Universidad del Valle. Construí la mayoría de las pantallas, el almacenamiento local y el backend. Después reforcé la seguridad de la API: las credenciales pasaron a variables de entorno, el JWT solo lleva el correo del usuario y se eliminaron los endpoints de depuración. *(El despliegue en Azure ya fue retirado; el backend corre localmente.)*

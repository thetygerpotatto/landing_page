---
title: UVplace, lienzo de píxeles en tiempo real
summary: Un lienzo colaborativo multijugador inspirado en r/place de Reddit. Cada píxel que alguien pinta aparece al instante para todos los jugadores conectados mediante WebSockets.
stack: [Python, Flask, Flask-SocketIO, SQLite, JavaScript]
repo: https://github.com/thetygerpotatto/uvplace
image: /projects/uvplace.png
imageAlt: Logo de UVplace
order: 4
---

## Problema
Construir un tablero de dibujo compartido y persistente donde muchas personas pintan al mismo tiempo y todas ven los cambios en el momento, sin recargar la página.

## Enfoque
- Backend en **Flask** con el patrón application factory y blueprints (`auth`, `game`).
- **Flask-SocketIO** para actualizaciones en tiempo real: cada cambio de píxel se guarda y luego se transmite a todos los clientes como un evento `map-update`.
- El **tablero de 100×100 se guarda en SQLite** y se carga cuando un jugador se conecta.
- **Cuentas de usuario** con contraseñas cifradas (hash) y autenticación por sesión.
- Frontend en JavaScript puro que dibuja el lienzo y aplica las actualizaciones entrantes.

## Resultado
Una aplicación multijugador funcional construida en la Universidad del Valle. Proyecto en equipo de 2 personas: construí el backend, la capa de tiempo real y la mayor parte del frontend.

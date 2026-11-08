---
title: UVplace, a real-time pixel canvas
summary: A multiplayer collaborative canvas inspired by Reddit's r/place. Every pixel a user paints shows up instantly for all connected players over WebSockets.
stack: [Python, Flask, Flask-SocketIO, SQLite, JavaScript]
repo: https://github.com/thetygerpotatto/uvplace
image: /projects/uvplace.png
imageAlt: UVplace logo
order: 4
---

## Problem
Build a shared, persistent drawing board where many users paint at the same time and everyone sees changes as they happen, without refreshing the page.

## Approach
- **Flask** backend using the application factory and blueprints (`auth`, `game`).
- **Flask-SocketIO** for real-time updates: each pixel change is saved and then broadcast to every client as a `map-update` event.
- The **100×100 board is stored in SQLite** and loaded when a player connects.
- **User accounts** with hashed passwords and session-based authentication.
- A vanilla JavaScript frontend that renders the canvas and applies incoming updates.

## Result
A working multiplayer app built at Universidad del Valle. Team project of 2: I built the backend, the real-time layer and most of the frontend.

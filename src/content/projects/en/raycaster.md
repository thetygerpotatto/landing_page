---
title: Raycasting engine in C
summary: A Wolfenstein-style 3D renderer written from scratch in C, with grid ray traversal, texture mapping, fisheye correction and collision detection.
stack: [C, raylib, Make, Linear algebra]
repo: https://github.com/thetygerpotatto/raycaster
image: /projects/raycaster.png
imageAlt: First-person view of textured brick walls, with a minimap showing the cast rays
order: 1
---

## Problem
I wanted to understand how early 3D games produced a convincing first-person view on hardware with no GPU. The best way to learn it was to build the whole renderer myself, without a game engine.

## Approach
- **raylib only for the window and drawing rectangles.** Ray traversal, projection, texturing and collision are all my own C code.
- **Grid traversal:** each ray jumps straight to the next vertical or horizontal grid line (snapping to whichever comes first) instead of moving forward in tiny steps.
- **Fisheye correction:** wall height comes from the *perpendicular* distance to the camera plane, computed as a dot product with the view direction.
- **Texture mapping:** the exact hit point on the wall picks the texture column, and screen height picks the row. Walls can also have a different solid color per side.
- **Delta-time movement**, collision detection, distance shading, and a live minimap that draws every ray.
- Redraws only when the player moves.

## Result
A real-time first-person view (60 FPS target) in about 400 lines of C. Along the way I dealt with floating-point edge cases (rays landing exactly on grid corners), perspective math, and keeping a render loop cheap.

---
title: Motor de raycasting en C
summary: Un renderizador 3D estilo Wolfenstein escrito desde cero en C, con recorrido de rayos por cuadrícula, texturas, corrección de ojo de pez y colisiones.
stack: [C, raylib, Make, Álgebra lineal]
repo: https://github.com/thetygerpotatto/raycaster
image: /projects/raycaster.png
imageAlt: Vista en primera persona de muros de ladrillo con texturas y un minimapa con los rayos trazados
order: 1
---

## Problema
Quería entender cómo los primeros juegos 3D lograban una vista en primera persona convincente en hardware sin GPU. La mejor forma de aprenderlo era construir todo el renderizador yo mismo, sin un motor de juegos.

## Enfoque
- **raylib solo para la ventana y para dibujar rectángulos.** El recorrido de rayos, la proyección, las texturas y las colisiones son código C propio.
- **Recorrido por cuadrícula:** cada rayo salta directamente a la siguiente línea vertical u horizontal de la cuadrícula (la que esté más cerca) en lugar de avanzar en pasos diminutos.
- **Corrección de ojo de pez:** la altura del muro se calcula con la distancia *perpendicular* al plano de la cámara, usando el producto punto con la dirección de vista.
- **Texturas:** el punto exacto de impacto en el muro elige la columna de la textura y la altura en pantalla elige la fila. Los muros también pueden tener un color sólido distinto por cada lado.
- **Movimiento con delta time**, colisiones, sombreado por distancia y un minimapa en vivo que dibuja cada rayo.
- Solo se redibuja cuando el jugador se mueve.

## Resultado
Una vista en primera persona en tiempo real (objetivo de 60 FPS) en unas 400 líneas de C. En el camino resolví casos límite de punto flotante (rayos que caen justo en esquinas de la cuadrícula), las matemáticas de la perspectiva y cómo mantener barato el ciclo de renderizado.

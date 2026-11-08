---
title: Intérprete de gramáticas formales en C
summary: Una herramienta interactiva para definir una gramática formal, comprobar si una palabra pertenece a su lenguaje y generar palabras, construida sobre estructuras de datos propias en C.
stack: [C, Memoria dinámica, Recursión, Make]
repo: https://github.com/thetygerpotatto/PMD
order: 3
---

## Problema
Proyecto de Matemáticas Discretas: un programa que recibe una gramática formal G = (V, T, S, P), decide si una palabra pertenece al lenguaje que genera G y lista palabras de ese lenguaje.

## Enfoque
- Escrito en **C puro, sin librerías externas**, así que escribí las estructuras de datos yo mismo:
  - `d_string`: una cadena dinámica con agregar, insertar, eliminar, buscar y concatenar, gestionada a mano con `malloc`/`realloc`.
  - `set`: un conjunto dinámico de símbolos para el vocabulario y los símbolos terminales.
  - `ruleset`: las reglas de producción.
- **Búsqueda recursiva de derivaciones** para comprobar pertenencia y generar el lenguaje, con **límite de recursión y de ramificación** para que las gramáticas con ciclos no se cuelguen ni agoten la memoria.
- Interfaz de menús para ingresar y editar cada parte de la gramática.
- La parte 2 del proyecto, **FiniteCoffe**, modela una máquina de café como un autómata finito en C++.

## Resultado
Un intérprete funcional para gramáticas definidas por el usuario. Construirlo me dio práctica real con el manejo de memoria, el control de punteros y el diseño de APIs pequeñas y reutilizables en C.

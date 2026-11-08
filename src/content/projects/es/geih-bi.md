---
title: Plataforma BI del mercado laboral (GEIH del DANE)
summary: Pipeline ETL, data warehouse en MongoDB y dashboard con roles que convierte 3,4 M de registros de la Gran Encuesta Integrada de Hogares en indicadores del mercado laboral.
stack: [Python, pandas, PyArrow, MongoDB, Streamlit, Plotly, Docker, pytest]
repo: https://github.com/thetygerpotatto/GEIH_BI
order: 2
---

## Problema
El DANE publica la GEIH como archivos ZIP mensuales en bruto. Los datos vienen con formatos inconsistentes, nombres de archivo mal codificados, ZIP anidados y separadores que cambian entre años. Los analistas necesitan cifras de desempleo y ocupación limpias y confiables que sigan la metodología oficial, y necesitan explorarlas sin escribir código.

## Enfoque
- **Pipeline ETL** con pandas y PyArrow:
  - **Extracción:** lee 4 años de ZIP mensuales (incluidos los anidados), encuentra cada módulo de la encuesta aunque su nombre tenga tildes dañadas o espacios no separables, detecta el separador del CSV y lee solo las columnas necesarias.
  - **Transformación:** une 4 módulos de la encuesta por persona, tipa los campos, elimina duplicados y deriva rango de edad, grupo educativo, rama de actividad e informalidad.
  - **Validación:** comprueba identidades contables (fuerza de trabajo = ocupados + desocupados) y que las tasas estén en rangos plausibles.
- **Data warehouse en esquema estrella sobre MongoDB:** una colección de hechos con ~3,4 M de registros persona-mes, 10 dimensiones y un cubo mensual preagregado. Las cargas son idempotentes y cada ejecución queda registrada.
- **Dashboard en Streamlit + Plotly** con **acceso por roles** (administrador, analista, gerente). Todas las tasas se ponderan con el factor de expansión oficial.
- **82 pruebas automatizadas** (unitarias, de integración y funcionales) con cobertura. MongoDB corre en Docker Compose.

## Resultado
Con un solo comando se pasa de los ZIP del gobierno a un warehouse consultable y un dashboard. Los indicadores son reproducibles y están validados contra la metodología del DANE. *(En progreso: los modelos de predicción vienen después.)*

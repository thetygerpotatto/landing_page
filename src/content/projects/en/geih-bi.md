---
title: Labor-market BI platform (DANE GEIH)
summary: An ETL pipeline, MongoDB data warehouse and role-based dashboard that turns 3.4M records of Colombia's national household survey into labor-market indicators.
stack: [Python, pandas, PyArrow, MongoDB, Streamlit, Plotly, Docker, pytest]
repo: https://github.com/thetygerpotatto/GEIH_BI
order: 2
---

## Problem
DANE (Colombia's national statistics office) publishes its household survey, the GEIH, as raw monthly ZIP files. The data comes with inconsistent formats, mis-encoded filenames, nested archives and separators that change between years. Analysts need clean, reliable unemployment and employment figures that follow the official methodology, and they need to explore them without writing code.

## Approach
- **ETL pipeline** in pandas and PyArrow:
  - **Extract:** reads 4 years of monthly ZIPs (nested ones included), finds each survey module even when its filename has broken accents or non-breaking spaces, detects the CSV separator, and reads only the columns it needs.
  - **Transform:** joins 4 survey modules per person, assigns types, removes duplicates, and derives age range, education group, economic sector and informality.
  - **Validate:** checks accounting identities (labor force = employed + unemployed) and that rates fall in plausible ranges.
- **Star-schema data warehouse in MongoDB:** a fact collection of ~3.4M person-month records, 10 dimensions, and a pre-aggregated monthly cube. Loads are idempotent and every run is logged.
- **Streamlit + Plotly dashboard** with **role-based access** (admin, analyst, manager). Every rate is weighted by the official expansion factor.
- **82 automated tests** (unit, integration, functional) with coverage. MongoDB runs in Docker Compose.

## Result
One command takes raw government ZIPs to a queryable warehouse and dashboard. The indicators are reproducible and validated against DANE's methodology. *(In progress: forecasting models come next.)*

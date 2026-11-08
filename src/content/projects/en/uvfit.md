---
title: UVfit, a health & fitness app
summary: A React Native app for tracking training, nutrition and sleep. It syncs activity from Android Health Connect, and its FastAPI backend handles JWT authentication.
stack: [TypeScript, React Native, Expo, SQLite, FastAPI, SQLAlchemy, Azure, GitHub Actions]
repo: https://github.com/thetygerpotatto/uvfit
order: 5
---

## Problem
Students who want to build healthier habits end up spread across separate apps for workouts, meals and sleep. We wanted one app that brings all three together and pulls in data the phone already collects.

## Approach
- **Mobile app** in React Native + Expo with file-based navigation (Expo Router). It has tabs for Training, Food, Sleep, Stats and Settings.
- **Android Health Connect integration** to import steps and activity automatically.
- **Offline-first** daily logs stored on the device with expo-sqlite, plus a **radar chart** that summarizes training, sleep and nutrition.
- **Backend** ([uvfitServer](https://github.com/thetygerpotatto/uvfitServer)) in **FastAPI + SQLAlchemy**: registration and login with bcrypt hashing and **JWT** auth, plus profile sync.
- **CI/CD:** a GitHub Actions pipeline deployed the API to **Azure App Service** with an Azure SQL database.

## Result
A working Android app with a cloud backend, built by a team at Universidad del Valle. I built most of the app's screens, its local storage and the backend. Later I hardened the API: credentials moved to environment variables, the JWT carries only the user's email, and debug endpoints are gone. *(The Azure deployment has since been retired; the backend runs locally.)*

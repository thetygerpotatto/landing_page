---
title: Formal grammar interpreter in C
summary: An interactive tool to define a formal grammar, test whether a word belongs to its language and generate words from it, built on hand-written C data structures.
stack: [C, Dynamic memory, Recursion, Make]
repo: https://github.com/thetygerpotatto/PMD
order: 3
---

## Problem
Discrete Mathematics course project: build a program that takes a formal grammar G = (V, T, S, P), decides whether a word belongs to the language G generates, and lists words of that language.

## Approach
- Written in **plain C with no external libraries**, so I wrote the data structures myself:
  - `d_string`: a growable string with append, insert, delete, find and concatenate, managed by hand with `malloc`/`realloc`.
  - `set`: a dynamic set of symbols for the vocabulary and the terminal symbols.
  - `ruleset`: the production rules.
- **Recursive derivation search** to check membership and generate the language, with a **recursion limit and a branching limit** so grammars with loops can't hang or exhaust memory.
- A menu-driven interface for entering and editing every part of the grammar.
- Part 2 of the project, **FiniteCoffe**, models a vending machine as a finite-state automaton in C++.

## Result
A working interpreter for user-defined grammars. Building it gave me hands-on practice with memory ownership, pointer bookkeeping and designing small reusable C APIs.

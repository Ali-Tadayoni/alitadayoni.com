# Explain Action

1. Read current-feature.md to understand what was implemented
2. Run `git diff main --name-only` (or appropriate base) to get list of files changed
3. Produce a deep, beginner-friendly walkthrough of what changed and why

## Output Format — ALWAYS RAW MARKDOWN

**CRITICAL:** Always emit the explanation as raw Markdown wrapped in a single fenced ` ```md ` code block so the user can copy it verbatim and read it elsewhere (in a Markdown viewer, paste into a doc, etc.). Do NOT render the explanation as inline prose — the user wants a copy-pasteable block every time.

The Markdown content inside the fence should follow this structure:

```md
# <Feature name> — What Changed and Why

## The big picture

<1–2 paragraphs on motivation and what this phase actually accomplishes.>

## Why <key decision>

<Explain the most important design choice, with the alternative considered and why it lost.>

## File-by-file walkthrough

### 1. `path/to/file`

<What changed in this file and why. Include relevant code snippets in fenced blocks.
Explain new types, signatures, validation, etc. — assume a beginner reader.>

### 2. `path/to/next/file`

<Same treatment.>

## How a request flows now (end-to-end)

<ASCII diagram or step list showing the data path through the changed code.>

## What we deliberately did _not_ do

- <Out-of-scope item 1>
- <Out-of-scope item 2>

## How we know it works

- <Build / test / lint commands run and their results.>

## TL;DR

<2–3 sentences summarizing the change.>
```

### Rules

- The whole explanation goes inside ONE outer ` ```md ` fence so the user gets a single copy target.
- Inside that fence, use nested fences (` ```go `, ` ```json `, etc.) for code snippets — Markdown handles nested fences fine when the outer fence uses 4 backticks if needed, but 3 backticks for ```md is usually sufficient since the assistant UI renders it as a code block.
- Be thorough and beginner-friendly per `context/ai-interaction.md` (user is a frontend dev with zero backend experience). Explain Go types, interfaces, panics, etc. when they appear.
- Walk from the client (frontend) inward when relevant; for backend-only phases, walk from the public API surface inward.
- End with a TL;DR.

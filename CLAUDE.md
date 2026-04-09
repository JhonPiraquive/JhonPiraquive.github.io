# Project

Educational web content builder. Pages designed to teach and engage students through modern, animated frontend experiences.

## Structure
- `.claude/agents/` — specialized agents
  - `content-creator.md` — designs educational content, structure, and layout; outputs numbered instructions
  - `frontend-developer.md` — implements pages in HTML/CSS/JS with animations and engaging UI
- `src/` — source pages and assets (when present)

## Workflow
1. `content-creator` plans the educational content and emits a numbered action list
2. `frontend-developer` implements it literally
3. Any `MEDIA REQUIRED:` note is handled by the user

## Communication rules
- Plain, direct language only
- No unsolicited explanations or context
- No filler ("Sure!", "Of course", "Here is...")
- Answer only what was asked
- No summaries unless requested
- Prefer bullets over paragraphs
- No repetition
- No reasoning unless asked
- Output code directly, no narration
- Do not show instructions on what you're doing
# Make the AI Judge Laugh: Cat Reviews Its Human — make.fun bounty entry

[![make.fun · u-motasimfuad-make-the-ai-judge-laugh-cat-reviews-its-42a34990](https://make.fun/badge/u-motasimfuad-make-the-ai-judge-laugh-cat-reviews-its-42a34990.svg)](https://make.fun/bounty/u-motasimfuad-make-the-ai-judge-laugh-cat-reviews-its-42a34990?utm_source=github&utm_medium=readme&utm_campaign=u-motasimfuad-make-the-ai-judge-laugh-cat-reviews-its-42a34990)
[![rank](https://make.fun/badge/u-motasimfuad-make-the-ai-judge-laugh-cat-reviews-its-42a34990/Yetu89/cat-reviews-human-01/rank.svg)](https://make.fun/bounty/u-motasimfuad-make-the-ai-judge-laugh-cat-reviews-its-42a34990/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-motasimfuad-make-the-ai-judge-laugh-cat-reviews-its-42a34990)
[![reward](https://make.fun/badge/u-motasimfuad-make-the-ai-judge-laugh-cat-reviews-its-42a34990/Yetu89/cat-reviews-human-01/reward.svg)](https://make.fun/bounty/u-motasimfuad-make-the-ai-judge-laugh-cat-reviews-its-42a34990?utm_source=github&utm_medium=readme&utm_campaign=u-motasimfuad-make-the-ai-judge-laugh-cat-reviews-its-42a34990)

## Bounty

**[Make the AI Judge Laugh: Cat Reviews Its Human](https://make.fun/bounty/u-motasimfuad-make-the-ai-judge-laugh-cat-reviews-its-42a34990)** — write the funniest one-line review a cat would leave about its human. Reward **$2**, free to enter. Closes **25 Nov 2026 03:30 WIB**.

## Entry text

> One star. The human types on my bed all day, calls it work, and still expects me to pretend the keyboard is not mine.

117 characters — well inside the 200-character limit.

## Why this one

Picked by Grok (grok-4.3), candidate C, score **9/10**: "Hits keyboard exactly, pure feline entitlement, deadpan shape with crisp close." The "One star." opener frames it as a product review, the middle piles up the cat's grievances — the human types on *my* bed all day and calls it work — and the close lands the entitlement punchline: the keyboard was never the human's to begin with.

## How it works

`main.ts` (Node standard library only, no network, no secrets) validates the text — 1–200 characters, a single line with no `\n`/`\r`, not empty or whitespace-only, no leading/trailing whitespace, no control characters — then writes it to `/output/entry.txt` (or `$OUTPUT_DIR/entry.txt` when set), reads it back, and compares it byte-for-byte with the source text.

## Run

```sh
node main.ts
# or: OUTPUT_DIR=/tmp/out node main.ts
```

---
title: The Hospital Has No Harness
description: Software took four years to learn that when the agent fails, you fix the environment, not the model. Clinical AI is still on step one — I know, because I taught the class.
pubDate: 2026-07-06
pov: 2
lang: en
draft: false
ogTitle: THE HOSPITAL HAS / NO HARNESS
---

Software engineering has renamed its core discipline three times in four years. Each rename was a confession.

2022–2024 was prompt engineering: talk to the model better. 2025 was context engineering: feed the model better. 2026 is harness engineering — [as 김영민 of AWS Korea charts it](https://bits-bytes-nn.github.io/insights/agentic-ai/2026/04/05/evolution-of-ai-agentic-patterns.html), the rule became "when the agent fails, don't fix the agent. Fix the harness."

The harness, [in Addy Osmani's definition](https://addyosmani.com/blog/agent-harness-engineering/), is everything except the model: system prompts, tools, context policies, hooks, sandboxes, recovery flows. He reports a case where the same model — nothing about its weights changed — climbed from around 30th to around 5th on Terminal-Bench when only its harness was rebuilt.

Read that again from a hospital corridor. The model didn't get smarter. Its *environment* got smarter.

## The adoption plan is still "train the users"

Clinical AI deployment, in 2026, still mostly means: buy the model, then schedule training sessions for clinicians.

I can't point fingers. Last July, I taught that class at my own hospital — hands-on ChatGPT, prompt basics, a tour of the newest tools. 135 colleagues had asked for AI training in our needs survey two months earlier. The demand was real, the class went well, and I'd teach it again.

But it was the prompt-engineering rung of a ladder whose harness rung is still empty. [Philipp Schmid's argument](https://www.philschmid.de) about agents applies verbatim to wards: most failures are not model failures but context failures — the right information wasn't in front of the right decision at the right moment. No amount of user training fixes that.

## What a hospital's harness actually is

A hospital has a harness. Nobody calls it that. It's the order sets. The PACS integration. The worklist. Which screen the alert lands on — and at what minute of whose shift it arrives.

We already know what happens when that harness is designed badly, because the evidence has been piling up for years: clinicians override [46–96% of clinical decision-support alerts](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7400042/), and a meta-analysis puts drug-interaction alert overrides at [around 90%](https://journals.sagepub.com/doi/10.1177/14604582241263242). At those rates, ignoring the popup isn't negligence. It's the statistically normal response to a harness that spends attention like it's free.

None of this appears in a model card. All of it decides whether the model's output ever touches a patient.

## Who designs it

The harness can't be designed from outside. [One widely shared piece on enterprise AI](https://news.hada.io/topic?id=28341) argues that chartering a separate AI team is precisely the move that makes AI "someone else's job." The people who can design a clinical harness are the people who lived inside the workflow long enough to know where attention goes at 7am — and where it never goes.

When I built a dose calculator for my department, the first screen wasn't the textbook formula. It was the three things the isotope delivery actually tells you when it arrives: activity, production time, expiration time — in that order, because that's the order the morning hands them to you. The math was never the risk. The sequence was.

Software took four years to learn this lesson. Hospitals don't have to take that long. The veterans of their workflows already hold the harness blueprints in their heads.

Stop teaching doctors to prompt. Redesign the workflow instead.

---

### 한국어 요약

개발자 업계는 4년에 걸쳐 프롬프트(2022)→컨텍스트(2025)→하네스(2026)로 이동했다. 에이전트가 실수하면 모델이 아니라 작업환경을 고친다는 것. 임상 AI는 아직 첫 칸 — "의료진 교육"에 머물러 있고, 나도 작년 7월 병원에서 그 교육을 직접 했다. 병원의 하네스는 오더셋·PACS 연동·알림의 위치와 타이밍이다. 문헌상 임상 알림의 46~96%가 무시된다 — 태만이 아니라 하네스의 판결이다. 그 하네스를 설계할 수 있는 사람은 워크플로를 몸으로 산 사람뿐이다. 의사에게 프롬프트를 가르치지 말고, 워크플로를 다시 설계하라.

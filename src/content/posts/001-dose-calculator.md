---
title: The Correct Calculator Nobody Used (At First)
description: Build Log 001 — the math was never the risk. A dose calculator, and why the first version of any clinical tool is a hypothesis about workflow.
pubDate: 2026-07-06
pov: 1
lang: en
draft: true
ogTitle: THE CORRECT CALCULATOR / NOBODY USED
---

> Build Log 001 — from 20 years inside a nuclear medicine department.

*This entry is a draft. The full version publishes once the master note's measured
facts are confirmed — no numbers appear here until they are measured.*

## Scene

Early morning in a nuclear medicine department. Doses are being prepared before the
first patients arrive. Radiopharmaceutical dosing is calculated by hand — the same
arithmetic, repeated for every patient, every day, at the hour when human attention
is weakest.

## Friction

The calculation is not hard. That's the trap. Because it's easy, it never gets
prioritized for tooling; because it's repeated under time pressure, it's exactly
where errors live. Everyone had adapted to the friction so completely they no longer
saw it. I had done it for years myself.

## Build

I built a web-based dose calculator shaped around the actual exam-day sequence — not
the textbook formula order, but the order in which information actually arrives during
morning prep. Built with LLM-assisted coding; shipped without a budget, a committee,
or a project code. It is now part of the department's daily routine.

## Lesson

The first version of any clinical tool is a hypothesis about workflow, not about math.
The math was never the risk.

**Clinical AI doesn't fail in the model. It fails at the bedside.**

---

### 한국어 요약

이른 아침 핵의학과. 방사성의약품 선량을 손으로 계산한다 — 쉬운 계산이라 아무도
도구화하지 않았고, 반복되기에 바로 거기서 오류가 난다. 나는 교과서 공식 순서가 아니라
아침 준비 중 정보가 실제로 도착하는 순서에 맞춰 웹 계산기를 만들었다. 예산도, 위원회도,
과제 코드도 없이. 지금은 부서의 일상 도구다. 임상 도구의 첫 버전은 수학이 아니라
워크플로에 대한 가설이다.

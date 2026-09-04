---
title: BASELINE
sidebar_position: 13
---

:::warning Preview Feature
Comment Script is a **preview** feature and is only available in the DAX Studio preview build. Its syntax and behavior may change before the final release.
:::

`BASELINE` captures a batch's result set and Server Timings metrics for assertions in a later batch.

## Syntax

```dax
--> BASELINE ["<name>"] [RUNS 1]
```

Names can be quoted or bare. Omit the name to use the single unnamed baseline. `RUNS` is reserved for future repeated measurements; only `RUNS 1` is currently accepted.

```dax
--> BASELINE "original"
--> CLEARCACHE
EVALUATE /* original query */
--> GO
--> CLEARCACHE
--> ASSERT TABLE BASELINE "original"
--> ASSERT DURATION <= BASELINE "original" * 1.1
EVALUATE /* candidate query */
```

The optional factor multiplies a numeric baseline before comparison. For example, `* 1.1` allows a 10% regression and `* 0.9` requires at least a 10% improvement.

Server Timings starts automatically for a baseline batch. A baseline must be captured in an earlier batch, each name can be captured only once, and a batch cannot assert against a baseline it defines itself. Baselines last for one script run.

Use [`CLEARCACHE`](/docs/features/comment-script/clearcache) consistently in every performance comparison. Use [`PREVIOUS`](/docs/features/comment-script/previous) when each query should be compared with the query immediately before it rather than a fixed named baseline.
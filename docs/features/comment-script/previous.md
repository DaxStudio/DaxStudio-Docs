---
title: PREVIOUS
sidebar_position: 14
---

:::warning Preview Feature
Comment Script is a **preview** feature and is only available in the DAX Studio preview build. Its syntax and behavior may change before the final release.
:::

`PREVIOUS` is an assertion operand that refers to the preceding batch that executed a query. DAX Studio automatically captures that batch's result set and Server Timings, so no [`BASELINE`](/docs/features/comment-script/baseline) command or name is needed.

## Syntax

```dax
--> ASSERT TABLE [UNORDERED|PARTIAL] PREVIOUS
--> ASSERT ROWCOUNT   [=|<|>|<=|>=] PREVIOUS [* <factor>]
--> ASSERT DURATION   [=|<|>|<=|>=] PREVIOUS [* <factor>]
--> ASSERT SE_CPU     [=|<|>|<=|>=] PREVIOUS [* <factor>]
--> ASSERT SE_QUERIES [=|<|>|<=|>=] PREVIOUS [* <factor>]
```

```dax
--> CLEARCACHE
EVALUATE /* version 1 */
--> GO
--> CLEARCACHE
--> ASSERT TABLE PREVIOUS
--> ASSERT DURATION <= PREVIOUS * 1.1
EVALUATE /* version 2 */
```

Command-only batches and `SHOW DEPENDENCIES` or `SHOW DIAGRAM` batches are skipped because they do not execute a query. A reference with no earlier query is an error.

Use `PREVIOUS` for progressive tuning where each version is compared with the one immediately above it. Use a named `BASELINE` when several candidates must all be compared with one fixed original.
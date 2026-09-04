---
title: RESULTS
sidebar_position: 17
---

:::warning Preview Feature
Comment Script is a **preview** feature and is only available in the DAX Studio preview build. Its syntax and behavior may change before the final release.
:::

`RESULTS` controls whether the query result grid is displayed for the run.

## Syntax

```dax
--> RESULTS ON
--> RESULTS OFF
```

Without this command, results default to `OFF` when the script contains an [`ASSERT`](/docs/features/comment-script/assert) command and `ON` when it does not. `RESULTS` explicitly overrides that default.

```dax
--> RESULTS ON
--> ASSERT ROWCOUNT > 0

EVALUATE 'Product'
```

Use `OFF` for unattended assertion scripts where only pass/fail output matters, or `ON` while investigating a failing test and you also want to inspect returned rows.
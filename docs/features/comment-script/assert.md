---
title: ASSERT
sidebar_position: 11
---

:::warning[Preview Feature]
Comment Script is a **preview** feature and is only available in the DAX Studio [preview build](/preview-downloads). Its syntax and behavior may change before the final release.
:::

`ASSERT` verifies the row count or a Server Timings metric after the batch query runs.

## Syntax

```dax
--> ASSERT ROWCOUNT   [=|<|>|<=|>=] <integer-or-reference>
--> ASSERT DURATION   [=|<|>|<=|>=] <number-or-reference>
--> ASSERT SE_CPU     [=|<|>|<=|>=] <number-or-reference>
--> ASSERT SE_QUERIES [=|<|>|<=|>=] <number-or-reference>
```

The right side can be a literal, a captured [`BASELINE`](/docs/features/comment-script/baseline), or [`PREVIOUS`](/docs/features/comment-script/previous). Baseline references can include a positive multiplication factor.

```dax
--> ASSERT ROWCOUNT = 10
--> ASSERT DURATION <= 500
--> ASSERT SE_QUERIES <= BASELINE "original"
--> ASSERT DURATION <= PREVIOUS * 1.1

EVALUATE 'Product'
```

`DURATION`, `SE_CPU`, and `SE_QUERIES` come from Server Timings. DAX Studio starts the trace automatically when a performance assertion is present. If the trace cannot start, the assertion reports an error instead of passing.

Use [`ASSERT TABLE`](/docs/features/comment-script/assert-table) to compare returned values rather than aggregate run properties. Assertion failures show the expected and actual values.
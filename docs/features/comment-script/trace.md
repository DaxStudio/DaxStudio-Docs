---
title: TRACE
sidebar_position: 8
---

:::warning Preview Feature
Comment Script is a **preview** feature and is only available in the DAX Studio preview build. Its syntax and behavior may change before the final release.
:::

`TRACE` enables or disables a DAX Studio trace for the script run.

## Syntax

```dax
--> TRACE SERVERTIMINGS ON|OFF
--> TRACE QUERYPLAN ON|OFF
--> TRACE ALLQUERIES ON|OFF
```

```dax
--> TRACE SERVERTIMINGS ON
--> TRACE QUERYPLAN ON

EVALUATE 'Product'
```

Server Timings starts automatically when a [`BASELINE`](/docs/features/comment-script/baseline), [`PREVIOUS`](/docs/features/comment-script/previous), or performance [`ASSERT`](/docs/features/comment-script/assert) needs it, so an explicit trace command is not required in those cases.
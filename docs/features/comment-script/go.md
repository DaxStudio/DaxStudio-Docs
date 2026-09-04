---
title: GO
sidebar_position: 6
---

:::warning[Preview Feature]
Comment Script is a **preview** feature and is only available in the DAX Studio [preview build](/preview-downloads). Its syntax and behavior may change before the final release.
:::

`GO` ends the current batch. This allows one document to run multiple DAX queries with different commands or `DEFINE` sections.

## Syntax

```dax
--> GO
--> GO DELAY <duration>
```

The delay is a non-negative integer followed by `ms` or `s`. A bare integer is interpreted as milliseconds.

```dax
EVALUATE ROW ( "Step", 1 )
--> GO DELAY 500ms
EVALUATE ROW ( "Step", 2 )
```

The delay occurs after the preceding query and its assertions finish, but before the next batch prepares traces, clears the cache, or runs its query. It is excluded from query timings. A trailing delayed `GO` does not wait when no later batch can run, and **Cancel Query** interrupts a delay without running later batches.
---
title: EXPORT METRICS
sidebar_position: 9
---

:::warning Preview Feature
Comment Script is a **preview** feature and is only available in the DAX Studio preview build. Its syntax and behavior may change before the final release.
:::

`EXPORT METRICS` exports VertiPaq Analyzer metrics for the connected model to a `.vpax` file. It is equivalent to using **Export Metrics** on the ribbon and also runs headlessly in `dscmd`.

## Syntax

```dax
--> EXPORT METRICS <filename>
```

The file name can be a quoted path or a bare identifier and supports [`SET` variable expansion](/docs/features/comment-script/set).

```dax
--> SET OutDir = "C:\Reports"
--> EXPORT METRICS "$(OutDir)\model-$(now:yyyy-MM-dd).vpax"
```
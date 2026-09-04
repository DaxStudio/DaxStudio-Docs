---
title: SAVEAS
sidebar_position: 15
---

:::warning[Preview Feature]
Comment Script is a **preview** feature and is only available in the DAX Studio [preview build](/preview-downloads). Its syntax and behavior may change before the final release.
:::

`SAVEAS` saves a snapshot after the batch query finishes without changing the name or modified state of the open document.

## Syntax

```dax
--> SAVEAS <filename>
```

Quote Windows paths containing a drive letter or backslashes. The path supports [`SET` variable expansion](/docs/features/comment-script/set).

| Extension | Saved content |
|---|---|
| `.daxx` | Query text, visible trace watchers, `SHOW` output, and Server Timings when active |
| Any other extension | Query text only |

```dax
--> SET OutDir = "C:\Reports"
--> TRACE SERVERTIMINGS ON
--> SAVEAS "$(OutDir)\products-$(now:yyyy-MM-dd).daxx"

EVALUATE 'Product'
```

In `dscmd`, `.dax` writes query text and `.daxx` creates a package that includes Server Timings when the script enables that trace.
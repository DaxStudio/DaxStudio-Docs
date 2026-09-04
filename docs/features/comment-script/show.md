---
title: SHOW
sidebar_position: 10
---

:::warning Preview Feature
Comment Script is a **preview** feature and is only available in the DAX Studio preview build. Its syntax and behavior may change before the final release.
:::

`SHOW` displays model analysis or opens a DAX Studio tool window.

## Syntax

```dax
--> SHOW DEPENDENCIES
--> SHOW LAST_UPDATED
--> SHOW MAX_UPDATED
--> SHOW DIAGRAM
--> SHOW METRICS
--> SHOW DELTA
```

| Variant | Behavior |
|---|---|
| `DEPENDENCIES` | Analyzes the batch DAX without executing it and displays its recursive object dependencies |
| `LAST_UPDATED` | Displays model objects and their last schema-modified timestamps |
| `MAX_UPDATED` | Displays only the object branches containing the most recent modification |
| `DIAGRAM` | Opens the Model Diagram; batch DAX filters it to referenced tables without executing the query |
| `METRICS` | Opens the VertiPaq Analyzer view |
| `DELTA` | Opens Delta Analyzer for a Direct Lake model; Delta Analyzer must also be enabled in Preview options |

Only `DEPENDENCIES` and `DIAGRAM` consume the DAX in their batch. The other variants ignore the DAX, allowing a query in the same batch to run normally.

```dax
--> SHOW DEPENDENCIES

EVALUATE
SUMMARIZECOLUMNS ( 'Date'[Year], "Sales", [Total Sales] )
```

Dependency results include model measures, columns, tables, model functions, and called query-scoped functions. `LAST_UPDATED` and `MAX_UPDATED` use `TMSCHEMA_*` metadata and skip groups that are unavailable on the connected model.
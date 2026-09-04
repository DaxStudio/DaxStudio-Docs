---
title: SET
sidebar_position: 5
---

:::warning[Preview Feature]
Comment Script is a **preview** feature and is only available in the DAX Studio [preview build](/preview-downloads). Its syntax and behavior may change before the final release.
:::

`SET` defines a reusable script variable for later command arguments.

## Syntax

```dax
--> SET <name> = <value>
```

Names are case-insensitive bare identifiers without a leading `@`. Values can be quoted strings, identifiers, integers, or decimals. Reference a variable with `$(name)`.

```dax
--> SET OutDir = "C:\Reports"
--> SET Environment = prod
--> EXPORT METRICS "$(OutDir)\metrics-$(Environment).vpax"
```

## Built-in values

| Reference | Value |
|---|---|
| `$(now:<format>)` | Local time formatted with a .NET date/time format string |
| `$(utcnow:<format>)` | UTC time formatted with a .NET date/time format string |
| `$(env:<name>)` | An environment variable |

```dax
--> SET RunDir = "C:\Reports\$(now:yyyy-MM-dd)"
--> SAVEAS "$(RunDir)\query.daxx"
```

References in a `SET` value are expanded immediately, so a captured timestamp remains unchanged for the rest of the run. A variable is visible only to commands after its definition, including commands in later batches.

Expansion applies to command string arguments, not the DAX query body. Use `$$(` to produce a literal `$(`. Undefined variables, invalid formats, self-references, and circular expansion fail the run.
---
title: PARAMETER
sidebar_position: 4
---

:::warning[Preview Feature]
Comment Script is a **preview** feature and is only available in the DAX Studio [preview build](/preview-downloads). Its syntax and behavior may change before the final release.
:::

`PARAMETER` supplies a query parameter value so that the script can run without prompting for it.

## Syntax

```dax
--> PARAMETER [STRING|INT|INT64|DOUBLE|DATETIME|BOOL|BOOLEAN] @name = <value>
```

The type is optional. A value can be a quoted string, integer, decimal, identifier, or an array enclosed in braces.

```dax
--> PARAMETER INT64 @Year = 2025
--> PARAMETER STRING @Color = "Red"
--> PARAMETER @Colors = {"Red", "Green", "White"}

EVALUATE
FILTER ( 'Date', 'Date'[Year] = @Year )
```

Array parameters can be used with `RSCustomDaxFilter`. Parameter names include the leading `@`, unlike [`SET`](/docs/features/comment-script/set) variable names.
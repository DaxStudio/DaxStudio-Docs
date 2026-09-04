---
title: TEST
sidebar_position: 16
---

:::warning Preview Feature
Comment Script is a **preview** feature and is only available in the DAX Studio preview build. Its syntax and behavior may change before the final release.
:::

`TEST` assigns a descriptive name to a script test. It does not change query execution, but identifies the test in assertion and command-line output.

## Syntax

```dax
--> TEST <name>
```

The name can be quoted or can continue unquoted to the end of the command line.

```dax
--> TEST "Sales YTD optimization"
--> ASSERT ROWCOUNT > 0

EVALUATE 'Sales'
```
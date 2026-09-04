---
title: CONNECT
sidebar_position: 2
---

:::warning[Preview Feature]
Comment Script is a **preview** feature and is only available in the DAX Studio [preview build](/preview-downloads). Its syntax and behavior may change before the final release.
:::

`CONNECT` connects without opening the connection dialog.

## Syntax

```dax
--> CONNECT SERVER <server-name>
--> CONNECT DESKTOP <report-name-or-pbix-path>
--> CONNECT SSDT <workspace-name>
```

Quote a target that contains spaces. Unquoted targets may also contain spaces and continue to the end of the command line.

| Type | Target |
|---|---|
| `SERVER` | An Analysis Services or Power BI XMLA endpoint |
| `DESKTOP` | The report name shown by a running Power BI Desktop instance, or a full `.pbix` path |
| `SSDT` | The name of an open SSDT workspace |

When `DESKTOP` receives a `.pbix` path, DAX Studio looks for a running instance with the same file name. If one is not running, it opens the file in Power BI Desktop, waits for it to load, and connects.

```dax
--> CONNECT SERVER localhost\tabular
--> CONNECT DESKTOP "C:\Reports\Sales.pbix"
```

The target supports [`SET` variable expansion](/docs/features/comment-script/set).
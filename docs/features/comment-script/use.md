---
title: USE
sidebar_position: 3
---

:::warning[Preview Feature]
Comment Script is a **preview** feature and is only available in the DAX Studio [preview build](/preview-downloads). Its syntax and behavior may change before the final release.
:::

`USE` selects a database on the current connection. It is equivalent to changing the database in the Metadata pane.

## Syntax

```dax
--> USE <database-name>
```

Quote names that contain spaces, or leave the name unquoted through the end of the command line.

```dax
--> CONNECT SERVER localhost\tabular
--> USE "Adventure Works"
```

The database name supports [`SET` variable expansion](/docs/features/comment-script/set).
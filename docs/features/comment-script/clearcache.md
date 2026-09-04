---
title: CLEARCACHE
sidebar_position: 7
---

:::warning[Preview Feature]
Comment Script is a **preview** feature and is only available in the DAX Studio [preview build](/preview-downloads). Its syntax and behavior may change before the final release.
:::

`CLEARCACHE` clears the model cache before the query in its batch runs. It is equivalent to using **Clear Cache** on the ribbon.

## Syntax

```dax
--> CLEARCACHE
```

Put the command in every batch that should start with a cold cache. This is particularly important when comparing a [`BASELINE`](/docs/features/comment-script/baseline) with another query.

```dax
--> CLEARCACHE
--> BASELINE "original"
EVALUATE /* original query */
--> GO
--> CLEARCACHE
--> ASSERT DURATION <= BASELINE "original" * 1.1
EVALUATE /* candidate query */
```
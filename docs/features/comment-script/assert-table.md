---
title: ASSERT TABLE
sidebar_position: 12
---

:::warning[Preview Feature]
Comment Script is a **preview** feature and is only available in the DAX Studio [preview build](/preview-downloads). Its syntax and behavior may change before the final release.
:::

`ASSERT TABLE` compares query results with expected rows supplied inline, loaded from a file, or captured by an earlier batch.

## Syntax

```dax
--> ASSERT TABLE [UNORDERED|PARTIAL]
--> ASSERT TABLE [UNORDERED|PARTIAL] [CSV|TXT|MD|PARQUET] "<path>"
--> ASSERT TABLE [UNORDERED|PARTIAL] BASELINE ["<name>"]
--> ASSERT TABLE [UNORDERED|PARTIAL] PREVIOUS
```

The default comparison is ordered. `UNORDERED` requires the same rows in any order. `PARTIAL` requires every expected row to be present but permits extra query rows.

## Inline data

Prefix every expected table row with `-->>`. The first row contains column names, matched case-insensitively, and the Markdown separator is optional.

```dax
--> ASSERT TABLE UNORDERED
-->> | Color | ProductCount |
-->> |-------|--------------|
-->> | Red   | 5            |
-->> | Blue  | 3            |

EVALUATE
SUMMARIZECOLUMNS (
    'Product'[Color],
    "ProductCount", COUNTROWS ( 'Product' )
)
```

An empty cell means DAX `BLANK`. Use `""` for an empty string. Prefix a cell with `\` to treat the remaining content literally.

## Column types

Types are inferred unless the second row contains a recognized type for every column.

| Type | Aliases |
|---|---|
| `STRING` | `TEXT` |
| `INT64` | `INTEGER`, `INT` |
| `DOUBLE` | |
| `CURRENCY` | `DECIMAL` |
| `BOOLEAN` | `BOOL` |
| `DATETIME` | `DATE` |

```dax
--> ASSERT TABLE
-->> | Product | Price    | OrderDate |
-->> | STRING  | CURRENCY | DATETIME  |
-->> |---------|----------|-----------|
-->> | Widget  | 19.99    | 2026-01-15|
```

File paths support [`SET` variable expansion](/docs/features/comment-script/set). A missing data source, orphan `-->>` row, or column mismatch is reported as an error.
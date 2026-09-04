---
title: Comment Script
sidebar_position: 1
---

:::warning Preview Feature
Comment Script is a **preview** feature and is only available in the DAX Studio preview build. Its syntax and behavior may change before the final release.
:::

Comment Script lets you embed DAX Studio commands in a `.dax` file. Every command starts with `-->`, so it remains a DAX comment and the file can still be opened or executed by other tools.

Commands can connect to a model, set query parameters, split a document into batches, control traces and cache state, export artifacts, and verify query results or performance. This makes a script useful both for an interactive tuning session and for repeatable command-line tests.

## How scripts run

A script is divided into batches by [`GO`](./go). Within each batch, DAX Studio processes the commands, executes the DAX query, and then evaluates assertions and post-query actions. Batches run in order on the same connection.

```dax
--> CONNECT SERVER localhost\tabular
--> USE "Adventure Works"
--> PARAMETER @Year INT64 = 2025
--> CLEARCACHE
--> TRACE SERVERTIMINGS ON

EVALUATE
FILTER ( 'Date', 'Date'[Year] = @Year )
```

Commands do not have to appear in a particular order, but placing setup commands before the query makes the script easier to read.

## Comparing two queries

The following script captures an original query, then checks that an optimized version returns the same rows and does not take more than 10% longer.

```dax
--> TEST "Sales YTD optimization"
--> BASELINE "original"
--> CLEARCACHE

EVALUATE
SUMMARIZECOLUMNS (
    'Date'[Year],
    "Sales", CALCULATE ( [Sales], DATESYTD ( 'Date'[Date] ) )
)
ORDER BY 'Date'[Year]

--> GO

--> CLEARCACHE
--> ASSERT TABLE BASELINE "original"
--> ASSERT DURATION <= BASELINE "original" * 1.1

EVALUATE
SUMMARIZECOLUMNS (
    'Date'[Year],
    "Sales", [Sales YTD]
)
ORDER BY 'Date'[Year]
```

Server Timings starts automatically when a baseline or performance assertion requires it.

## Verifying expected results

Use an inline Markdown table to keep small expected result sets beside the query. Each table row starts with `-->>`, so it is also a valid DAX comment.

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

## Commands

| Command | Purpose |
|---|---|
| [`CONNECT`](./connect) | Connect to a server, Power BI Desktop model, or SSDT workspace |
| [`USE`](./use) | Select a database on the current connection |
| [`PARAMETER`](./parameter) | Supply a query parameter value |
| [`SET`](./set) | Define a reusable script variable |
| [`GO`](./go) | End a batch and optionally delay the next one |
| [`CLEARCACHE`](./clearcache) | Clear the model cache before a query |
| [`TRACE`](./trace) | Enable or disable a trace |
| [`EXPORT METRICS`](./export-metrics) | Export VertiPaq Analyzer metrics |
| [`SHOW`](./show) | Display dependencies, metadata, diagrams, or metrics |
| [`ASSERT`](./assert) | Check row count or performance metrics |
| [`ASSERT TABLE`](./assert-table) | Compare query results with expected data |
| [`BASELINE`](./baseline) | Capture results and timings for later comparison |
| [`PREVIOUS`](./previous) | Compare with the preceding query batch |
| [`SAVEAS`](./saveas) | Save the executed query or a DAX Studio package |
| [`TEST`](./test) | Assign a descriptive name to a test |
| [`RESULTS`](./results) | Control whether the results grid is shown |

Script variables are expanded only in command arguments, not in the DAX query body. Syntax errors, missing baselines, failed variable expansion, and failed assertions are reported as script errors.
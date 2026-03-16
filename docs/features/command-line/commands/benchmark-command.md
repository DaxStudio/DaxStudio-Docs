---
title: BENCHMARK command
---

This command runs a DAX query multiple times with cold and warm cache iterations, collecting detailed server timing information (Formula Engine / Storage Engine breakdown) and outputting the results to a CSV file. This is the command-line equivalent of the [Run Benchmark](/docs/features/run-benchmark) feature in the DAX Studio UI.

The FE/SE timing breakdown uses the same `ServerTimesViewModel` trace processing as the desktop UI — no timing logic is reimplemented.

## Syntax

```
DSCMD BENCHMARK <OutputFile> [OPTIONS]
```

## Arguments

| Name | Description |
|---|---|
| &lt;OutputFile> | The path and name of the CSV file to which the benchmark results will be written |

## Options

| Option | Description |
| ---|---|
| -h, --help | displays the help for the BENCHMARK command|
| -s, --server &lt;SERVER> | the name of the server to connect to |
| -d, --database &lt;DATABASE> | The name of the tabular database to connect to |
| -u, --userid &lt;USERID> | The username to use for authentication (see [Authentication](/docs/features/command-line/authentication) for more details) |
| -p, --password &lt;PASSWORD> | The password to use for authentication (see [Authentication](/docs/features/command-line/authentication) for more details) |
| -c, --connectionstring &lt;CONNECTIONSTRING> | The connection string for the data source |
| -f, --file &lt;FILE> | A file containing a DAX query to be benchmarked |
| -q, --query &lt;QUERY> | A string with the DAX query to be benchmarked |
| --cold &lt;COLD> | The number of cold cache iterations to run (default: 5). Before each cold run, the database cache is cleared using the XMLA ClearCache command. |
| --warm &lt;WARM> | The number of warm cache iterations to run (default: 5). Warm runs execute without clearing the cache. |
| --silent | Suppress all console output. Only the CSV file is written. Useful for scripted/CI usage. |

:::note

You must specify either `--file` or `--query`, but not both.

:::

## Output

### Console Output

A summary table is printed to the console showing statistics for cold and warm cache runs, including Formula Engine (FE) and Storage Engine (SE) timings when server trace is available:

```
                              Benchmark Summary
┌───────┬───────────┬────────────┬─────────┬─────────┬────────────┬──────────┬──────┐
│ Cache │ Statistic │ Total (ms) │ FE (ms) │ SE (ms) │ SE Queries │ SE Cache │ Rows │
├───────┼───────────┼────────────┼─────────┼─────────┼────────────┼──────────┼──────┤
│ Cold  │ Average   │         95 │      23 │      72 │          1 │        0 │   15 │
│ Cold  │ StdDev    │         14 │       9 │      22 │          0 │        0 │    0 │
│ Cold  │ Min       │         80 │      17 │      47 │          1 │        0 │   15 │
│ Cold  │ Max       │        107 │      33 │      88 │          1 │        0 │   15 │
│ Warm  │ Average   │          0 │       0 │       0 │          1 │        1 │   15 │
│ Warm  │ StdDev    │          0 │       0 │       0 │          0 │        0 │    0 │
│ Warm  │ Min       │          0 │       0 │       0 │          1 │        1 │   15 │
│ Warm  │ Max       │          0 │       0 │       0 │          1 │        1 │   15 │
└───────┴───────────┴────────────┴─────────┴─────────┴────────────┴──────────┴──────┘
```

### CSV Output

The CSV file contains two sections:

**Detail Rows** — one row per query execution:

| Column | Description |
|---|---|
| Sequence | The run number (1-based) |
| Cache | `Cold` or `Warm` |
| TotalDuration_ms | Server-side total query duration in milliseconds |
| FormulaEngineDuration_ms | Time spent in the Formula Engine (FE) |
| StorageEngineDuration_ms | Time spent in the Storage Engine (SE) |
| StorageEngineQueryCount | Number of SE queries issued |
| StorageEngineCpu_ms | CPU time consumed by SE queries |
| TotalCpu_ms | Total CPU time for the query |
| VertipaqCacheMatches | Number of SE queries served from the VertiPaq cache |
| RowCount | Number of rows returned by the query |
| Error | Error message if the query failed (empty on success) |

**Summary Statistics** — appended after the detail rows:

| Statistic | Description |
|---|---|
| Average | Mean across all runs of that cache type |
| StdDev | Standard deviation |
| Min | Fastest run |
| Max | Slowest run |

## Examples

Run a benchmark with 3 cold and 3 warm iterations using a query file:

```
dscmd benchmark c:\temp\results.csv -s localhost\tabular -d "Adventure Works" -f c:\queries\my-query.dax --cold 3 --warm 3
```

Connect to a Power BI / Fabric workspace:

```
dscmd benchmark c:\temp\results.csv -c "Data Source=powerbi://api.powerbi.com/v1.0/myorg/My Workspace;Initial Catalog=My Dataset" -f query.dax --cold 5 --warm 5
```

Run silently for scripted usage (only CSV output, no console):

```
dscmd benchmark c:\temp\results.csv -s localhost\tabular -d "Adventure Works" -q "EVALUATE SUMMARIZECOLUMNS('Date'[Year], ""Rev"", [Total Sales])" --cold 3 --warm 3 --silent
```

### Sample CSV Output

```
Sequence,Cache,TotalDuration_ms,FormulaEngineDuration_ms,StorageEngineDuration_ms,StorageEngineQueryCount,StorageEngineCpu_ms,TotalCpu_ms,VertipaqCacheMatches,RowCount,Error
1,Cold,80,33,47,1,0,16,0,15,
2,Cold,97,17,80,1,0,16,0,15,
3,Cold,107,19,88,1,0,16,0,15,
4,Warm,0,0,0,1,0,0,1,15,
5,Warm,0,0,0,1,0,0,1,15,
6,Warm,0,0,0,1,0,0,1,15,

# Summary
Cache,Statistic,TotalDuration_ms,FormulaEngineDuration_ms,StorageEngineDuration_ms,StorageEngineQueryCount,VertipaqCacheMatches,RowCount
Cold,Average,95.0,23.0,72.0,1.0,0.0,15.0
Cold,StdDev,14.0,9.0,22.0,0.0,0.0,0.0
Cold,Min,80.0,17.0,47.0,1.0,0.0,15.0
Cold,Max,107.0,33.0,88.0,1.0,0.0,15.0
Warm,Average,0.0,0.0,0.0,1.0,1.0,15.0
Warm,StdDev,0.0,0.0,0.0,0.0,0.0,0.0
Warm,Min,0.0,0.0,0.0,1.0,1.0,15.0
Warm,Max,0.0,0.0,0.0,1.0,1.0,15.0
```

## Use Cases

- **Automated performance regression testing**: Run benchmarks before and after model changes to detect performance regressions
- **CI/CD pipeline integration**: Include DAX performance checks in your deployment pipeline
- **A/B comparison scripting**: Compare multiple RLS configurations, measure designs, or model changes by scripting benchmark runs across different connection strings or queries
- **Batch benchmarking**: Use a shell loop to benchmark multiple query files and aggregate results

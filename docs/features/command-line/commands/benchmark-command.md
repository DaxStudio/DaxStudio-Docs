---
title: BENCHMARK command
---

This command runs a DAX query benchmark with cold and warm cache timings and writes the results to a CSV file.

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
| -d, --database &lt;DATABASE> | The name of the tabular database to export from |
| -u, --userid &lt;USERID> | The username to use for authentication (see [Authentication](../../authentication) for more details) |
| -p, --password &lt;PASSWORD> | The password to use for authentication (see [Authentication](../../authentication) for more details) |
| -c, --connectionstring &lt;CONNECTIONSTRING> | The connection string for the data source |
| -f, --file &lt;FILE> | A text file containing a DAX query to be executed |
| -q, --query &lt;QUERY> | A DAX query to be executed |
| --cold &lt;COLD> | Number of cold cache (cache cleared) iterations (defaults to 5) |
| --warm &lt;WARM> | Number of warm cache iterations (defaults to 5) |
| --silent | Suppress console output and only write CSV output |
| --role &lt;ROLE> | RLS role to test (adds `Roles=` to the query connection string) |
| --effective-user &lt;UPN> | User to impersonate for RLS testing (adds `EffectiveUserName=` to the query connection string) |
| -v, --verbose | Enables verbose logging output |

### -f --file and -q --query Options

You must specify exactly one query source. Use either `-f, --file` to read the DAX query from a text file, or `-q, --query` to pass the DAX query directly on the command line. These options are mutually exclusive.

### --cold and --warm Options

The `--cold` and `--warm` options must be greater than or equal to zero, and at least one cold or warm iteration must be run.

For cold iterations the command clears the cache before each query execution. Warm iterations run without clearing the cache. The command captures Formula Engine and Storage Engine timings from a server timings trace, writes per-iteration detail rows and summary statistics to the CSV file, and prints a summary table including FE, SE and row count information to the console. If a trace cannot be started the command falls back gracefully to wall-clock timing.

:::info[The BENCHMARK command is new in version 3.6.0.]
:::

The equivalent UI features are [Run Benchmark](/docs/features/run-benchmark/) and [Server FE Benchmark](/docs/features/server-fe-benchmark/).

## Examples

The following example runs a benchmark using a DAX query from `query.dax`, with 5 cold cache iterations and 5 warm cache iterations.

```
dscmd.exe benchmark c:\temp\results.csv -s localhost\tabular -d "Adventure Works" -f query.dax --cold 5 --warm 5
```

The following example runs a benchmark using a connection string and an inline DAX query.

```
dscmd.exe benchmark c:\temp\results.csv -c "Data Source=localhost\tabular;Initial Catalog=Adventure Works" -q "EVALUATE 'Product'"
```

The following example runs a benchmark using an RLS role.

```
dscmd.exe benchmark c:\temp\rls-results.csv -s localhost\tabular -d "Adventure Works" -f query.dax --role "Sales Manager"
```

---
title: EXPORT CSV command
---

This command runs the Export Data function and sends the output to a folder with one csv file per table.

## Syntax

```
DSCMD EXPORT CSV <OutputFolder> [OPTIONS]
```

## Arguments

| Name | Description |
|---|---|
| &lt;OutputFolder> | The path and name of the folder to which the CSV data will be written |

## Options

| Option | Description |
| ---|---|
| -h, --help | displays the help for the EXPORT CSV command|
| -s, --server &lt;SERVER> | the name of the server to connect to |
| -d, --database &lt;DATABASE> | The name of the tabular database to export from |
| -u, --userid &lt;USERID> | The username to use for authentication (see [Authentication](../authentication) for more details) |
| -p, --password &lt;PASSWORD> | The password to use for authentication (see [Authentication](../authentication) for more details) |
| -c, --connectionstring &lt;CONNECTIONSTRING> | The connection string for the data source |
| -f, --file &lt;FILE> | A file containing a DAX query to be executed. Could be a text file or .dax or .daxx |
| -q, --query &lt;QUERY> | A string with the DAX query to be executed |

## Examples

The following example exports all of the tables from the `Adventure Works` model to the `c:\temp\export` folder as .csv files.

```
dscmd.exe export csv c:\temp\export -s localhost\tabular -d "Adventure Works"
```

The following example exports only exports the `Product`, `Product Category` and `Reseller Sales` tables from the `Adventure Works` model to the `c:\temp\export` folder as .csv files.
```
dscmd.exe export csv c:\temp\export -s localhost\tabular -d "Adventure Works" -t Product "Product Category" "Reseller Sales"
```
---
title: XLSX command
---

This command will output an Excel xlsx file based on the results of a DAX query

## Syntax

```
DSCMD XLSX <OutputFile> [OPTIONS]
```

## Arguments

| Name | Description |
|---|---|
| &lt;OutputFile> | The path and name of the file to which the XLSX data will be written |

## Options

| Option | Description |
| ---|---|
| -h, --help | displays the help for the XLSX command|
| -s, --server &lt;SERVER> | the name of the server to connect to |
| -d, --database &lt;DATABASE> | The name of the tabular database to export from |
| -u, --userid &lt;USERID> | The username to use for authentication (see [Authentication](../../authentication) for more details) |
| -p, --password &lt;PASSWORD> | The password to use for authentication (see [Authentication](../../authentication) for more details) |
| -c, --connectionstring &lt;CONNECTIONSTRING> | The connection string for the data source |
| -f, --file &lt;FILE> | A file containing a DAX query to be executed. Could be a text file or .dax or .daxx |
| -q, --query &lt;QUERY> | A string with the DAX query to be executed |

## Examples

The following example exports to a file called myquery.xlsx in the c:\temp folder and connects as the user running the command

```
dscmd xlsx c:\temp\myquery.xlsx -s localhost\tab19 -d "Adventure Works DW" -q "EVALUATE 'product'"
```

```
dscmd xlsx c:\temp\myquery.xlsx -c "Data Source=localhost\tab19;initial catalog=Adventure Works DW" -q "EVALUATE 'product'"
```
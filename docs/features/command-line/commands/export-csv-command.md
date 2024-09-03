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
| -u, --userid &lt;USERID> | The username to use for authentication (see [Authentication](../../authentication) for more details) |
| -p, --password &lt;PASSWORD> | The password to use for authentication (see [Authentication](../../authentication) for more details) |
| -c, --connectionstring &lt;CONNECTIONSTRING> | The connection string for the data source |
| -q, --query &lt;QUERY> | A string with the DAX query to be executed |
| -t, --tables &lt;TABLES> | A list of tables to be exported (defaults to all tables) |

### -t --tables Option
This option is a comma separate list of table names

:::info
If you need to include tables with spaces the whole parameter needs to be quoted eg. `-t "Table 1,Table 2"`

If you need to include `"` characters these need to be escaped with a leading backslash eg. `-t "My \"Table\" 1,Table2`

If you need to include `,` or `\` characters these need to be doubled up eg. `-t "My \"Table\" \\ 1,Table2`
:::

| Table Name Scenario | Example | Table Names |
|---|---|---|
| No Spaces | `-t Table1,Table2,Table3` | Table1<br/>Table2<br/>Table3|
| Including Spaces | `-t "Table 1,Table 2,Table3"` | Table 1<br/>Table 2<br/>Table3|
| Including Quotes & Spaces | `-t "Table1,My \"Table\" 2,Table3"` | Table1<br/>My "Table" 2<br/>Table3|
| Including Commas | `-t Table1,My,,Table2,Table3` | Table1<br/>My,Table2<br/>Table3|
| Including Quotes,Commas & Spaces | `-t "Table1,My,,\"Table\" 2,Table3"` | Table1<br/>My,"Table" 2<br/>Table3|

## Examples

The following example exports all of the tables from the `Adventure Works` model to the `c:\temp\export` folder as .csv files.

```
dscmd.exe export csv c:\temp\export -s localhost\tabular -d "Adventure Works"
```

The following example exports only exports the `Product`, `Product Category` and `Reseller Sales` tables from the `Adventure Works` model to the `c:\temp\export` folder as .csv files.
```
dscmd.exe export csv c:\temp\export -s localhost\tabular -d "Adventure Works" -t Product "Product Category" "Reseller Sales"
```
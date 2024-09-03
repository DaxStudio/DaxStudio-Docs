---
title: EXPORT SQL command
---

This command runs the Export Data function and sends the output to a SQL database with one sql table per table in the source tabular model.

## Syntax

```
DSCMD EXPORT SQL <OutputFolder> [OPTIONS]
```

## Arguments

| Name | Description |
|---|---|
| &lt;SqlConnectionString> | The connection string for the target SQL Server where the data is to be written |

## Options

| Option | Description |
| ---|---|
| -h, --help | displays the help for the EXPORT SQL command|
| -s, --server &lt;SERVER> | the name of the server to connect to |
| -d, --database &lt;DATABASE> | The name of the tabular database to export from |
| -u, --userid &lt;USERID> | The username to use for AzureAD authentication (see [Authentication](../../authentication) for more details)  |
| -p, --password &lt;PASSWORD> | The password to use for AzureAD authentication (see [Authentication](../../authentication) for more details)  |
| -c, --connectionstring &lt;CONNECTIONSTRING> | The connection string for the data source |
| -t, --tables &lt;TABLES> | A list of tables to be exported, if this option is not specified all the tables in the model are exported |
| -e, --schema &lt;SCHEMA> | The schema in which the destination tables belong (defaults to 'dbo') |
| -r, --recreate-tables | Will drop and re-create the target tables |

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
| Including Quotes | `-t "Table1,My \"Table\" 2,Table3"` | Table1<br/>My "Table" 2<br/>Table3|
| Including Commas | `-t Table1,My,,Table2,Table3` | Table1<br/>My,Table2<br/>Table3|
| Including Quotes,Commas & Spaces | `-t "Table1,My,,\"Table\" 2,Table3"` | Table1<br/>My,"Table" 2<br/>Table3|


## Examples

The following example exports all of the tables from the `Adventure Works` model 

`dscmd.exe export sql "Data Source=localhost\sql;Initial Catalog=DataDump;Integrated Security=SSPI" -s localhost\tabular -d "Adventure Works"`

The following example exports only exports the `Product`, `Product Category` and `Reseller Sales` tables from the `Adventure Works` model 

`dscmd.exe export sql "Data Source=localhost\sql;Initial Catalog=DataDump;Integrated Security=SSPI" -s localhost\tabular -d "Adventure Works" -t Product "Product Category" "Reseller Sales"`
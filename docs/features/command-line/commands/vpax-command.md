---
title: VPAX command
---

This command will output a .vpax file based for the selected tabular model

## Syntax

```
DSCMD VPAX <OutputFile> [OPTIONS]
```

## Arguments

| Name | Description |
|---|---|
| &lt;OutputFile> | The path and name of the file to which the VPAX data will be written |

## Options

| Option | Description |
| ---|---|
| -h, --help | displays the help for the VPAX command|
| -s, --server &lt;SERVER> | the name of the server to connect to |
| -d, --database &lt;DATABASE> | The name of the tabular database to export from |
| -u, --userid &lt;USERID> | The username to use for authentication (see [Authentication](../authentication) for more details) |
| -p, --password &lt;PASSWORD> | The password to use for authentication (see [Authentication](../authentication) for more details) |
| -c, --connectionstring &lt;CONNECTIONSTRING> | The connection string for the data source |
| -t, --excludeTom | Setting this flag will exclude a .bim file inside the vpax file (which just contains additional metadata) |
| -r, --donotreadstatsfromdata | Setting this flag will prevent the standard distinctcount queries that read the statistics from the data model |
| -q, --readstatsfromdirectquery | Setting this flag will force the execution of distinctcount queries that read the statistics from the data model (which is normally suppressed for Direct Query models) |


## Examples

The following example exports to a file called myquery.xlsx in the c:\temp folder and connects as the user running the command

```
dscmd.exe vpax c:\temp\export\model.vpax -s localhost\tabular -d "Adventure Works"
```

```
dscmd.exe vpax c:\temp\export\model.vpax -c "Data Source=localhost\tabular;Initial Catalog=Adventure Works"
```
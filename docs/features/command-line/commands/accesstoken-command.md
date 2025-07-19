---
title: ACCESSTOKEN command
---

This command will output an access token for the specified connection settings. This command will only work against data sources that support Entra authentication like Power BI / Fabric or AzureAS.

Typically this command will not be used on its own. Instead it is designed to be used in scripts with loops. If you don't have access to a Service Principal and you need to login to Power BI or Azure AS interactively you can use this command to log in once. This can be achieved by passing in the accesstoken as the password.

:::tip
When passing the access token using the `-p|-password` parameter it is important not to also pass the username (the token has already been generated)
:::

:::info
The access token is like a one time password, it is usually only valid for 60-90 minutes. You can also see these tokens in the browser dev tools when accessing websites using Entra authentication so having access to one locally is not an issue, but they should not be shared with any other person and you should avoid using them on share computers.
:::

## Syntax

```
DSCMD ACCESSTOKEN [OPTIONS]
```

## Options

| Option | Description |
| ---|---|
| -h, --help | displays the help for the ACCESSTOKEN command|
| -s, --server &lt;SERVER> | the name of the server to connect to |
| -d, --database &lt;DATABASE> | The name of the tabular database to export from |
| -u, --userid &lt;USERID> | The username to use for authentication (see [Authentication](../../authentication) for more details) |
| -p, --password &lt;PASSWORD> | The password to use for authentication (see [Authentication](../../authentication) for more details) |
| -c, --connectionstring &lt;CONNECTIONSTRING> | The connection string for the data source |
| -f, --file &lt;FILE> | A file containing a DAX query to be executed. Could be a text file or .dax or .daxx |
| -q, --query &lt;QUERY> | A string with the DAX query to be executed |
| -t, --filetype &lt;VALUE>| Can be one of the following values ( UTF8CSV, UNICODECSV, JSON, TAB ) if omitted the file extension is used <ul><li>.csv - UFT-8 csv file is generated</li><li>.txt - tab delimited file is generated</li><li>.json - a json file is generated </li></ul>|

## Example

The following example uses the `ACCESSTOKEN` command to prompt once to login to an Entra account. Then it uses that token multiple times in a loop to generate a different csv file for each country.

```
$query = @"
EVALUATE { COUNTROWS(
FILTER( customer
	, customer[country] = @country
	)
)}
"@

$cmd = "dscmd.exe"
$server = "powerbi://api.powerbi.com/v1.0/myorg/Example"
$database = "contoso custom"

## This line will prompt for an Entra account
$token = &$cmd ACCESSTOKEN -s $server -d $database  

## Then we generate separate csv files passing in the accesstoken as the password
foreach ( $country in @('AU', 'CA', 'DE', 'FR')) {
		
	Write-Host "Running query for country: $country"
	&$cmd csv c:\temp\myquery-$country.csv -s $server -d $database -p $token  -m country=$country -q $query
}
```
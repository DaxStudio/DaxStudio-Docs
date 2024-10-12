---
title: Authentication
---

The way that dscmd authenticates to the data source depends on the which set of options are passed to the specific command

By default the identity running the dscmd process will be used for authentication. In the case of connections requiring an Entra ID a popup window will be displayed

## Using Options

### if the --connectionString option is set
When you set the --connectionString property none of the other --UserID --Password --Server or --Database options are used, the connection string parameter overrides all of these. So if the connection string has a `User ID=` or `Password=` options then those are used otherwise the identity running the dscmd process will be used 

### if the  --UserID or --Password options are set
Then these parameters are used to authenticate to the data source.

## Using the Authentication environment variables
The values from those will be injected into the User ID= and Password= values in the connection string. This allows you to avoid hard coding credentials into scripts that use dscmd.

There are 2 environment variables that dscmd is aware of:

* **`DSCMD_USER`** - this is passed as the User ID
* **`DSCMD_PASSWORD`** - this is passed as the Password

## Authenticating as service principal

To use the `ClientID` and `Secret` to login as a service principal you need to use the following format `app:<clientId>@<tenantId>` as the user value and the `secret` or `cert:<thumbprint>` as the password value. 

eg. *note: these are fake random values for illustration purposes only*
```
dscmd csv c:\temp\myquery.csv -s localhost\tab19 -d "Adventure Works DW"  ^
  -m myColor=Red ^
  -u app:XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXX@YYYYYYYY-YYYY-YYYY-YYYY-YYYYYYYYYYY ^
  -p ARandomStringForClientSecretHere
  -q "EVALUATE FILTER('product', 'product[Color]=@myColor && 'product'[Category]='Bikes')"
```

:::warning
It is recommended to store the clientId/secret in environment variables if possible rather than embedding these in your scripts
:::


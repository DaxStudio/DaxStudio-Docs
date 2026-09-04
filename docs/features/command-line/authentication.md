---
title: Authentication
---

How `dscmd` authenticates depends on the data source and the options passed to the command.

For sources that use Windows authentication, such as Power BI Desktop and SQL Server Analysis Services, `dscmd` uses the identity of the process running the command.

## Entra authentication

For data sources that require Microsoft Entra ID, `dscmd` first attempts to authenticate silently. An interactive sign-in prompt may still be required when the account is unclear, the account is not cached, or policies such as MFA or Conditional Access require user interaction.

Account selection works as follows:

- If no accounts are available, `dscmd` prompts for an account.
- If one account is available, `dscmd` attempts to use it silently.
- If multiple accounts are available, specify `-u` or `--userid` to select one. Otherwise, `dscmd` prompts for an account.
- If the specified user ID does not match an available account, `dscmd` prompts to authenticate that account.

Use `--non-interactive` for unattended execution. If authentication would require a prompt, the command fails with a non-zero exit code instead of waiting for user input. `dscmd` also enables this behavior automatically when the process has no interactive window, such as when it runs as a service.

You can use [`dscmd auth`](/docs/features/command-line/commands/auth-command) to cache an account before an unattended job or to check whether an account can authenticate without prompting.

## Authentication options

### Connection string

Use `-c` or `--connectionstring` to supply the data source connection string. You cannot combine it with `--server` or `--database`.

For Entra authentication without a password, `User ID` selects the cached account to use. It can be supplied in the connection string, with `-u` or `--userid`, or through `DSCMD_USER`.

### User ID and password

When a password is supplied, the user ID and password are added to the connection string as credentials. When no password is supplied for an Entra data source, the user ID selects the account that `dscmd` should authenticate.

## Authentication environment variables

Environment variables let you avoid hard-coding authentication settings in scripts. A command-line option takes precedence over the corresponding environment variable.

`dscmd` supports these authentication environment variables:

- **`DSCMD_USER`** - supplies the user ID or selects an Entra account
- **`DSCMD_PASSWORD`** - supplies the password
- **`DSCMD_NON_INTERACTIVE`** - prevents interactive sign-in when set to `1`, `true`, or `yes`

## Authenticate as a service principal

To authenticate as a service principal, use `app:<clientId>@<tenantId>` as the user ID. Use the client secret as the password, or use `cert:<thumbprint>` to authenticate with a certificate.

The following example uses placeholder values:

```
dscmd csv c:\temp\myquery.csv -s localhost\tab19 -d "Adventure Works DW" ^
  -m myColor=Red ^
  -u app:XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXX@YYYYYYYY-YYYY-YYYY-YYYY-YYYYYYYYYYY ^
  -p ARandomStringForClientSecretHere ^
  -q "EVALUATE FILTER('product', 'product[Color]=@myColor && 'product'[Category]='Bikes')"
```

:::warning
Store the client ID and secret in environment variables instead of embedding them in scripts whenever possible.
:::
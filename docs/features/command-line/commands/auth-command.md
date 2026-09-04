---
title: AUTH command
---

The `AUTH` command signs in to Microsoft Entra ID and caches the account for later `dscmd` commands. Unlike the [`ACCESSTOKEN`](../accesstoken-command) command, it does not print the access token.

If no server or connection string is specified, the command authenticates against the Power BI service. Specify a server or connection string when authenticating for Azure Analysis Services or a particular Power BI/Fabric endpoint.

## Syntax

```
DSCMD AUTH [OPTIONS]
```

## Options

| Option | Description |
| --- | --- |
| -h, --help | Displays help for the `AUTH` command |
| --list | Lists accounts available from the DAX Studio cache and Windows without acquiring a token |
| -s, --server &lt;SERVER&gt; | The server whose authentication scope should be used |
| -d, --database &lt;DATABASE&gt; | The database to include in the connection settings |
| -u, --userid &lt;USERID&gt; | Selects the Entra account to authenticate; can also be set with `DSCMD_USER` |
| -p, --password &lt;PASSWORD&gt; | The password to use for username/password or service principal authentication; can also be set with `DSCMD_PASSWORD` |
| -c, --connectionstring &lt;CONNECTIONSTRING&gt; | The connection string whose authentication scope should be used |
| --non-interactive | Prevents an interactive sign-in prompt; the command fails if authentication cannot be completed silently. Can also be set with `DSCMD_NON_INTERACTIVE` |

The `--list` option cannot be combined with any authentication options.

## Examples

Sign in to the default Power BI service scope. The command prompts if it cannot use a cached account silently.

```
dscmd auth
```

Sign in as a specific account. This is useful on a machine where multiple accounts are available.

```
dscmd auth -u user@contoso.com
```

Check whether a specific account can authenticate without prompting. A non-zero exit code indicates that interactive sign-in is required.

```
dscmd auth -u user@contoso.com --non-interactive
```

List the accounts available from the DAX Studio cache and Windows.

```
dscmd auth --list
```

Authenticate for an Azure Analysis Services server.

```
dscmd auth -s asazure://australiasoutheast.asazure.windows.net/myserver
```

On success, the command displays the account, tenant, and token expiry time. See [Authentication](../../authentication) for more information about account selection, unattended execution, and service principals.
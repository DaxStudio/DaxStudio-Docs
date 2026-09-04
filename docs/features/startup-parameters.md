---
title: Startup Parameters
---

This page documents the command line parameters accepted by `daxstudio.exe` itself when you launch
it.

:::info
There are two other sets of command line options documented elsewhere on this site:

* [dscmd.exe](/docs/features/command-line) - the separate DAX Studio command line utility
* [the installer](/docs/installation/command-line-install) - options for scripted or automated installs
:::

## Syntax

```
daxstudio.exe [options]
```

## Options

| Option | Description |
| ---|---|
| -h, --help | Displays the available options |
| -f, --file &lt;FILE> | The name of a file to open on startup |
| -s, --server &lt;SERVER> | The server to connect to on startup |
| -d, --database &lt;DATABASE> | The database to connect to on startup |
| -p, --port &lt;PORT> | The port number to connect to. Used when launching against a local Power BI Desktop or SSDT instance |
| -l, --log | Enables debug logging |
| -r, --reset | Resets the user preferences back to the default settings |
| --nopreview | Hides the version information |
| -u, --uri &lt;URI> | Used by the `daxstudio://` uri handler |

## Examples

Open a file on startup:

```
daxstudio.exe --file "c:\temp\myquery.dax"
```

Connect to a server and database on startup:

```
daxstudio.exe --server localhost\tabular --database "Adventure Works"
```

Reset the user preferences back to their defaults:

```
daxstudio.exe --reset
```

## Argument parsing

:::tip New in 3.6.0
The command line parsing for both `daxstudio.exe` and `dscmd.exe` was rebuilt in version 3.6.0,
which makes the two consistent with each other and more forgiving about how options are written.
:::

The following are all accepted and mean the same thing:

| Style | Example |
|---|---|
| Long option | `--file "c:\temp\myquery.dax"` |
| Long option with equals | `--file="c:\temp\myquery.dax"` |
| Short option | `-f "c:\temp\myquery.dax"` |
| Legacy single dash | `-file "c:\temp\myquery.dax"` |
| DOS style | `/file "c:\temp\myquery.dax"` |

Option names are **case-insensitive**, so `--file`, `--File` and `--FILE` are equivalent.

:::note
While the option *names* are case-insensitive, the *values* you pass are not - the casing of file
paths, uri values and base64 payloads is always preserved exactly as you typed it.
:::

The legacy single dash and DOS style forms are supported so that existing shortcuts and scripts
keep working. New scripts should prefer the `--file` / `--uri` long forms, which is what the
installer and the Start menu shortcuts now use.

---
title: Syntax
---

The documentation of the syntax for `dscmd.exe` uses the follow conventions

```
dscmd <arguments> [options]
```

## &lt;Arguments> 
Arguments are indicated by angled brackets and are _**required**_

## \[Options] 
Are indicated by square brackets and are not required in all circumstances. But there are scenarios where certain combinations of options must be used. 

For example if you use the `--connectionString` option to connect to tabular model<br/> 
you **cannot** also use the `--server` or `--database` options.

And if you use the `--database` option you **must** also use the `--server` option. 

## Values with spaces
If you need to pass a value with spaces, for example if you have a database called **Adventure Works** you would surround that value with quotes.

eg. `--database "Adventure Works"`

:::info
Using an invalid combination of options should generate a meaningful error message explaining what the problem is
:::
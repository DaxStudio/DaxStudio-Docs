---
title: Authentication
---

The way that dscmd authenticates to the data source depends on the which set of options are passed to the specific command

### if the --connectionString option is set
When you set the --connectionString property none of the other --UserID --Password --Server or --Database options are used, the connection string parameter overrides all of these. So if the connection string has a `User ID=` or `Password=` options then those are used otherwise the identity running the dscmd process will be used 

### if the  --UserID or --Password options are set
Then these parameters are used to authenticate to the data source.

### if the Authentication environment variables are set
Then the values from those will be injected into the User ID= and Password= values in the connection string. There are 2 environment variables that dscmd is aware of
* **`DSCMD_USER`** - this is passed as the User ID
* **`DSCMD_PASSWORD`** - this is passed as the Password

### Otherwise
The identity running the dscmd process will be used for authentication. In the case of connections requiring an Entra ID a popup window will be displayed
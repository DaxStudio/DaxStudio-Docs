---
title: Install from winget
---

DAX Studio can be installed and updated using [winget](https://learn.microsoft.com/en-us/windows/package-manager/winget/)

# Installing for all users 

```
winget install daxstudio --scope machine
```

::: note
Installing for All users requires admin rights. You need to install for All users if you want to have the Power BI external tools integration
:::

# Installing for current user

```
winget install daxstudio 
```

# Updating

```
winget upgrade daxstudio
```

# Uninstalling

```
winget uninstall daxstudio
```
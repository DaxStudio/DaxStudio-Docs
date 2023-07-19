---
title: UCEERR_RENDERTHREADFAILURE Error
---

There have been some reports of the following error
```
UCEERR_RENDERTHREADFAILURE (Exception from HRESULT: 0x88980406)
```

This appears to be a problem with Graphics Hardware acceleration. You can turn off the hardware acceleration by changing a setting in the config file.

In the folder where DAX Studio is installed there is a file called `daxstudio.exe.config`

If you open that file with a text editor like notepad you should be able to find the following line

```
<add key="ForceSoftwareRendering" value="false" />
```

if you change the value from "false" to "true" and then restart DAX Studio it should turn off the hardware acceleration which should help with this error.

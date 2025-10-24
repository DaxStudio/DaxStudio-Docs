---
title: Export Data
---

This feature gives you the ability to export entire tables from your data model to either CSV files, PARQUET files or to SQL Server

:::info
 DAX Studio uses a stream architecture to write out the data as it arrives, so it rarely consumes more than a few hundred Mb while exporting. Typically any "Out of Memory" errors while exporting are due to the fact that the Tabular engine attempts to materialize the **entire** result set in memory before returning it to DAX Studio.

 DAX Studio attempts to avoid this issue by running a series of queries using TOPNSKIP if this is supported by the version of the engine that is being queried. 
:::

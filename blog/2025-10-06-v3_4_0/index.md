---
slug: v3_4_0-release
title: v3.4.0 Release
authors: [dgosbell]
tags: [daxstudio]
---
import Issue from '@site/src/components/Github-Issue';

# DAX Studio version 3.4.0

## New
* Adding support for UDFs in code completion and Functions tab
* Adding support for custom calendars in code completion
* <Issue id="1376"/> Adding parquet file export support
	* File results output
	* export data has a parquet option
	* dscmd `FILE` output supports .parquet output

## Updated
* Clipboard handling improvements with re-tries
* improvements to Find/Replace dialog layout
* Adding support for SSAS 2025
* Improving the styling of Power BI Performance data 
* <Issue id="1405"/> Adding totals to Power BI Performance Data
* Added RequestID to trace information
* added `FILE` option to dscmd - this is an alias for the CSV command, but the more generic name makes more sense now that we also support .parquet files
* Enhanced the ServerTimings tooltip to show event endtime and calculated duration (based on end - start)

## Fixes
* Fix <Issue id="1402"/> adding table name when defining formatstring expressions
* Fix <Issue id="1403/> prevent crash due to special characters in table/column names
* Fix cancel button not working on Multiple Queries Detected dialog when pasting from Performance Analyzer
* Fixes to close logic for FE Benchmark
* Fixing View As not working with dynamic roles against Power BI Desktop
* Fixed <Issue id="1399"/> authentication 403 error when connecting to Sovereign Clouds

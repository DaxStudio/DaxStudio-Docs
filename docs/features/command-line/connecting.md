---
title: Connecting
---

DSCMD supports all the same [connection types](/tutorials/getting-connected/) as the DAX Studio User Interface does with the exception of PowerPivot. PowerPivot does not support external tools connecting in, you can only connect when using the Excel add-in for the DAX Studio user interface.

There are 2 main ways of connecting for most commands. 

## 1. Using Server name and Database name

### Server Name

All commands support using `--server` or `-s` for connecting to an endpoint that supports Tabular models and the XMLA protocol. 

| Data Source | examples |
| :--- | :--- |
| SSAS on-prem | `myserver` <br/> `myserver\instance` |
| Fabric / Power BI Premium XMLA Endpoint |  `powerbi://` |
| Azure AS | `asazure:// ` |
| Power BI Desktop | `localhost:1234` <br/> `"My Report.pbix"` <br/> `"Adventure Works.pbip"`|
| PowerPivot | _Not supported_ |

#### Power BI Desktop 
You can connect to Power BI Desktop in 2 different ways

1. you can either use the `--server localhost:<port>` format where you would get the `<port>` number by running a script or copying it from the DAX Studio UI. 
2. You can use the `--server filename.pbix` or `--server filename.pbip` where `filename` is the name of the file excluding the path

:::info
DSCMD can only connect to _running_ instances of Power BI Desktop. If you wanted fully automated scripts you would need to incorporate the opening and closing logic for Power BI desktop into your script. 
:::

:::tip
You will also need to factor in a delay to allow Power BI Desktop to load the report and data model. DSCMD connects to the in-memory data model so you need to allow time for Power BI Desktop to load the data from the file into memory. The amount of time will depend on how large your data model is. You can estimate this delay by seeing how long it takes Power BI desktop to open the Data pane on the right hand side with the list of tables, columns and measures.
:::

### Database Name

The `-d` or `--database` parameter is used for specifing the specific database / model / dataset to connect to if that endpoint supports multiple of these. The database option is not required for Power BI Desktop connections, but it is required for all other connection types

## 2. Using a Connection String

You can build your own connection string using examples like the following: https://www.connectionstrings.com/olap-analysis-services/ this requires a bit more expertise, but it gives you the ability to use all of the optional [connection string properties](https://learn.microsoft.com/en-us/analysis-services/instances/connection-string-properties-analysis-services?view=asallproducts-allversions)

## Examples

The following examples use the [CSV](../commands/csv-command) command to run  output to a file called c:\temp\stores.csv 

### SSAS on-prem 
using --server and --database<br/>
`dscmd CSV c:\temp\stores.csv --server myserver --database "Adventure Works" --query "EVALUATE stores"`

using -c for a connectionstring<br/>
`dscmd CSV c:\temp\stores.csv -c "data source=myserver;initial catalog=Adventure Works" --query "EVALUATE stores"`
### Fabric / Power BI Premium XMLA Endpoint 

### Azure AS 

### Power BI Desktop 
Using just --server<br/>
`dscmd CSV c:\temp\stores.csv --server "Adventure Works.pbix" --query "EVALUATE stores"`

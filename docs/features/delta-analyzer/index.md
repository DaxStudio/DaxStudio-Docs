---
title: Delta Analyzer
---

:::caution Preview Feature
The Delta Analyzer is a **preview** feature. You need to turn it on in
[Options > Preview > Delta Analyzer > **Show Delta Analyzer**](/docs/features/options/options-window-standard#preview-features)
before the ribbon button appears.

Because this feature is still in preview the user interface may change before the final release.
:::

When you are tuning a **Direct Lake** semantic model, a lot of what drives the performance you see
in DAX Studio is not actually in the model - it is in the Delta tables sitting underneath it.
How many parquet files a table is spread across, how large the row groups are, whether V-Order was
applied when the files were written, and whether rows have been soft deleted with deletion vectors
all affect how quickly Direct Lake can transcode and scan a column.

The **Delta Analyzer** reads that metadata directly from the Delta log and parquet footers in
OneLake and presents it per table and per column, so you can see it alongside the DAX query
performance you are already measuring in DAX Studio.

## Requirements

The Delta Analyzer is designed for **Direct Lake** semantic models - it reads the `_delta_log`
folder and the parquet files that sit behind each table. Running it against an Import or DirectQuery
model will not return any delta metadata.

The **Delta Analyzer** button appears on the ribbon as soon as the preview option is enabled. If you
click **Analyze** while connected to something other than a Direct Lake model, the pane simply
reports that there is no data to show.

The files are read from OneLake using the identity you signed in with, so you also need OneLake data
access to the underlying Lakehouse or Warehouse item. If you do not, the affected tables are tagged
as **Access denied** in the results (see [Access denied](#access-denied) below).

## Running an analysis

Enable the feature in the options, then connect to a Direct Lake model and choose
**Delta Analyzer** from the **Metrics** group on the **Advanced** ribbon tab.

Click **Analyze** to start reading the metadata. Large models can take a little while, so a
progress indicator is shown while the analysis runs and you can click **Cancel** to stop it.

### Analysis options

The following options are available before you run the analysis. Turning options off makes the
analysis faster, at the cost of some detail.

| Option | Default | Description |
|---|---|---|
| Read parquet footers | On | Reads the parquet file footers to determine row group counts and V-Order. This is the slower part of the analysis - turning it off leaves the row group and V-Order columns blank |
| Read column stats | On | Aggregates the per-column compressed and uncompressed sizes from the parquet footers |
| Show row group details | Off | Adds an expandable **Row Groups** node under each table showing per-row-group row counts and sizes |
| OneLake path override | _(blank)_ | Optional. Lets you point the analyzer at a specific table folder, or at the `.../Tables` root that is used to rebuild the paths when automatic resolution fails |

The **OneLake path override** accepts either a `.../Tables` root or a full path to a single table
folder, for example:

```
https://onelake.dfs.fabric.microsoft.com/{workspace}/{lakehouse}/Tables
```

You should not normally need this - DAX Studio resolves the OneLake paths from the model metadata.
It is there for the cases where a model points somewhere the automatic resolution cannot follow.

## Reading the results

The results are shown on the **Metrics** tab as a tree with one row per table, which you can expand
to see the individual columns (and the row groups, if you enabled that option).

| Column | Level | Description |
|---|---|---|
| Table / Column | Both | The name of the Delta table, or of the column within it |
| Considerations | Table | An icon and count of the potential [considerations](/docs/features/delta-analyzer/considerations) found for the table. Hover over the icon to see the titles |
| Files | Table | The number of active parquet files that make up the table |
| Avg File | Table | The average size of those files |
| Max File | Table | The size of the largest file |
| Small Files | Table | How many of the files are smaller than 128 MB |
| Row Groups | Both | The number of parquet row groups. Direct Lake frames row groups directly, so these become the segments it scans |
| Min Rows/RG | Table | The row count of the smallest row group |
| Avg Rows/RG | Table | The average number of rows per row group |
| Max Rows/RG | Table | The row count of the largest row group |
| Segments | Table | A pill summarising how healthy the segment sizing is - a green **ok**, or an amber **small** when the row groups are smaller than the target size. Hover over the amber pill for details |
| Rows | Table | The total number of rows |
| Compressed | Both | The compressed (on disk) size |
| Uncompressed | Both | The uncompressed size |
| Codec | Column | The parquet compression codec used for the column |
| Encoding | Column | The parquet encoding used for the column |
| V-Order | Table | Whether V-Order was applied when the files were written. Shown as a green **v-order** pill when enabled |
| Deletion Vectors | Table | Whether any rows have been soft deleted, and how many |
| Liquid Clustering | Table | Whether liquid clustering is enabled, shown as a **liquid** pill |
| Clustering Columns | Table | The columns the table is clustered by |
| Partition Columns | Table | The columns the table is partitioned by |
| Last Modified | Table | When the table was last written to |
| Error | Table | Any error encountered while reading the metadata for the table |

:::info
V-Order can only be reported when **Read parquet footers** is enabled. If the analyzer cannot
positively identify V-Order in the file footers it reports it as *Unknown* rather than *No*.
:::

### Access denied

If the analyzer gets an HTTP 403 while reading a table's `_delta_log` or parquet files, that table
is tagged **Access denied** rather than showing metrics. This normally means OneLake Security is
restricting access to the underlying item - a workspace admin needs to grant you OneLake data
access before the table can be analyzed.

## Considerations

The **Considerations** tab aggregates the guidance for every analyzed table into a single
read-only document, grouped by table. These are potential considerations based on the metadata
that was read - they are guidance rather than hard best practices, and the right answer always
depends on your data volumes and query patterns.

You can copy the considerations to the clipboard as Markdown, or export them to a `.md` / `.txt`
file, using the buttons on that tab.

See [Delta Analyzer Considerations](/docs/features/delta-analyzer/considerations) for a description of each one and the
thresholds that trigger it.

## Exporting the analysis

The **Export CSV** button writes the current analysis - tables, columns, and any visible row
groups - out to a CSV file. The export includes a `Considerations` column listing the titles of
the considerations found for each table.

## Privacy

The Delta Analyzer calls the Fabric REST API to resolve the OneLake location of the Direct Lake
tables, and then reads the Delta log and parquet footers from OneLake over HTTPS. Both calls use
the Entra ID identity you are already signed in with. No data is sent anywhere else - only file
and column *metadata* is read, not the contents of the tables.

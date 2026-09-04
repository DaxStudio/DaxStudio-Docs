---
title: Storage Engine Dependencies
---

:::caution[Preview Feature]
Storage Engine Dependencies is a **preview** feature. You need to turn it on in
[Options > Preview > Diagrams > **Show Storage Engine Dependencies**](/docs/features/options/options-window-standard#preview-features)
before the **Dependencies** button appears in [Server Timings](/docs/features/traces/server-timings-trace).

Because this feature is still in preview the user interface may change before the final release.
:::

When you are tuning a query it can be useful to see which tables and columns the Storage Engine
actually touched. The **Storage Engine Dependencies** view builds a diagram from the xmSQL captured
by the [Server Timings](/docs/features/traces/server-timings-trace) trace, so you can see the table,
column and join dependencies behind the Storage Engine work.

## Requirements

The diagram is built from Storage Engine events, so you need to run a query with **Server Timings**
enabled before opening it. If there is no Storage Engine query data, the view reports that there is
no data to analyse.

The feature is hidden until **Show Storage Engine Dependencies** is enabled in the preview options.
Once enabled, a **Dependencies** button is shown on the Server Timings trace pane.

## Opening the diagram

1. Enable **Show Storage Engine Dependencies** in the preview options.
2. Turn on the **Server Timings** trace.
3. Run the query you want to analyse.
4. Click **Dependencies** in the Server Timings pane.

The diagram opens as a dockable tool window named **Storage Engine Dependencies**. It analyses the
Storage Engine events that are currently visible in Server Timings, so changing the Server Timings
event filters can also change the events used by the diagram.

## Reading the diagram

Each box represents a model table found in the captured Storage Engine queries. The columns listed
inside the box are the columns the parser found in the xmSQL or DirectQuery SQL text. Internal
temporary tables and internal expression columns are hidden.

Column badges show how a column was used:

| Badge | Meaning |
|---|---|
| Join Key | The column was used in a join or relationship condition |
| Filter | The column was used in a filter |
| Selected | The column was selected by the Storage Engine query |
| Expression | The column was used in a `WITH` expression |
| Callback | The column was involved in a DAX callback |
| Aggregate | An aggregation function was applied to the column |

Lines between tables represent relationships or joins derived from the captured Storage Engine
queries. Hover over a line to see the source column, target column, join type and hit count. Where
the parser can determine it, the diagram also shows cardinality and bi-directional or many-to-many
indicators.

:::note[The diagram is based on the xmSQL captured for the query run. It is not a full model diagram and it]
does not show tables or relationships that were not involved in the captured Storage Engine work.
Use the **Model Diagram** button if you want to send the referenced tables to the
[Model Diagram](/docs/features/model-diagram).
:::

## The heat map

Table headers are coloured as a relative heat map. Green indicates a lower value and red indicates
a higher value compared with the other tables in the diagram.

You can change the heat metric from the **Heat** buttons in the toolbar, or set the default in
**SE Dependencies Heat Map Mode**.

| Mode | Description |
|---|---|
| CPU Time | Colours tables by Scan CPU time. This is the default and is usually the best starting point for finding VertiPaq scan bottlenecks. DirectQuery CPU is not available, so this mode is most useful for Import and Direct Lake scan work |
| Row Count | Colours tables by the total estimated rows scanned |
| Hit Count | Colours tables by how often each table appears in the captured Storage Engine queries |

The table header also shows query counts and, where available, row count, duration, CPU, cache and
parallelism indicators.

## Navigating the diagram

The toolbar and canvas support the following navigation actions:

| Action | Description |
|---|---|
| Search | Type in the search box to highlight matching tables or columns and dim the others |
| Select | Click a table to highlight related tables and relationships. Click a column or relationship to show its details in the side panel |
| Move tables | Drag a table to reposition it. Relationship lines update as you move it |
| Collapse tables | Double-click a table header, use the collapse toggle on a table, or use **Collapse All Tables** from the canvas context menu |
| Zoom | Use **Fit**, the canvas context menu zoom commands, or hold <kbd>Ctrl</kbd> and scroll the mouse wheel over the diagram |
| Pan | Drag an empty part of the canvas, or use the scroll bars |
| Mini-map | Use **Map** to show or hide the mini-map. It is automatically shown for larger diagrams |
| SE Query filter | When multiple Storage Engine queries are available, use the **SE Query** controls or the event list to focus the diagram on one query |
| Auto-arrange | Use **Auto-Arrange Layout** from the canvas context menu to restore the automatic layout |

## Exporting

The toolbar includes the following export and copy actions:

| Action | Description |
|---|---|
| Copy Text | Copies a text summary of the tables, columns, relationships and hit counts |
| Copy Image | Copies the diagram image to the clipboard |
| Export | Exports the diagram as a PNG image. The default file name is `QueryDependencies.png` |
| Debug | Exports detailed parser diagnostics to a text file. This button is only shown when **Show Diagram Debug Button** is enabled |

The debug export dialog is titled **Export SE Dependencies Debug Info** and is intended for
troubleshooting parser issues.

## Related options

| Option | Default | Description |
|---|---|---|
| Show Storage Engine Dependencies | Off | Shows the **Dependencies** button in Server Timings to visualise table and column relationships from Storage Engine queries |
| SE Dependencies Heat Map Mode | CPU Time | Sets the default metric used to colour table headers. The available modes are **CPU Time**, **Hit Count** and **Row Count** |
| Show Diagram Debug Button | Off | Shows the **Debug** button in diagram views, including Storage Engine Dependencies, for exporting diagnostic information |

---
title: Model Diagram
---

:::caution Preview Feature
The Model Diagram is a **preview** feature. You need to turn it on in
[Options > Preview > Diagrams > **Show Model Diagram**](/docs/features/options/options-window-standard#preview-features)
before the ribbon button appears.

Because this feature is still in preview the user interface may change before the final release.
:::

The **Model Diagram** gives you a visual view of the connected model, showing tables, columns and
relationships in one canvas. It is useful when you want to understand the shape of a model, find
how tables are connected, or focus on the tables that were involved in a query.

## Requirements

The **Model Diagram** button is on the **Advanced** ribbon tab, in the **Model** group. The whole
group is hidden until the preview option is enabled.

To open the diagram you need either a connection to a model, or model metadata from a file that has
VertiPaq Analyzer data loaded. If neither is available, DAX Studio shows a warning that there is no
model data available.

Column cardinality and size values are only available after you run **View Metrics**. See
[Model Metrics](/docs/features/model-metrics) for more information about collecting VertiPaq
Analyzer data.

## Running the diagram

Enable the feature in the options, then connect to a model and choose **Model Diagram** from the
**Model** group on the **Advanced** ribbon tab.

The button has the **MD** key tip. If the diagram is already open, clicking the button brings the
existing pane back into view rather than creating a second diagram.

The diagram can also be opened from the **Server Timings** and **Storage Engine Dependencies** views
to show only the tables referenced by the storage engine queries. In that case DAX Studio opens the
same Model Diagram pane and filters it to the query-dependent tables.

## Using the diagram

The diagram opens as a docked tool window with a toolbar above the canvas and a status bar below it.
Tables can be moved by dragging them. DAX Studio saves the layout for the model and reuses it the
next time the diagram is opened.

| Area | Description |
|---|---|
| Canvas | Shows table cards, relationship lines and annotations. Drag the empty canvas to pan. Right-click the canvas for layout, zoom, selection, annotation and export actions |
| Table cards | Show the table name, columns, measures and relationship count. Expand or collapse a table from its header, or right-click it for table actions |
| Relationships | Show cardinality at both ends and filter direction in the middle. Bi-directional, many-to-many and inactive relationships are highlighted |
| Search box | Searches table and column names. Non-matching tables and columns are dimmed rather than removed |
| Mini-map | The **Map** toggle shows an overview panel in the bottom-right corner. Click the mini-map to move the main view |
| Status bar | Shows the count of tables, columns and relationships, plus the legend for table and relationship types |

### Toolbar actions

| Action | Description |
|---|---|
| Clear | Clears the current table selection |
| Export | Exports the diagram to a PNG file |
| Copy | Copies the diagram image to the clipboard |
| Layout | Re-arranges the visible tables using the selected layout algorithm |
| Layout selector | Chooses the layout algorithm used by **Layout** |
| Undo | Undoes the last layout change, when one is available |
| Fit | Zooms to fit the visible tables |
| Map | Shows or hides the mini-map |
| Show | Toggles variation tables, hidden objects and disconnected tables |
| Snap | Snaps dragged tables to a 20 pixel grid |
| Related First | Sorts relationship columns before other columns in each table |
| Table filter | Shows all tables or only date tables |
| Perspective selector | Switches between model perspectives when more than one is available |
| Sort | Sorts columns by name, cardinality or size when VertiPaq Analyzer data is available |
| Stat | Chooses which VertiPaq Analyzer statistic is displayed beside columns |
| Zoom controls | Zoom out, zoom in, or reset to 100% |

The **Debug** button is only shown when **Show Diagram Debug Button** is enabled in the preview
options. It exports diagnostic information for troubleshooting.

## Reading the diagram

Each table card uses colour and badges to show the type of table and the number of columns,
measures and relationships. Table tooltips include the table name, DAX reference, description,
column count, measure count and relationship count. When VertiPaq Analyzer data is available they
also include row count, table size and storage mode.

Columns show their object icon and name. Column tooltips can include the DAX reference, description,
data type, format string, size, encoding, distinct values, min/max values, key and relationship
markers, sort-by column and sample data, depending on what metadata is available.

Relationship lines include cardinality markers at each end and a filter-direction marker in the
middle. Inactive relationships are shown with a dashed line, many-to-many relationships are coloured
separately, and bi-directional relationships use a separate filter-direction indicator.

## Selecting and focusing tables

Click a table to select it. Use **Ctrl+click** to select more than one table. Selected tables can
be dragged together.

Right-clicking a table gives you actions to copy the table name or DAX reference, jump to the
metadata pane, collapse or expand the table, show related tables, isolate connected tables, hide the
table, hide unselected tables, or show all tables again.

Right-clicking a column lets you copy the column name or DAX reference.

## Keyboard shortcuts

| Shortcut | Action |
|---|---|
| Arrow keys | Move selection to a nearby table |
| Ctrl+Arrow keys | Nudge selected tables by 10 pixels |
| Tab / Shift+Tab | Cycle through connected tables |
| Esc | Clear the current selection |
| Delete | Hide selected tables |
| Ctrl+A | Select all tables |
| Ctrl+P | Highlight the path between two selected tables |
| Ctrl+Z | Undo the last layout change |
| Ctrl+Plus / Ctrl+Minus | Zoom in or out |
| Ctrl+0 | Reset zoom to 100% |
| Ctrl+mouse wheel | Zoom in or out |

## Column statistics

The diagram can show VertiPaq Analyzer statistics beside each column, but those values are only
loaded after you run **View Metrics** or open a file that contains VertiPaq Analyzer data. Until that
data is available, the **Sort** and **Stat** controls are hidden and the column statistics options do
not affect the diagram.

The column statistic options are:

| Option value | Description |
|---|---|
| None | Do not show a statistic beside columns |
| Cardinality | Show the column cardinality |
| Size | Show the column size |

The column sort options are:

| Option value | Description |
|---|---|
| Name | Sort columns by name |
| Cardinality &#8595; | Sort columns by cardinality descending, then by name |
| Size &#8595; | Sort columns by size descending, then by name |

## Layout options

The layout selector in the toolbar uses the same setting as the **Model Diagram Layout** option.

| Option value | Description |
|---|---|
| Auto | Selects an algorithm based on the visible table count: **Hierarchy** for 15 or fewer tables, **Grid** for 16 to 50 tables, and **Clustered** for more than 50 tables |
| Hierarchy | Uses a layered layout intended to show relationship hierarchy |
| Grid | Uses a compact grid layout |
| Clustered | Groups connected tables into compact clusters |
| Force Directed | Uses a force-directed layout that attempts to reduce relationship overlap |

You can also right-click the canvas to auto-arrange, arrange by group, auto-group by prefix, clear
all groups, clear the saved layout, zoom to a selection, or choose a fixed zoom level.

## Annotations

Right-click the canvas and choose **Add Annotation** to add a text note to the diagram. Annotations
can be moved, resized, edited, formatted as bold or italic, given a different font size or colour,
and deleted. Annotations are included when you export or copy the diagram image.

## Exporting

Use **Export** to save the current diagram as a `.png` file. Use **Copy** to copy the same rendered
image to the clipboard. The exported image includes the diagram content and the status bar legend.

If **Show Diagram Debug Button** is enabled, the **Debug** button exports a `.txt` file containing
diagnostic details about the loaded tables, columns, relationships, layout and VertiPaq Analyzer
enrichment.

## Related options

All of these settings are under **Options > Preview > Diagrams**.

| Option | Default | Description |
|---|---|---|
| Show Model Diagram | Off | Enables the Model Diagram feature to visualize the data model structure including tables, columns, and relationships. The option warns that the UI may change before the final release |
| Model Diagram Column Stat | Cardinality | Chooses which statistic to display on columns after running **View Metrics**. Values: `None`, `Cardinality`, `Size` |
| Model Diagram Column Sort | Name | Chooses how to sort columns in table cards. Values: `Name`, `Cardinality ↓`, `Size ↓` |
| Model Diagram Layout | Auto | Chooses the layout algorithm. Values: `Auto`, `Hierarchy`, `Grid`, `Clustered`, `Force Directed` |
| Show Diagram Debug Button | Off | Shows the **Debug** button in diagram views for exporting diagnostic information |



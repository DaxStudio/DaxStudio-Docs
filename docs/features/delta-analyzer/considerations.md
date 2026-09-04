---
title: Considerations
---

When the [Delta Analyzer](/docs/features/delta-analyzer) finishes an analysis it looks at the metadata it collected and
raises a set of **considerations** for each table.

:::info[These are *potential* considerations - guidance based on the metadata that was read, rather than]
hard best practices. Whether any of them are worth acting on depends on your data volumes, your
refresh patterns and your query patterns.
:::

Considerations are surfaced in two places:

* the **Considerations** column in the results grid shows an icon and a count for each table.
  A warning triangle means at least one consideration is worth reviewing, otherwise an info glyph
  is shown. Hovering over the icon lists the titles.
* the **Considerations** tab aggregates the full detail for every table into a single document,
  which you can copy to the clipboard as Markdown or export to a `.md` / `.txt` file.

Tables that could not be read because of [access denied](/docs/features/delta-analyzer#access-denied) errors are skipped -
there is no metadata to reason about, so no considerations are raised for them.

## Consider enabling V-Order

**Raised when** the parquet footers were read and V-Order could not be confirmed as enabled.

V-Order is a write-time optimisation that improves how quickly Direct Lake can scan and transcode
a column. Fabric only writes the `vorder` key into the parquet metadata when V-Order is on, so a
table without it reads back either as explicitly off or - more commonly - as unknown. Both cases
raise this consideration.

Rewriting the table with V-Order enabled (for example running `OPTIMIZE` with V-Order on) can
improve Direct Lake performance. It does add some cost when writing, so it is worth weighing
against how often the table is refreshed.

:::note[This consideration can only be raised when the **Read parquet footers** option was enabled for the]
analysis, since that is where the V-Order metadata is read from.
:::

## Consider compacting small files

**Raised when** a table has more than one file, at least 2 files are below 128 MB, and those small
files make up **30% or more** of the table's files.

Every parquet file a table is spread across adds file-open and transcoding overhead for Direct
Lake. Running `OPTIMIZE` to compact many small files into fewer, larger files usually reduces that
overhead.

## Row groups are smaller than the target size

**Raised when** a table has more than one row group and the row groups average fewer than
**1,000,000 rows**.

Direct Lake frames parquet row groups directly, so the row groups become the segments it scans.
Row groups that are much smaller than the target produce more, sparser segments than ideal, and
denser row groups generally scan more efficiently.

This is very much a guideline rather than a rule - keeping up to around 16 row groups can help
scan parallelism, so a small number of undersized row groups is not necessarily a problem. As a
rough target, 8-16 million rows per row group is often a good place to land.

## Row groups may be too large

**Raised when** the largest row group in a table has more than **16,000,000 rows**.

At the other end of the scale, very large row groups can reduce scan parallelism and have a
negative impact on performance. Rewriting the table (or running `OPTIMIZE`) so that row groups
stay in the 8-16 million row range may help.

## Consider purging deletion vectors

**Raised when** a table has any deletion vectors. It is flagged as worth reviewing once the soft
deleted rows make up **5% or more** of the table's rows.

Deletion vectors let a Delta table mark rows as deleted without rewriting the underlying parquet
files. The rows are logically gone, but they are still physically present - and Direct Lake still
has to read them until they are purged.

Running `REORG TABLE ... APPLY (PURGE)` (or `OPTIMIZE`) physically removes the soft deleted rows.

## Review partitioning strategy

**Raised when** a table has partition columns.

Direct Lake generally prefers fewer, larger files, and partitioning fragments a table into more -
and usually smaller - files. This consideration is flagged as worth reviewing when partitioning
has also produced a significant number of small files (at least 2 files below 128 MB, making up
30% or more of the table's files); otherwise it is informational.

Partitioning is not automatically a problem. It can still be worthwhile when the partition column
is used as a filter in most queries - a date column being the classic example. Where it is not,
liquid clustering combined with `OPTIMIZE` is often a better alternative.

---
title: Server FE Benchmark
---

The FE Benchmark feature runs a standard formula engine only query against the current data source. It produces a FE Benchmark number that should help in estimating the expected performance in production.

If your laptop runs a query in 2 seconds and it's index is 200, then if you run the same query on a server that has an index 100 we should expect roughly 4 seconds ie. the query will take twice as long since the benchmark score was half.

:::note
This assumes that the queries are largely bound by CPU time, differences in performance could also be impacted by things like:
* memory access speed
* other processes consuming resources on the machine
:::
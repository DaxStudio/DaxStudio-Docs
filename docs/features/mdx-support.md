---
title: MDX Support
---

In addition to running DAX queries you can also execute [MDX](https://learn.microsoft.com/en-us/sql/mdx/mdx-language-reference-mdx?view=sql-server-ver16) queries from DAX Studio.

The ability to execute MDX is provided by the Microsoft tabular engine. DAX Studio just sends the query text to the data source and displays the results.

## Limitations

MDX queries have the following limitations:
* the syntax highlighting does not support the MDX language
* DAX Studio does not provide MDX code completion
* DAX Studio only shows the raw data, it does not request the additional formatting information that can be set in a multi-dimensoinal model (eg. background color, foreground color, format string, etc)

## Performance

The performance of DAX Studio should be similar to running MDX queries from other tools. Note however that MDX queries have 2 possible ways of returning data:
* Rowset - a 2 dimensional array of rows and columns
* Cellset - a multidimensional structure

DAX queries only return data using the rowset format so this is the structure DAX Studio uses. This is also the format used by tools like Report Builder. Excel on the other hand uses the Cellset format so it is possible that you may see some difference in performance between tools like Excel which use cellsets and tools like DAX Studio which use rowsets.

MDX also has different caching characteristics and different internal semantics, so you will see performance difference between an MDX query and an equivalent DAX query.

## Other Tools

If you are specifically interested in working with MDX queries there is a tool called [MDX Studio](https://www.sqlbi.com/tools/mdx-studio/) which is specifically targeted at working with the MDX language.
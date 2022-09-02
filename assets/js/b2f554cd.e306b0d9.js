"use strict";(self.webpackChunkdaxstudio_docusaurus=self.webpackChunkdaxstudio_docusaurus||[]).push([[1477],{30010:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"v3-release","metadata":{"permalink":"/blog/v3-release","source":"@site/blog/2022-08-24-v3-released/index.md","title":"v3 Release","description":"Today we are happy to announce the release of version 3 of DAX Studio","date":"2022-08-24T00:00:00.000Z","formattedDate":"August 24, 2022","tags":[{"label":"daxstudio","permalink":"/blog/tags/daxstudio"}],"readingTime":3.63,"hasTruncateMarker":false,"authors":[{"name":"Darren Gosbell","title":"Maintainer of DAX Studio","url":"https://github.com/dgosbell","imageURL":"https://github.com/dgosbell.png","key":"dgosbell"}],"frontMatter":{"slug":"v3-release","title":"v3 Release","authors":["dgosbell"],"tags":["daxstudio"]},"nextItem":{"title":"Welcome","permalink":"/blog/welcome"}},"content":"Today we are happy to announce the release of version 3 of DAX Studio\\n\\n## Dark Mode!\\n\\nThis has been an outstanding request for a long time and finally we are happy to announce that we now support Dark Mode! You can switch between the 3 different mode settings using the button at the top of the ribbon\\n\\n![](mode-button.png)\\n\\n* ![auto mode icon](auto-mode.png) Auto-detect - attempts to set the appropriate mode based off the preferences in the Operating System (should work for Windows 10 or higher)\\n* ![light mode icon](light-mode.png) Light mode\\n* ![dark mode icon](dark-mode.png) Dark mode\\n\\n## A clean, modern User Interface\\n\\nWith the help of the amazing Daniele at SQLBI we now have a clean, modern update to the user interface including new icons and visual styling\\n\\n![](modern-ui.png)\\n\\nA couple of important changes worth noting are:\\n* document tabs have been moved to the bottom\\n* Metadata, Functions and DMV tabs have been moved to the top of their area\\n* the tabs for Results, Logs, Traces have been move to the top of their area\\n\\n## New Ribbon options\\n\\nIn addition to being able to collapse the ribbon there is now also an option to show a simplified view\\n\\n![](ribbon-options.png)\\n\\nThis view takes up less vertical space while still keeping the most commonly used features easily accessible.\\n\\n![](simplified-ribbon.png)\\n\\n## Tracing Improvements\\n\\nThe internal tracing engine has been re-architected internally which will make it easier to add new trace types in future and it should also have fixed the issue where sometimes the trace data would \\n\\nIn addition the following enhancements have been made to the existing traces:\\n\\n### Server Timings - Waterfall column\\n\\nA \\"waterfall\\" column has now been added to the Server Timings tab. This gives you a quick visual indication of which Storage Engine queries took the longest and where they\\n\\n![](servertimings-waterfall.png)\\n\\n### Query Plan - child operation indicator\\n\\nThe Query Plan trace will now show a dashed line to indicate operations that are children of the currently selected row. This \\n\\n![](queryplan-child-operations.png)\\n\\n### All Queries\\n\\nThe All Queries trace can now be run in parallel with other trace types. You used to have to either stop other traces or run them in a different document, but now all the different traces can be run at the same time if you need to. \\n\\n:::info\\nJust take note that traces do add some extra load to the Tabular Engine, so it\'s a good idea to stop them when you have finished collecting the data you needed.\\n:::\\n\\n\\n## View As\\n\\nA new **View As** option has been added in the **Advanced** tab to enable easy testing of RLS roles\\n![](viewas-button.png)\\n\\nThis enables for both testing the functionality of the selected role to make sure queries return the correctly filtered data and you can run Server Timings traces to measure the impact of these roles on your queries.\\n\\nWhen it is active the **View As** option shows a yellow information bar at the top of the query editor. You can exit out of the **View As** mode by clicking on the X in the right hand side of the information bar\\n\\n![](./viewas-results.png)\\n\\nTo make performance comparisons even easier a new option has been added to the Benchmark feature which is enabled when you start the benchmark while you have **View As** active.\\n\\n![](benchmark-rls.png)\\n\\nWhen you tick the option to do a second pass the benchmark results will include a second set of columns in the results for those passes where the RLS role was active\\n\\n![](benchmark-rls-results.png)\\n\\n\\n\\n\\n\\n# Other Updates / Fixes\\n\\nThe following lists other minor fixes and improvements that have been added since the previous release\\n\\n## Updates\\n* [#826](https://github.com/daxstudio/daxstudio/issues/826) added PowerPivot model detection timeout in options\\n* Updating syntax highlighting to handle multi-line strings\\n* Added highlighting of cache nodes in physical query plans\\n* Improved state tracking for trace windows\\n* Prevented interleaving of clearcache with query execution\\n* Width of the connection dialog has been increased \\n\\n## Fixes\\n* Fixed [#764](https://github.com/daxstudio/daxstudio/issues/764) error when running from cmd prompt\\n* Fixed [#799](https://github.com/daxstudio/daxstudio/issues/799) error when opening querybuilder files from older versions\\n* Fixed [#812](https://github.com/daxstudio/daxstudio/issues/812) using FIPS compliant hash\\n* Fixed [#816](https://github.com/daxstudio/daxstudio/issues/816) database dropdown too small\\n* Fixed [#838](https://github.com/daxstudio/daxstudio/issues/838) added support for custom datetime formats when exporting to xlsx\\n* Fixed [#841](https://github.com/daxstudio/daxstudio/issues/841) allowed for loading of performance data where component information was missing"},{"id":"welcome","metadata":{"permalink":"/blog/welcome","source":"@site/blog/2022-08-20-welcome/index.md","title":"Welcome","description":"Welcome to the DAX Studio blog.","date":"2022-08-20T00:00:00.000Z","formattedDate":"August 20, 2022","tags":[{"label":"daxstudio","permalink":"/blog/tags/daxstudio"}],"readingTime":0.105,"hasTruncateMarker":false,"authors":[{"name":"Darren Gosbell","title":"Maintainer of DAX Studio","url":"https://github.com/dgosbell","imageURL":"https://github.com/dgosbell.png","key":"dgosbell"}],"frontMatter":{"slug":"welcome","title":"Welcome","authors":["dgosbell"],"tags":["daxstudio"]},"prevItem":{"title":"v3 Release","permalink":"/blog/v3-release"}},"content":"Welcome to the DAX Studio blog.\\n\\nThis is an area where we will put content of interest to DAX Studio users"}]}')}}]);
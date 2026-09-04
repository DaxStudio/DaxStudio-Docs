---
title: Version notifications
---

When it starts up DAX Studio will periodically check whether an updated release is available.

When a newer version is found an **Update Available** pill appears in the title bar. Hovering over
it shows which version was found, and clicking on it opens the download page in your browser.

:::info[New in 3.6.0]
Version notifications used to be shown as a pop-up balloon from an icon in the Windows notification
area. From version 3.6.0 the notification is shown inside the main DAX Studio window instead, so it
no longer relies on a tray icon.
:::

## Pre-release notifications

By default DAX Studio only tells you about stable releases. If you want to be notified about
pre-release (preview) builds as well, turn on
[**Show Pre-Release Notifications**](/docs/features/options/options-window-standard#notifications) in
**Options > Defaults > Notifications**.

When this option is enabled and a pre-release build is available the pill reads
**Preview Update Available**, so you can always tell the two apart, and clicking it takes you to
the preview download page.

:::caution[Pre-release builds may contain new features that are still being tested. If you rely on DAX Studio]
for day to day work you should generally stay on the stable releases.
:::

Changing this option takes effect straight away - DAX Studio re-runs the version check as soon as
you change it rather than waiting until the next time it starts.

## Turning notifications off

Launching DAX Studio with the [`--nopreview`](/docs/features/startup-parameters) command line option suppresses
the update notification. This is useful if you are recording a demo or presenting and do not want
an update notification appearing in the title bar.

If you need to prevent DAX Studio from contacting the internet at all, including the version check,
see the `blockallinternetaccess` task in the
[installer options](/docs/installation/command-line-install#tasks) and the
[Privacy settings](/docs/features/privacy-settings) page.
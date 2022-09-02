"use strict";(self.webpackChunkdaxstudio_docusaurus=self.webpackChunkdaxstudio_docusaurus||[]).push([[3055],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>p});var o=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=o.createContext({}),g=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=g(e.components);return o.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),u=g(n),p=i,h=u["".concat(s,".").concat(p)]||u[p]||c[p]||a;return n?o.createElement(h,l(l({ref:t},d),{},{components:n})):o.createElement(h,l({ref:t},d))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=u;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:i,l[1]=r;for(var g=2;g<a;g++)l[g]=n[g];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},83987:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>a,metadata:()=>r,toc:()=>g});var o=n(87462),i=(n(67294),n(3905));const a={title:"Logging Settings"},l=void 0,r={unversionedId:"troubleshooting/logging-settings",id:"troubleshooting/logging-settings",title:"Logging Settings",description:"Enabling Diagnostic Logging - Standalone",source:"@site/docs/troubleshooting/logging-settings.md",sourceDirName:"troubleshooting",slug:"/troubleshooting/logging-settings",permalink:"/docs/troubleshooting/logging-settings",draft:!1,tags:[],version:"current",frontMatter:{title:"Logging Settings"},sidebar:"tutorialSidebar",previous:{title:"Dependency Checks",permalink:"/docs/troubleshooting/dependency script"},next:{title:"Videos",permalink:"/docs/Videos"}},s={},g=[{value:"Enabling Diagnostic Logging - Standalone",id:"enabling-diagnostic-logging---standalone",level:2},{value:"Enabling Diagnostic Logging - Excel Addin",id:"enabling-diagnostic-logging---excel-addin",level:2},{value:"Log Folder Location",id:"log-folder-location",level:2},{value:"Manually Enabling Diagnostic Logging",id:"manually-enabling-diagnostic-logging",level:2},{value:"Start up Logging",id:"start-up-logging",level:2}],d={toc:g};function c(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,o.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"enabling-diagnostic-logging---standalone"},"Enabling Diagnostic Logging - Standalone"),(0,i.kt)("p",null,"As of v2.7.0 you can enable diagnostic logging in DAX Studio by holding down the left SHIFT key while starting the application. If you are having issues with the Excel addin you need to hold down the SHIFT key while Excel is starting up. "),(0,i.kt)("h2",{id:"enabling-diagnostic-logging---excel-addin"},"Enabling Diagnostic Logging - Excel Addin"),(0,i.kt)("p",null,"The Excel addin can create it's own separate log file. If you are having issues with the Excel addin you need to hold down the SHIFT key while Excel is starting up. So if you have any Excel windows open you need to close all of those then hold the SHIFT key down while Excel starts up until you see the main Excel window open. If you watch the Excel splash screen carefully you should see a message as it loads the DAX Studio addin - it is at this point that the addin checks to see if the SHIFT key is being held down.  "),(0,i.kt)("h2",{id:"log-folder-location"},"Log Folder Location"),(0,i.kt)("p",null,"Logs are stored in the ",(0,i.kt)("inlineCode",{parentName:"p"},"%LOCALAPPDATA%\\DaxStudio\\log")," folder. You can either paste this address into the Windows Explorer address bar or the Help - About window also has a link to this location."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(76611).Z,width:"490",height:"195"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Note:")," the following sections are included for completeness, but holding the ",(0,i.kt)("inlineCode",{parentName:"p"},"SHIFT")," key at startup and the functionality now available in ",(0,i.kt)("a",{parentName:"p",href:"../daxstudio-checker"},"DAX Studio Checker")," supercedes the need to manually enable logging or check dependencies")),(0,i.kt)("h2",{id:"manually-enabling-diagnostic-logging"},"Manually Enabling Diagnostic Logging"),(0,i.kt)("p",null,"You can manually enable detailed application logging by enabling serilog in the daxstudio.exe.config file."),(0,i.kt)("p",null,"The start of the daxstudio.exe.config file looks like the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" encoding="utf-8"?>\n<configuration>\n  \x3c!--\n  <appSettings>\n    <add key="serilog:minimum-level" value="Verbose" />\n    <add key="serilog:write-to:RollingFile.pathFormat" value="D:\\temp\\DaxStudio-{Date}.txt" />\n    <add key="serilog:write-to:RollingFile.retainedFileCountLimit" value="10" />\n  </appSettings>\n  --\x3e\n  <runtime>\n  .....\n')),(0,i.kt)("p",null,"To capture a detailed application log perform the following steps:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"remove the ",(0,i.kt)("code",null,"<","!--")," comment start from before the ",(0,i.kt)("code",null,"<","appSettings",">")," tag and the ",(0,i.kt)("code",null,"--",">")," comment end tag from after the ","<","/appSettings",">"," tag"),(0,i.kt)("li",{parentName:"ol"},"change the value for the ",(0,i.kt)("code",null,"pathFormat")," section to point to a folder on your system"),(0,i.kt)("li",{parentName:"ol"},"repeat the steps that trigger the error"),(0,i.kt)("li",{parentName:"ol"},"add the ",(0,i.kt)("code",null,"<","!--")," start and end ",(0,i.kt)("code",null,"--",">")," comment tags back to switch off the logging")),(0,i.kt)("h1",{id:""}),(0,i.kt)("h1",{id:"manually-enabling-excel-add-in-logging"},"Manually enabling Excel add-in logging"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Same as above except the config file is called Daxstudio.",(0,i.kt)("strong",{parentName:"em"},"dll"),".config")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"}," The start-up ",(0,i.kt)("em",{parentName:"p"},"fusion")," logging detailed below can now be more easily enabled and disabled using the ",(0,i.kt)("a",{parentName:"p",href:"../daxstudio-checker"},"DAX Studio Checker")," tool")),(0,i.kt)("h2",{id:"start-up-logging"},"Start up Logging"),(0,i.kt)("p",null,'If Dax Studio fails to even start up this often points to a problem with the dependencies. If this is the case the application crash happens before the application logging above is initialized so it is not able to trap the error. To capture these issues we need to enable a feature of the .Net called "Fusion" logging. Fusion is the part of the .Net framework that finds and load dependencies.'),(0,i.kt)("p",null,"Start by creating a text file on your desktop called FusionLogOn.txt and paste the following code in"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'Windows Registry Editor Version 5.00\n\n[HKEY_LOCAL_MACHINE\\SOFTWARE\\Microsoft\\Fusion](HKEY_LOCAL_MACHINE_SOFTWARE_Microsoft_Fusion)\n"LogFailures"=dword:00000001\n"LogPath"="d:\\\\data\\\\fusion\\\\"\n')),(0,i.kt)("p",null,"Note that the back slashes need to be doubled up and that the LogPath should point to an empty folder (Fusion will create a sub-folder with a file for each binding error."),(0,i.kt)("p",null,"Then rename the file from a .txt extension to a .reg - the icon should change to document with a stack of blue cubes next to it. Double-clicking on the .reg file will merge these settings into your registry."),(0,i.kt)("p",null,"Then try to run DaxStudio once, it should generate some logs files in the folder you specified. These are just htm files and you can view their contents with any text editor. "),(0,i.kt)("p",null,"After this it's important to turn the Fusion logging off as it is a machine wide setting that will log the start up of any .Net program"),(0,i.kt)("p",null,"To do that create a text file called FusionLogOff.txt with the following content"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'Windows Registry Editor Version 5.00\n\n[HKEY_LOCAL_MACHINE\\SOFTWARE\\Microsoft\\Fusion](HKEY_LOCAL_MACHINE_SOFTWARE_Microsoft_Fusion)\n"LogFailures"=dword:00000000\n')),(0,i.kt)("p",null,"And then rename the extension from .txt to .reg and double click the file"),(0,i.kt)("p",null,"You can then zip up the contents of the log folder and add it as an attachment to an issue."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"}," Note that there should always be some output from the Fusion log as there is an optional theme that the AvalonDock component looks for which is not used in DaxStudio.")))}c.isMDXComponent=!0},76611:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/Help-About-33d63cf2a295cb66016758ae0cf5ca8a.png"}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"3YZ9":function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return s})),n.d(t,"default",(function(){return d}));n("5hJT"),n("W1QL"),n("K/PF"),n("t91x"),n("75LO"),n("PJhk"),n("mXGw");var o=n("/FXl"),a=n("TjRS"),i=n("cDWM"),r=n("y0yt");n("aD51");function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}var s={};void 0!==s&&s&&s===Object(s)&&Object.isExtensible(s)&&!s.hasOwnProperty("__filemeta")&&Object.defineProperty(s,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/conceptual/setup-and-start-recording.mdx"}});var l={_frontmatter:s},p=a.a;function d(e){var t,n=e.components,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["components"]);return Object(o.b)(p,c({},l,a,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"setup--start-recording"},"Setup & Start Recording"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"This section deals with how to setup Smartlook SDK and start recording your app.")),Object(o.b)("p",null,"To start recording, just put the following code into your application. Once you run your app on a device or in a simulator, recording will appear in your dashboard (link to the dashboard)."),Object(o.b)("p",null,"In order to function properly, the setup should happen as soon as possible in the app life cycle:"),Object(o.b)(i.a,{snippets:{android:(t={java:"\nSmartlook.setupAndStartRecording(String YOUR_API_KEY)\n \n// TODO: notes when using this other method \nSmartlook.setup(String YOUR_API_KEY, Activity activity)\n      ",kotlin:"\nandroid kotlin snippet\n      "},t.kotlin="\nandroid kotlin snippet\n      ",t),ios:{swift:'\ninclude Smartlook\n \n...\n \nfunc application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {\n \n   Smartlook.setup(key: "YOUR_API_KEY")\n   Smartlook.startRecording()\n}\n      ',objc:'\n#include Smartlook\n \n...\n \nfunc application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {\n \n   Smartlook.setup(key: "YOUR_API_KEY")\n   Smartlook.startRecording()\n}      '},react:{js:'\n// Smartlook initialization\nvar Smartlook = require("smartlook-react-native-wrapper"); \nSmartlook.setupAndStartRecording("API_KEY");\n      '},ionic:{js:"\nIonic javascript\n      ",typescript:"\nIonic typescript\n      "},cordova:{js:"\nCordova javascript\n      ",typescript:"\nCordova typescript\n      "},xamarin:{csharp:"\nXamarin C#\n      "},unity:{csharp:"\nUnity C#\n      "},unreal:{csharp:"\nUnreal C#\n      "},cocos:{cpp:"\nCocos C++\n      ",lua:"\nCocos lua\n   "},flutter:{dart:"\n      Smartlook.setupAndStartRecording('YOUR_API_KEY');\n   "}},mdxType:"CodeBlock"}),Object(o.b)("p",null,"This is basically all you need to record your sessions. All other events in the app life cycle are handled by Smartlook automatically."),Object(o.b)("p",null,"Note: common startup issues: "),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"it may take several minutes before the recordings appear in the Dashboard. The recording is not streamed, it is uploaded in chunks and then processed on the server. "),Object(o.b)("li",{parentName:"ul"},"in the default setup, recordings are not uploaded when the device is on a mobile network. In order to see the recordings immediately, please make sure the device is on WiFi (link to documentation & dashboard). ")),Object(o.b)(r.a,{visibleOn:"ios",mdxType:"TextBlock"},(function(e){return Object(o.b)("div",null,"NOTE: When debugging your app with Smartlook, you will encounter a Main Thread Checker warning which might be accompanied by a short app freeze during the app start. The freeze does not happen in production builds. For details, see this ",Object(o.b)("a",{href:"/cookbook/ios-main-thread-check-warning"},"technical note"),".")})),Object(o.b)("h2",{id:"setup-options-overview"},"Setup Options Overview"),Object(o.b)("p",null,"Smartlook recording could be customized by several parameters. Some of the recording customization options could be set by dedicated methods, some others can be only/also set as startup options."),Object(o.b)("p",null,"Not all options are available on all platforms. For most options, there is also a dedicated method or property that can set it later in the app life-cycle."),Object(o.b)("p",null,"For comprehensive list of all options and other details, consult ",Object(o.b)("a",c({parentName:"p"},{href:"http://localhost:3000/api_reference/#setup-configuration"}),"API reference"),"."))}void 0!==d&&d&&d===Object(d)&&Object.isExtensible(d)&&!d.hasOwnProperty("__filemeta")&&Object.defineProperty(d,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/conceptual/setup-and-start-recording.mdx"}}),d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-conceptual-setup-and-start-recording-mdx-586a24b76ca103e711cb.js.map
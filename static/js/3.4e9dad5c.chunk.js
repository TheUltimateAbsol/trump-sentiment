(this.webpackJsonpsentiment=this.webpackJsonpsentiment||[]).push([[3],{16:function(t,n,e){"use strict";e.r(n),e.d(n,"getCLS",(function(){return m})),e.d(n,"getFCP",(function(){return g})),e.d(n,"getFID",(function(){return h})),e.d(n,"getLCP",(function(){return y})),e.d(n,"getTTFB",(function(){return F}));var i,a,r=function(){return"".concat(Date.now(),"-").concat(Math.floor(8999999999999*Math.random())+1e12)},o=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:-1;return{name:t,value:n,delta:0,entries:[],id:r(),isFinal:!1}},u=function(t,n){try{if(PerformanceObserver.supportedEntryTypes.includes(t)){var e=new PerformanceObserver((function(t){return t.getEntries().map(n)}));return e.observe({type:t,buffered:!0}),e}}catch(t){}},s=!1,c=!1,d=function(t){s=!t.persisted},f=function(){addEventListener("pagehide",d),addEventListener("beforeunload",(function(){}))},p=function(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];c||(f(),c=!0),addEventListener("visibilitychange",(function(n){var e=n.timeStamp;"hidden"===document.visibilityState&&t({timeStamp:e,isUnloading:s})}),{capture:!0,once:n})},l=function(t,n,e,i){var a;return function(){e&&n.isFinal&&e.disconnect(),n.value>=0&&(i||n.isFinal||"hidden"===document.visibilityState)&&(n.delta=n.value-(a||0),(n.delta||n.isFinal||void 0===a)&&(t(n),a=n.value))}},m=function(t){var n,e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=o("CLS",0),a=function(t){t.hadRecentInput||(i.value+=t.value,i.entries.push(t),n())},r=u("layout-shift",a);r&&(n=l(t,i,r,e),p((function(t){var e=t.isUnloading;r.takeRecords().map(a),e&&(i.isFinal=!0),n()})))},v=function(){return void 0===i&&(i="hidden"===document.visibilityState?0:1/0,p((function(t){var n=t.timeStamp;return i=n}),!0)),{get timeStamp(){return i}}},g=function(t){var n,e=o("FCP"),i=v(),a=u("paint",(function(t){"first-contentful-paint"===t.name&&t.startTime<i.timeStamp&&(e.value=t.startTime,e.isFinal=!0,e.entries.push(t),n())}));a&&(n=l(t,e,a))},h=function(t){var n=o("FID"),e=v(),i=function(t){t.startTime<e.timeStamp&&(n.value=t.processingStart-t.startTime,n.entries.push(t),n.isFinal=!0,r())},a=u("first-input",i),r=l(t,n,a);a?p((function(){a.takeRecords().map(i),a.disconnect()}),!0):window.perfMetrics&&window.perfMetrics.onFirstInputDelay&&window.perfMetrics.onFirstInputDelay((function(t,i){i.timeStamp<e.timeStamp&&(n.value=t,n.isFinal=!0,n.entries=[{entryType:"first-input",name:i.type,target:i.target,cancelable:i.cancelable,startTime:i.timeStamp,processingStart:i.timeStamp+t}],r())}))},S=function(){return a||(a=new Promise((function(t){return["scroll","keydown","pointerdown"].map((function(n){addEventListener(n,t,{once:!0,passive:!0,capture:!0})}))}))),a},y=function(t){var n,e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=o("LCP"),a=v(),r=function(t){var e=t.startTime;e<a.timeStamp?(i.value=e,i.entries.push(t)):i.isFinal=!0,n()},s=u("largest-contentful-paint",r);if(s){n=l(t,i,s,e);var c=function(){i.isFinal||(s.takeRecords().map(r),i.isFinal=!0,n())};S().then(c),p(c,!0)}},F=function(t){var n,e=o("TTFB");n=function(){try{var n=performance.getEntriesByType("navigation")[0]||function(){var t=performance.timing,n={entryType:"navigation",startTime:0};for(var e in t)"navigationStart"!==e&&"toJSON"!==e&&(n[e]=Math.max(t[e]-t.navigationStart,0));return n}();e.value=e.delta=n.responseStart,e.entries=[n],e.isFinal=!0,t(e)}catch(t){}},"complete"===document.readyState?setTimeout(n,0):addEventListener("pageshow",n)}}}]);
//# sourceMappingURL=3.4e9dad5c.chunk.js.map
webpackJsonp([1],{40:function(n,e){},41:function(n,e,t){t(87);var r=t(14)(t(48),t(95),"data-v-2df95543",null);n.exports=r.exports},42:function(n,e,t){t(86);var r=t(14)(t(49),t(94),"data-v-2ca90776",null);n.exports=r.exports},43:function(n,e,t){t(85);var r=t(14)(t(46),t(93),"data-v-288975d1",null);n.exports=r.exports},44:function(n,e,t){t(88);var r=t(14)(t(47),t(96),"data-v-b76f4cbc",null);n.exports=r.exports},46:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=t(15),o=t.n(r),i=t(25),s=t.n(i),a=t(24),u=t.n(a),l=t(42),c=t.n(l),d=t(41),m=t.n(d),h=t(40);t.n(h);e.default={name:"app",components:{StyleEditor:c.a,ResumeEditor:m.a},data:function(){return{interval:40,currentStyle:"",enableHtml:!1,fullStyle:["/*\n* Inspired by http://strml.net/\n* 大家好，我是海涛\n* 夏天了，天气酷热，大家要吃冰镇西瓜降暑阿。\n* 拿好西瓜，我开始了\n* 1..\n* 2..\n* 3..\n*/\n\n/* 首先给所有元素加上过渡效果 */\n* {\n  transition: all .3s;\n}\n/* 白色背景太单调了，我们来点冷色调 */\nhtml {\n  color: rgb(222,222,222); background: rgb(15, 101, 162);\n}\n/* 文字离边框太近了 */\n.styleEditor {\n  padding: .5em;\n  border: 1px solid;\n  margin: .5em;\n  overflow: auto;\n  width: 45vw; height: 90vh;\n}\n/* 代码高亮 */\n.token.selector{ color: rgb(133,153,0); }\n.token.property{ color: rgb(187,137,0); }\n.token.punctuation{ color: yellow; }\n.token.function{ color: rgb(42,161,152); }\n\n/* 加点 3D 效果呗 */\nhtml{\n  perspective: 1000px;\n}\n.styleEditor {\n  position: fixed; left: 0; top: 0;\n  -webkit-transition: none;\n  transition: none;\n  -webkit-transform: rotateY(10deg) translateZ(-100px) ;\n          transform: rotateY(10deg) translateZ(-100px) ;\n}\n\n/* 接下来我给自己准备一个编辑器 */\n.resumeEditor{\n  position: fixed; right: 0; top: 0;\n  padding: .5em;  margin: .5em;\n  width: 48vw; height: 90vh;\n  border: 1px solid;\n  background: white; color: #222;\n  overflow: auto;\n}\n/* 好了，我开始写简历了 */\n\n\n","\n/* 这个简历好像差点什么\n * 对了，这是 Markdown 格式的，我需要变成对 HR 更友好的格式\n * 简单，用开源工具翻译成 HTML 就行了\n */\n",'\n/* 再对 HTML 加点样式 */\n.resumeEditor{\n  padding: 2em;\n}\n.resumeEditor h2{\n  display: inline-block;\n  // border-bottom: 1px solid;\n  margin: 1em 0 .5em;\n  width: 100%;\n  border-bottom: 2px solid #0b7ea0;\n}\n.resumeEditor ul,.resumeEditor ol{\n  list-style: none;\n}\n.resumeEditor ul> li::before{\n  content: \'•\';\n  margin-right: .5em;\n}\n.resumeEditor ol {\n  counter-reset: section;\n}\n.resumeEditor ol li::before {\n  // counter-increment: section;\n  // content: counters(section, ".") " ";\n  margin-right: .5em;\n}\n.resumeEditor blockquote {\n  margin: 1em;\n  padding: .5em;\n  background: #bbaeae24;\n}\n'],currentMarkdown:"",fullMarkdown:"杨海涛\n----\n\n>-男 | 1991年9月\n\n>-籍贯：河北保定 | 现居住于北京-朝阳区\n\n>-Tel : 13021003665\n\n>-E-mail：13021003665@163.com \n\n>-求职意向: Web/iOS开发工程师\n\n教育经历\n----\n>2011/09-2015/06 扬州大学 微电子 统招本科\n\n技能\n----\n\n* iOS 开发\n* NativeScript 混合开发\n* 前端 开发\n\n工作经历\n----\n\n1. 北京有序科技有限公司\n\n>工作职责：\n  \n>1、主要负责管有方和管有账的开发、持续优化以及维护的工作；\n         \n>2、熟练使用NativeScript、Angular+TypeScript、Bootstrap、Swagger、Jenkins、es6、webpack等构建项目，使用git来管理项目版本；\n          \n>3、提取公共组件，封装公共方法，周期性review并优化项目代码，减少技术债；\n          \n>4、负责项目的打包、发布以及线上管理工作，保证项目正常运行；\n\t\n>5、跟进项目迭代，与产品讨论需求，提高用户体验；\n\n2. 智慧树\n\n>工作职责：\n\n>1、负责智慧树三端（家长端、教师端和园长端）iOS App 的开发；\n          \n>2、和后端沟通协作定义接口的字段与规范；\n          \n>3、参与定制产品功能，提出解决方案，并实现功能； \n\n3. 阿拉丁控股集团\n\n>工作职责：\n\n>1、负责铛铛（公众圈、资讯和IM）iOS端App的开发；\n\n>2、熟练使用Objective-C、SDWebImage、AFNetworking等进行页面和功能的开发；\n\n>3、负责项目打包发布以及后续优化； \n\n\n\n参考\n----\n\n* [pen#JoVrdw](https://codepen.io/jakealbaugh/full/JoVrdw)\n* [STRML.net](STRML.net)\n\n"}},created:function(){this.makeResume()},methods:{makeResume:function(){function n(){return e.apply(this,arguments)}var e=u()(s.a.mark(function n(){return s.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.progressivelyShowStyle(0);case 2:return n.next=4,this.progressivelyShowResume();case 4:return n.next=6,this.progressivelyShowStyle(1);case 6:return n.next=8,this.showHtml();case 8:return n.next=10,this.progressivelyShowStyle(2);case 10:case"end":return n.stop()}},n,this)}));return n}(),showHtml:function(){var n=this;return new o.a(function(e,t){n.enableHtml=!0,e()})},progressivelyShowStyle:function(n){var e=this;return new o.a(function(t,r){var o=e.interval,i=u()(s.a.mark(function e(){var r,a,u,l,c,d=this;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(r=this.fullStyle[n]){e.next=3;break}return e.abrupt("return");case 3:a=this.fullStyle.filter(function(e,t){return t<=n}).map(function(n){return n.length}).reduce(function(n,e){return n+e},0),u=a-r.length,this.currentStyle.length<a?(l=this.currentStyle.length-u,c=r.substring(l,l+1)||" ",this.currentStyle+=c,"\n"===r.substring(l-1,l)&&this.$refs.styleEditor&&this.$nextTick(function(){d.$refs.styleEditor.goBottom()}),setTimeout(i,o)):t();case 6:case"end":return e.stop()}},e,this)})).bind(e);i()})},progressivelyShowResume:function(){var n=this;return new o.a(function(e,t){var r=n.fullMarkdown.length,o=n.interval;!function t(){if(n.currentMarkdown.length<r){n.currentMarkdown=n.fullMarkdown.substring(0,n.currentMarkdown.length+1);n.currentMarkdown[n.currentMarkdown.length-1];"\n"===n.currentMarkdown[n.currentMarkdown.length-2]&&n.$refs.resumeEditor&&n.$nextTick(function(){return n.$refs.resumeEditor.goBottom()}),setTimeout(t,o)}else e()}()})}}}},47:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=t(15),o=t.n(r),i=t(25),s=t.n(i),a=t(24),u=t.n(a),l=t(42),c=t.n(l),d=t(41),m=t.n(d),h=t(40);t.n(h);e.default={name:"app",components:{StyleEditor:c.a,ResumeEditor:m.a},data:function(){return{interval:4,currentStyle:"",enableHtml:!1,fullStyle:["/*\n* Inspired by http://strml.net/\n* 大家好，我是海涛\n* 夏天了，天气酷热，大家要吃冰镇西瓜降暑阿。\n* 拿好西瓜，我开始了\n* 1..\n* 2..\n* 3..\n*/\n\n\n/* 首先给所有元素加上过渡效果 */\n* {\n  transition: all .3s;\n}\n/* 白色背景太单调了，我们来点背景 */\nhtml {\n  color: rgb(222,222,222);\n  background: rgb(15, 101, 162);\n}\n/* 文字离边框太近了 */\n.styleEditor {\n  padding: .5em;\n  border: 1px solid;\n  overflow: auto;\n  width: 90vw;\n  margin: 2.5vh 5vw;\n  height: 90vh;\n}\n/* 太高了 */\n.styleEditor {\n  height: 45vh;\n}\n/* 代码高亮 */\n.token.selector{\n  color: rgb(133,153,0);\n}\n.token.property{\n  color: rgb(187,137,0);\n}\n.token.punctuation{\n  color: yellow;\n}\n.token.function{\n  color: rgb(42,161,152);\n}\n\n/* 加点 3D 效果呗 */\nhtml{\n  perspective: 1000px;\n}\n.styleEditor {\n  position: fixed; left: 0; top: 0;\n  transform: rotateX(-10deg) translateZ(-50px) ;\n}\n\n/* 接下来我给自己准备一个编辑器 */\n.resumeEditor{\n  position: fixed;\n  top: 50%; left: 0;\n  padding: .5em;  margin: 2.5vh;\n  width: 90vw; height: 45vh;\n  border: 1px solid;\n  background: white; color: #222;\n  overflow: auto;\n}\n/* 好了，我开始写简历了 */\n\n\n","\n/* 这个简历好像差点什么\n * 对了，这是 Markdown 格式的，我需要变成对 HR 更友好的格式\n * 简单，用开源工具翻译成 HTML 就行了\n * \n */\n",'\n/* 对了，你可能在用手机看吧\n * 那我再调整下大小\n */\n.styleEditor {\n  height: 15vh;\n}\n.resumeEditor {\n  top: 20%;\n  height: 80vh;\n}\n/* 再对 HTML 加点样式 */\n.resumeEditor{\n  padding: 2em;\n}\n.resumeEditor h2{\n  display: inline-block;\n  border-bottom: 1px solid;\n  margin: 1em 0 .5em;\n}\n.resumeEditor ul,.resumeEditor ol{\n  list-style: none;\n}\n.resumeEditor ul> li::before{\n  content: \'•\';\n  margin-right: .5em;\n}\n.resumeEditor ol {\n  counter-reset: section;\n}\n.resumeEditor ol li::before {\n  // counter-increment: section;\n  // content: counters(section, ".") " ";\n  margin-right: .5em;\n}\n.resumeEditor blockquote {\n  margin: 1em;\n  padding: .5em;\n  background: #ddd;\n}\n'],currentMarkdown:"",fullMarkdown:"杨海涛\n----\n>-男 | 1991年9月\n\n>-籍贯：河北保定 | 现居住于北京-朝阳区\n\n>-Tel : 13021003665\n\n>-E-mail：13021003665@163.com \n\n>-求职意向: 求职意向: Web/iOS开发工程师\n\n教育经历\n----\n>2011/09-2015/06 扬州大学 微电子 统招本科\n\n技能\n----\n\n* iOS 开发\n* NativeScript 混合开发\n* 前端 开发\n\n工作经历\n----\n\n1. 北京有序科技有限公司\n\n>工作职责：\n  \n>1、主要负责管有方和管有账的开发、持续优化以及维护的工作；\n         \n>2、熟练使用NativeScript、Angular+TypeScript、Bootstrap、Swagger、Jenkins、es6、webpack等构建项目，使用git来管理项目版本；\n          \n>3、提取公共组件，封装公共方法，周期性review并优化项目代码，减少技术债；\n          \n>4、负责项目的打包、发布以及线上管理工作，保证项目正常运行；\n\t\n>5、跟进项目迭代，与产品讨论需求，提高用户体验；\n\n2. 智慧树\n\n>工作职责：\n\n>1、负责智慧树三端（家长端、教师端和园长端）iOS App 的开发；\n          \n>2、和后端沟通协作定义接口的字段与规范；\n          \n>3、参与定制产品功能，提出解决方案，并实现功能； \n\n3. 阿拉丁控股集团\n\n>工作职责：\n\n>1、负责铛铛（公众圈、资讯和IM）iOS端App的开发；\n\n>2、熟练使用Objective-C、SDWebImage、AFNetworking等进行页面和功能的开发；\n\n>3、负责项目打包发布以及后续优化； \n\n\n参考\n----\n\n* [pen#JoVrdw](https://codepen.io/jakealbaugh/full/JoVrdw)\n* [STRML.net](STRML.net)\n\n\n"}},created:function(){this.makeResume()},methods:{makeResume:function(){function n(){return e.apply(this,arguments)}var e=u()(s.a.mark(function n(){return s.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.progressivelyShowStyle(0);case 2:return n.next=4,this.progressivelyShowResume();case 4:return n.next=6,this.progressivelyShowStyle(1);case 6:return n.next=8,this.showHtml();case 8:return n.next=10,this.progressivelyShowStyle(2);case 10:case"end":return n.stop()}},n,this)}));return n}(),showHtml:function(){var n=this;return new o.a(function(e,t){n.enableHtml=!0,n.$nextTick(function(){n.$refs.resumeEditor.goTop()}),e()})},progressivelyShowStyle:function(n){var e=this;return new o.a(function(t,r){var o=e.interval,i=u()(s.a.mark(function e(){var r,a,u,l,c,d=this;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(r=this.fullStyle[n]){e.next=3;break}return e.abrupt("return");case 3:a=this.fullStyle.filter(function(e,t){return t<=n}).map(function(n){return n.length}).reduce(function(n,e){return n+e},0),u=a-r.length,this.currentStyle.length<a?(l=this.currentStyle.length-u,c=r.substring(l,l+1)||" ",this.currentStyle+=c,"\n"===r.substring(l-1,l)&&this.$refs.styleEditor&&this.$nextTick(function(){d.$refs.styleEditor.goBottom()}),setTimeout(i,o)):t();case 6:case"end":return e.stop()}},e,this)})).bind(e);i()})},progressivelyShowResume:function(){var n=this;return new o.a(function(e,t){var r=n.fullMarkdown.length,o=n.interval;!function t(){if(n.currentMarkdown.length<r){n.currentMarkdown=n.fullMarkdown.substring(0,n.currentMarkdown.length+1);n.currentMarkdown[n.currentMarkdown.length-1];"\n"===n.currentMarkdown[n.currentMarkdown.length-2]&&n.$refs.resumeEditor&&n.$nextTick(function(){return n.$refs.resumeEditor.goBottom()}),setTimeout(t,o)}else e()}()})}}}},48:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=t(89),o=t.n(r);e.default={props:["markdown","enableHtml"],name:"ResumeEditor",computed:{result:function(){return this.enableHtml?o()(this.markdown):this.markdown}},methods:{goBottom:function(){this.$refs.container.scrollTop=1e5},goTop:function(){this.$refs.container.scrollTop=0}}}},49:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=t(90),o=t.n(r);e.default={name:"Editor",props:["code"],computed:{highlightedCode:function(){return o.a.highlight(this.code,o.a.languages.css)},codeInStyleTag:function(){return"<style>"+this.code+"</style>"}},methods:{goBottom:function(){this.$refs.container.scrollTop=1e5}}}},50:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=t(45),o=t(43),i=t.n(o),s=t(44),a=t.n(s),u=document.documentElement.clientWidth;new r.a({el:"#app",render:function(n){return n(u>500?i.a:a.a)}})},85:function(n,e){},86:function(n,e){},87:function(n,e){},88:function(n,e){},93:function(n,e){n.exports={render:function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{attrs:{id:"app"}},[t("StyleEditor",{ref:"styleEditor",attrs:{code:n.currentStyle}}),n._v(" "),t("ResumeEditor",{ref:"resumeEditor",attrs:{markdown:n.currentMarkdown,enableHtml:n.enableHtml}})],1)},staticRenderFns:[]}},94:function(n,e){n.exports={render:function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{ref:"container",staticClass:"styleEditor"},[t("div",{staticClass:"code",domProps:{innerHTML:n._s(n.codeInStyleTag)}}),n._v(" "),t("pre",{domProps:{innerHTML:n._s(n.highlightedCode)}})])},staticRenderFns:[]}},95:function(n,e){n.exports={render:function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{ref:"container",staticClass:"resumeEditor",class:{htmlMode:n.enableHtml}},[n.enableHtml?t("div",{domProps:{innerHTML:n._s(n.result)}}):t("pre",[n._v(n._s(n.result))])])},staticRenderFns:[]}},96:function(n,e){n.exports={render:function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{attrs:{id:"app"}},[t("StyleEditor",{ref:"styleEditor",attrs:{code:n.currentStyle}}),n._v(" "),t("ResumeEditor",{ref:"resumeEditor",attrs:{markdown:n.currentMarkdown,enableHtml:n.enableHtml}})],1)},staticRenderFns:[]}}},[50]);
//# sourceMappingURL=app.35c510c22b34c5b677c3.js.map
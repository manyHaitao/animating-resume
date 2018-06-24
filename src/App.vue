<template>
  <div id="app">
    <StyleEditor ref="styleEditor" :code="currentStyle"></StyleEditor>
    <ResumeEditor ref="resumeEditor" :markdown="currentMarkdown" :enableHtml="enableHtml"></ResumeEditor>
  </div>
</template>

<script>
import StyleEditor from "./components/StyleEditor";
import ResumeEditor from "./components/ResumeEditor";
import "./assets/reset.css";

export default {
  name: "app",
  components: {
    StyleEditor,
    ResumeEditor
  },
  data() {
    return {
      interval: 40,
      currentStyle: "",
      enableHtml: false,
      fullStyle: [
        `/*
* Inspired by http://strml.net/
* 大家好，我是海涛
* 夏天了，天气酷热，大家要吃冰镇西瓜降暑阿。
* 
*/

/* 首先给所有元素加上过渡效果 */
* {
  transition: all .3s;
}
/* 白色背景太单调了，我们来点冷色调 */
html {
  color: rgb(222,222,222); background: rgb(15, 101, 162);
}
/* 文字离边框太近了 */
.styleEditor {
  padding: .5em;
  border: 1px solid;
  margin: .5em;
  overflow: auto;
  width: 45vw; height: 90vh;
}
/* 代码高亮 */
.token.selector{ color: rgb(133,153,0); }
.token.property{ color: rgb(187,137,0); }
.token.punctuation{ color: yellow; }
.token.function{ color: rgb(42,161,152); }

/* 加点 3D 效果呗 */
html{
  perspective: 1000px;
}
.styleEditor {
  position: fixed; left: 0; top: 0;
  -webkit-transition: none;
  transition: none;
  -webkit-transform: rotateY(10deg) translateZ(-100px) ;
          transform: rotateY(10deg) translateZ(-100px) ;
}

/* 接下来我给自己准备一个编辑器 */
.resumeEditor{
  position: fixed; right: 0; top: 0;
  padding: .5em;  margin: .5em;
  width: 48vw; height: 90vh;
  border: 1px solid;
  background: white; color: #222;
  overflow: auto;
}
/* 好了，我开始写简历了 */


`,
        `
/* 这个简历好像差点什么
 * 对了，这是 Markdown 格式的，我需要变成对 HR 更友好的格式
 * 简单，用开源工具翻译成 HTML 就行了
 */
`,
        `
/* 再对 HTML 加点样式 */
.resumeEditor{
  padding: 2em;
}
.resumeEditor h2{
  display: inline-block;
  // border-bottom: 1px solid;
  margin: 1em 0 .5em;
  width: 100%;
  border-bottom: 2px solid #0b7ea0;
}
.resumeEditor ul,.resumeEditor ol{
  list-style: none;
}
.resumeEditor ul> li::before{
  content: '•';
  margin-right: .5em;
}
.resumeEditor ol {
  counter-reset: section;
}
.resumeEditor ol li::before {
  counter-increment: section;
  content: counters(section, ".") " ";
  margin-right: .5em;
}
.resumeEditor blockquote {
  margin: 1em;
  padding: .5em;
  background: #bbaeae24;
}
`
      ],
      currentMarkdown: "",
      fullMarkdown: `杨海涛
----

>-男 | 1991年9月

>-籍贯：河北保定 | 现居住于北京-朝阳区

>-Tel : 13021003665

>-E-mail：13021003665@163.com 

>-求职意向: iOS开发工程师

教育经历
----
>2011/09-2015/06 扬州大学 微电子 统招本科

技能
----

* iOS 开发
* NativeScript 混合开发
* 前端 开发

工作经历
----

1. 北京有序科技有限公司

>工作职责：
  
>1、主要负责管有方和管有账的开发、持续优化以及维护的工作；
         
>2、熟练使用NativeScript、Angular+TypeScript、Bootstrap、Swagger、Jenkins、es6、webpack等构建项目，使用git来管理项目版本；
          
>3、提取公共组件，封装公共方法，周期性review并优化项目代码，减少技术债；
          
>4、负责项目的打包、发布以及线上管理工作，保证项目正常运行；
	
>5、跟进项目迭代，与产品讨论需求，提高用户体验；

2. 智慧树

>工作职责：

>1、负责智慧树三端（家长端、教师端和园长端）iOS App 的开发；
          
>2、和后端沟通协作定义接口的字段与规范；
          
>3、参与定制产品功能，提出解决方案，并实现功能； 

3. 阿拉丁控股集团

>工作职责：

>1、负责铛铛（公众圈、资讯和IM）iOS端App的开发；

>2、熟练使用Objective-C、SDWebImage、AFNetworking等进行页面和功能的开发；

>3、负责项目打包发布以及后续优化； 



参考
----

* [pen#JoVrdw](https://codepen.io/jakealbaugh/full/JoVrdw)
* [STRML.net](STRML.net)

`
    };
  },
  created() {
    this.makeResume();
  },

  methods: {
    makeResume: async function() {
      await this.progressivelyShowStyle(0);
      await this.progressivelyShowResume();
      await this.progressivelyShowStyle(1);
      await this.showHtml();
      await this.progressivelyShowStyle(2);
    },
    showHtml: function() {
      return new Promise((resolve, reject) => {
        this.enableHtml = true;
        resolve();
      });
    },
    progressivelyShowStyle(n) {
      return new Promise((resolve, reject) => {
        let interval = this.interval;
        let showStyle = async function() {
          let style = this.fullStyle[n];
          if (!style) {
            return;
          }
          // 计算前 n 个 style 的字符总数
          let length = this.fullStyle
            .filter((_, index) => index <= n)
            .map(item => item.length)
            .reduce((p, c) => p + c, 0);
          let prefixLength = length - style.length;
          if (this.currentStyle.length < length) {
            let l = this.currentStyle.length - prefixLength;
            let char = style.substring(l, l + 1) || " ";
            this.currentStyle += char;
            if (style.substring(l - 1, l) === "\n" && this.$refs.styleEditor) {
              this.$nextTick(() => {
                this.$refs.styleEditor.goBottom();
              });
            }
            setTimeout(showStyle, interval);
          } else {
            resolve();
          }
        }.bind(this);
        showStyle();
      });
    },
    progressivelyShowResume() {
      return new Promise((resolve, reject) => {
        let length = this.fullMarkdown.length;
        let interval = this.interval;
        let showResume = () => {
          if (this.currentMarkdown.length < length) {
            this.currentMarkdown = this.fullMarkdown.substring(
              0,
              this.currentMarkdown.length + 1
            );
            let lastChar = this.currentMarkdown[
              this.currentMarkdown.length - 1
            ];
            let prevChar = this.currentMarkdown[
              this.currentMarkdown.length - 2
            ];
            if (prevChar === "\n" && this.$refs.resumeEditor) {
              this.$nextTick(() => this.$refs.resumeEditor.goBottom());
            }
            setTimeout(showResume, interval);
          } else {
            resolve();
          }
        };
        showResume();
      });
    }
  }
};
</script>

<style scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

html {
  min-height: 100vh;
}
* {
  box-sizing: border-box;
}
</style>

import{_ as s,o as a,c as n,Q as l}from"./chunks/framework.b5309610.js";const u=JSON.parse('{"title":"模板化","description":"","frontmatter":{},"headers":[],"relativePath":"leadingEnd/node copy/模板化.md","filePath":"leadingEnd/node copy/模板化.md","lastUpdated":1727086072000}'),p={name:"leadingEnd/node copy/模板化.md"},e=l(`<h1 id="模板化" tabindex="-1">模板化 <a class="header-anchor" href="#模板化" aria-label="Permalink to &quot;模板化&quot;">​</a></h1><h2 id="commonjs规范" tabindex="-1">CommonJS规范 <a class="header-anchor" href="#commonjs规范" aria-label="Permalink to &quot;CommonJS规范&quot;">​</a></h2><ol><li><p>commonjs主要是为了实现代码重用，commonjs是同步加载的；</p></li><li><p>在commonjs规范中：</p><ul><li>一个js文件就是一个模块，拥有单独的作用域；</li><li>普通方式定义的变量、函数、对象都 属于该模块内；</li><li>通过require来加载模块；</li><li>通过exports和module.exports来暴露模块中的内容；</li></ul></li></ol><p>单个暴露：<code>exports.fn = function(){}</code></p><p>一起暴露：<code>module.exports = {}</code></p><ol start="3"><li><p>所有代码都运行在模块作用域中，避免全局变量污染，模块加载一次就在缓存里面了，多次加载都是读取缓存的，模块是按顺序同步加载的；</p></li><li><p>require（同步加载）的功能：读取并执行一个js文件，然后返回该模块的exprots对象，如果没有该模块就会报错；</p></li></ol><p>模块化的好处：模块化是指解决一个复杂问题时自顶向下逐层把系统划分成若干模块的过程，有多种属性，分别反映其内部特性。模块化是一种处理复杂系统分解为更好的可管理模块的方式。</p><h2 id="es6中的模块化" tabindex="-1">es6中的模块化 <a class="header-anchor" href="#es6中的模块化" aria-label="Permalink to &quot;es6中的模块化&quot;">​</a></h2><p>如果只暴露一个就使用export default，import时不需要花括号；</p><ol><li>export暴露（模块）： （1）单个暴露：</li></ol><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> m </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">fn</span><span style="color:#E1E4E8;">(){</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">111</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> m </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">fn</span><span style="color:#24292E;">(){</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">111</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>（2）整体暴露</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> m </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">fn</span><span style="color:#E1E4E8;">(){</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">111</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> {m,fn}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> m </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">fn</span><span style="color:#24292E;">(){</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">111</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> {m,fn}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>（3）默认暴露</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> x </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> x </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>一般适用于一个参数时；</p><ol start="2"><li>import（入口文件）：</li></ol><p>普通暴露语法： import { 属性名... } from &#39;filePath&#39;</p><p>默认暴露语法：import 属性名 from &#39;filePath&#39;；</p><p>有暴露的地方才能写入；</p><h2 id="commonjs和esm的区别" tabindex="-1">CommonJS和ESM的区别 <a class="header-anchor" href="#commonjs和esm的区别" aria-label="Permalink to &quot;CommonJS和ESM的区别&quot;">​</a></h2><ul><li><p>Cjs是基于运行时的同步加载，esm是基于编译时的异步加载</p></li><li><p>Cjs是可以修改值的，esm值并且不可修改（可读的）</p></li><li><p>Cjs不可以tree shaking，esm支持tree shaking</p></li><li><p>commonjs中顶层的this指向这个模块本身，而ES6中顶层this指向undefined</p></li></ul><h2 id="浏览器使用nodejs的模块" tabindex="-1">浏览器使用nodejs的模块 <a class="header-anchor" href="#浏览器使用nodejs的模块" aria-label="Permalink to &quot;浏览器使用nodejs的模块&quot;">​</a></h2><ol><li><p>browserify官网：browserify.org</p></li><li><p>安装：npm install -g browserify</p></li><li><p>用法：browserify 源文件 -o 目标文件</p><p>实例：browserify ./src/app.js -o ./dist/bundle.js</p></li><li><p>browserify打包成功以后没有提示，如果没有文件夹会自动创建文件夹，如果重复则自动覆盖；</p></li></ol><h2 id="es6转es5" tabindex="-1">ES6转ES5 <a class="header-anchor" href="#es6转es5" aria-label="Permalink to &quot;ES6转ES5&quot;">​</a></h2><ol><li>介绍：</li></ol><p>主要是用来兼容低版本浏览器的；</p><p>babel官网：www.babeljs.cn</p><p>babel的功能：将es6语法转成es5语法、还能操作jsx语法(react)等 2. 安装</p><p>安装babel-cli, babel-preset-es2015和browserify:</p><p>(1)、npm install babel-cli browserify -g (2)、npm install babel-preset-es2015 --save-dev</p><p>参数说明：</p><p>--save 项目依赖（真正上线，也需要）</p><p>--save-dev 开发依赖（开发阶段需要，上线不需要[因为已转换好了]）</p><p>presets 预设(将es6转换成es5的所有插件打包)</p><p>３、在项目中定义babel配置文件：.babelrc文件，内容如下： { &quot;presets&quot;: [&quot;es2015&quot;] }</p><p>４、编译</p><p>使用Babel将ES6编译为ES5代码(但包含CommonJS语法) : babel ./src -d ./dist</p><p>前端使用的话就使用Browserify编译js : browserify ./dist/app.js -o ./dest/bundle.js</p><p>５、npm run [package.json文件中的scripts:参数]</p><p>npm run start | npm start 除了start可以省略run，其它都不能省略</p><p>&quot;start&quot;: &quot;babel ./src -d ./dist&quot;,</p><p>&quot;build&quot;: &quot;babel ./src -d ./dist&quot;,</p><p>&quot;dev&quot;:&quot;browserify ./dist/app.js -o ./dest/bundle.js&quot; ；</p><h2 id="amd、cmd" tabindex="-1">amd、cmd； <a class="header-anchor" href="#amd、cmd" aria-label="Permalink to &quot;amd、cmd；&quot;">​</a></h2><ol><li><p>amd:规范</p><p>requirejs 实现的amd规范；</p></li><li><p>cmd:规范</p><p>seajs 实现的cmd规范；</p></li></ol>`,46),o=[e];function t(r,c,i,d,E,y){return a(),n("div",null,o)}const b=s(p,[["render",t]]);export{u as __pageData,b as default};

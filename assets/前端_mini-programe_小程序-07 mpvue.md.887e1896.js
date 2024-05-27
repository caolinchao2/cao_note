import{_ as s,o as a,c as n,Q as p}from"./chunks/framework.b5309610.js";const E=JSON.parse('{"title":"小程序-07 mpvue","description":"","frontmatter":{},"headers":[],"relativePath":"前端/mini-programe/小程序-07 mpvue.md","filePath":"前端/mini-programe/小程序-07 mpvue.md","lastUpdated":1715053679000}'),l={name:"前端/mini-programe/小程序-07 mpvue.md"},e=p(`<h1 id="小程序-07-mpvue" tabindex="-1">小程序-07 mpvue <a class="header-anchor" href="#小程序-07-mpvue" aria-label="Permalink to &quot;小程序-07 mpvue&quot;">​</a></h1><h2 id="一、介绍" tabindex="-1">一、介绍 <a class="header-anchor" href="#一、介绍" aria-label="Permalink to &quot;一、介绍&quot;">​</a></h2><ol><li><p>是一个美团开发的使用Vue.js开发小程序的前端框架，可以直接在微信小程序、百度、支付宝、头条都可以使用；</p></li><li><p>安装：在基于安装了vue cli脚手架的前提下，使用以下命令</p></li></ol><p>vue init mpvue/mpvue-quickstart demo；</p><ol start="3"><li><p>安装好之后需要npm install生成node_modules文件，之后npm start启动；</p></li><li><p>启动好的脚手架不在浏览器打开，需要在微信开发工具导入，直接在微信开发工具中预览；</p></li></ol><h2 id="二、创建页面" tabindex="-1">二、创建页面 <a class="header-anchor" href="#二、创建页面" aria-label="Permalink to &quot;二、创建页面&quot;">​</a></h2><ol><li>之后在pages下面创建一个目录，创建页面需要重新npm start一下，在app.json里面修改，</li><li>在目录下创建一个main.js文件9</li></ol><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> Vue </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;vue&#39;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> App </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;./index&#39;</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">app</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Vue</span><span style="color:#E1E4E8;">(App)</span></span>
<span class="line"><span style="color:#E1E4E8;">app.</span><span style="color:#B392F0;">$mount</span><span style="color:#E1E4E8;">()</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> Vue </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;vue&#39;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> App </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;./index&#39;</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">app</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Vue</span><span style="color:#24292E;">(App)</span></span>
<span class="line"><span style="color:#24292E;">app.</span><span style="color:#6F42C1;">$mount</span><span style="color:#24292E;">()</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><ol start="3"><li>创建一个index.vue，在里面写代码；</li><li>也可以创建一个main.json，来配置当前页面；如微信小程序中的json文件；</li></ol><p>mpvue注意事项：</p><ol><li>新建页面后，需要重新npm run dev；</li><li>在mpvue中可以直接使用微信中的标签，也可以使用html中的标签，会正确解析；</li><li>在mpvue中即可以使用mpvue的生命周期，也可以使用vue的生命周期；</li></ol>`,11),o=[e];function t(r,c,i,m,u,d){return a(),n("div",null,o)}const v=s(l,[["render",t]]);export{E as __pageData,v as default};

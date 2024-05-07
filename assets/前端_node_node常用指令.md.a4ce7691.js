import{_ as s,o as a,c as o,Q as n}from"./chunks/framework.b5309610.js";const h=JSON.parse('{"title":"node常用指令","description":"","frontmatter":{},"headers":[],"relativePath":"前端/node/node常用指令.md","filePath":"前端/node/node常用指令.md","lastUpdated":null}'),e={name:"前端/node/node常用指令.md"},p=n(`<h1 id="node常用指令" tabindex="-1">node常用指令 <a class="header-anchor" href="#node常用指令" aria-label="Permalink to &quot;node常用指令&quot;">​</a></h1><p><code>child_process</code>：</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">c</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;child_process&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;start http://localhost:3000&#39;</span><span style="color:#E1E4E8;">) </span><span style="color:#6A737D;">// 输出该条</span></span>
<span class="line"><span style="color:#E1E4E8;">c.</span><span style="color:#B392F0;">exec</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;start http://localhost:3000&#39;</span><span style="color:#E1E4E8;">) </span><span style="color:#6A737D;">// 执行该条命令</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">c</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">require</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;child_process&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;start http://localhost:3000&#39;</span><span style="color:#24292E;">) </span><span style="color:#6A737D;">// 输出该条</span></span>
<span class="line"><span style="color:#24292E;">c.</span><span style="color:#6F42C1;">exec</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;start http://localhost:3000&#39;</span><span style="color:#24292E;">) </span><span style="color:#6A737D;">// 执行该条命令</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>取命令行参数：<code>process.argv</code></p><p>退出当前程序：<code>process.exit(0)</code></p><p>切换目录：<code>process.chdir</code></p><p>当前工作根目录：<code>process.cwd()</code>；</p><p>获取用户根目录：<code>require(&#39;os&#39;).homedir()</code></p>`,8),l=[p];function c(t,r,d,i,E,y){return a(),o("div",null,l)}const u=s(e,[["render",c]]);export{h as __pageData,u as default};

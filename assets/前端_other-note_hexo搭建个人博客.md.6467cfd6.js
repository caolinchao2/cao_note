import{_ as s,o as a,c as n,Q as l}from"./chunks/framework.b5309610.js";const b=JSON.parse('{"title":"hexo搭建个人博客","description":"","frontmatter":{},"headers":[],"relativePath":"前端/other-note/hexo搭建个人博客.md","filePath":"前端/other-note/hexo搭建个人博客.md","lastUpdated":null}'),e={name:"前端/other-note/hexo搭建个人博客.md"},o=l(`<h1 id="hexo搭建个人博客" tabindex="-1">hexo搭建个人博客 <a class="header-anchor" href="#hexo搭建个人博客" aria-label="Permalink to &quot;hexo搭建个人博客&quot;">​</a></h1><p>参考教程：<a href="https://yafine-blog.cn/posts/4ab2.html" target="_blank" rel="noreferrer">Hexo+github 搭建博客 (超级详细版，精细入微)</a></p><h2 id="初始化环境" tabindex="-1">初始化环境 <a class="header-anchor" href="#初始化环境" aria-label="Permalink to &quot;初始化环境&quot;">​</a></h2><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">hexo-cli</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-g</span></span>
<span class="line"><span style="color:#B392F0;">hexo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">init</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">blog</span></span>
<span class="line"><span style="color:#79B8FF;">cd</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">blog</span></span>
<span class="line"><span style="color:#B392F0;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span><span style="color:#24292E;"> </span><span style="color:#032F62;">hexo-cli</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-g</span></span>
<span class="line"><span style="color:#6F42C1;">hexo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">init</span><span style="color:#24292E;"> </span><span style="color:#032F62;">blog</span></span>
<span class="line"><span style="color:#005CC5;">cd</span><span style="color:#24292E;"> </span><span style="color:#032F62;">blog</span></span>
<span class="line"><span style="color:#6F42C1;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="常用命令" tabindex="-1">常用命令 <a class="header-anchor" href="#常用命令" aria-label="Permalink to &quot;常用命令&quot;">​</a></h3><ul><li><code>hexo s</code>：本地开发</li><li><code>hexo clean</code>：清空打包文件</li><li><code>hexo g</code>：打包</li></ul><h2 id="将本地博客发布到github" tabindex="-1">将本地博客发布到github <a class="header-anchor" href="#将本地博客发布到github" aria-label="Permalink to &quot;将本地博客发布到github&quot;">​</a></h2><ol><li>安装插件</li></ol><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">npm install hexo</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">deployer</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">git </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">S</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">npm install hexo</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">deployer</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">git </span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">S</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol start="2"><li>修改.config.yml</li></ol><div class="language-yml vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yml</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#85E89D;">type</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">git</span></span>
<span class="line"><span style="color:#85E89D;">repo</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">复制github拉取地址</span></span>
<span class="line"><span style="color:#85E89D;">branch</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">master</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#22863A;">type</span><span style="color:#24292E;">: </span><span style="color:#032F62;">git</span></span>
<span class="line"><span style="color:#22863A;">repo</span><span style="color:#24292E;">: </span><span style="color:#032F62;">复制github拉取地址</span></span>
<span class="line"><span style="color:#22863A;">branch</span><span style="color:#24292E;">: </span><span style="color:#032F62;">master</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>`,11),p=[o];function t(r,c,i,d,h,y){return a(),n("div",null,p)}const u=s(e,[["render",t]]);export{b as __pageData,u as default};

import{_ as s,o,c as a,Q as l}from"./chunks/framework.b5309610.js";const y=JSON.parse('{"title":"ubuntu配置","description":"","frontmatter":{},"headers":[],"relativePath":"前端/Server/ubuntu教程.md","filePath":"前端/Server/ubuntu教程.md","lastUpdated":1715053679000}'),e={name:"前端/Server/ubuntu教程.md"},n=l('<h1 id="ubuntu配置" tabindex="-1">ubuntu配置 <a class="header-anchor" href="#ubuntu配置" aria-label="Permalink to &quot;ubuntu配置&quot;">​</a></h1><p>将包提升到最新：</p><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">sudo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">apt</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">update</span><span style="color:#E1E4E8;"> &amp;&amp; </span><span style="color:#B392F0;">sudo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">apt</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">upgrade</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-y</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">sudo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">apt</span><span style="color:#24292E;"> </span><span style="color:#032F62;">update</span><span style="color:#24292E;"> &amp;&amp; </span><span style="color:#6F42C1;">sudo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">apt</span><span style="color:#24292E;"> </span><span style="color:#032F62;">upgrade</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-y</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="ubuntu系统目录" tabindex="-1">ubuntu系统目录 <a class="header-anchor" href="#ubuntu系统目录" aria-label="Permalink to &quot;ubuntu系统目录&quot;">​</a></h2><ul><li>搭建静态网站：<code>/data/html/</code> 放置静态文件</li><li>配置nginx：<code>/data/config/nginx/conf.d/</code></li><li>配置之后重启docker：<code>docker restart data_nginx_1</code></li><li>查看错误日志： <ul><li><code>docker logs data_nginx_1</code></li><li><code>tail /data/log/nginx/error.log</code></li></ul></li><li>配置网站的root根路径：<code>/usr/share/nginx/html</code> 开头，文件放在<code>/data/html</code>下</li><li>查看对应目录：<code>cat /data/docker-compose.yml</code></li><li>修改vim配置：<code>vim /etc/vim/vimrc</code></li></ul><h2 id="ubuntu下安装mongodb" tabindex="-1">ubuntu下安装mongodb <a class="header-anchor" href="#ubuntu下安装mongodb" aria-label="Permalink to &quot;ubuntu下安装mongodb&quot;">​</a></h2><ol><li><p>安装</p><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">sudo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">apt</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">mongodb</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">sudo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">apt</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span><span style="color:#24292E;"> </span><span style="color:#032F62;">mongodb</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div></li><li><p>使用命令</p><ul><li><code>sudo systemctl status mongodb</code> 查看状态</li><li><code>sudo systemctl stop mongodb</code> 停止</li><li><code>sudo systemctl start mongodb</code> 启动</li><li><code>sudo systemctl restart mongodb</code> 重启</li></ul></li><li><p>修改是否自动随系统启动（默认启用）</p><ul><li><code>sudo systemctl disable mongodb</code></li><li><code>sudo systemctl enable mongodb</code></li></ul></li><li><p><code>mongo</code> 开始使用数据库</p></li><li><p>卸载</p><ul><li><code>sudo systemctl stop mongodb</code></li><li><code>sudo apt purge mongodb</code></li><li><code>sudo apt autoremove</code></li></ul></li></ol>',7),t=[n];function p(c,d,i,r,u,b){return o(),a("div",null,t)}const h=s(e,[["render",p]]);export{y as __pageData,h as default};

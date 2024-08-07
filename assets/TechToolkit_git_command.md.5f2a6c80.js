import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.b5309610.js";const m=JSON.parse('{"title":"Git 命令清单","description":"","frontmatter":{},"headers":[],"relativePath":"TechToolkit/git/command.md","filePath":"TechToolkit/git/command.md","lastUpdated":1721987715000}'),p={name:"TechToolkit/git/command.md"},e=l(`<h1 id="git-命令清单" tabindex="-1">Git 命令清单 <a class="header-anchor" href="#git-命令清单" aria-label="Permalink to &quot;Git 命令清单&quot;">​</a></h1><h2 id="_1-新建-git-仓库" tabindex="-1">1. 新建 git 仓库 <a class="header-anchor" href="#_1-新建-git-仓库" aria-label="Permalink to &quot;1. 新建 git 仓库&quot;">​</a></h2><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 在当前目录新建一个 Git 仓库</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">init</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 新建一个目录，将其初始化为 Git 仓库</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">init</span><span style="color:#E1E4E8;"> [project-name]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 下载一个项目和它的整个代码历史</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">clone</span><span style="color:#E1E4E8;"> [url]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 在当前目录新建一个 Git 仓库</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">init</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 新建一个目录，将其初始化为 Git 仓库</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">init</span><span style="color:#24292E;"> [project-name]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 下载一个项目和它的整个代码历史</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">clone</span><span style="color:#24292E;"> [url]</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="_2-配置" tabindex="-1">2. 配置 <a class="header-anchor" href="#_2-配置" aria-label="Permalink to &quot;2. 配置&quot;">​</a></h2><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 显示当前的Git配置</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">config</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--list</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 设置提交代码时的用户信息</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">config</span><span style="color:#E1E4E8;"> [--global] user.name </span><span style="color:#9ECBFF;">&quot;名称&quot;</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">config</span><span style="color:#E1E4E8;"> [--global] user.email </span><span style="color:#9ECBFF;">&quot;邮箱地址&quot;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 显示当前的Git配置</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">config</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--list</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 设置提交代码时的用户信息</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">config</span><span style="color:#24292E;"> [--global] user.name </span><span style="color:#032F62;">&quot;名称&quot;</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">config</span><span style="color:#24292E;"> [--global] user.email </span><span style="color:#032F62;">&quot;邮箱地址&quot;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="_3-向暂存区添加-删除文件" tabindex="-1">3. 向暂存区添加 / 删除文件 <a class="header-anchor" href="#_3-向暂存区添加-删除文件" aria-label="Permalink to &quot;3. 向暂存区添加 / 删除文件&quot;">​</a></h2><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 添加指定文件或指定目录到暂存区</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">add</span><span style="color:#E1E4E8;"> [文件路径 </span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">目录路径]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 添加所有文件到暂存区</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">add</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 停止追踪指定文件并保留在工作区</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">rm</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--cached</span><span style="color:#E1E4E8;"> [文件路径]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 删除工作区文件并且提交到暂存区</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">rm</span><span style="color:#E1E4E8;"> [文件路径]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 添加指定文件或指定目录到暂存区</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">add</span><span style="color:#24292E;"> [文件路径 </span><span style="color:#032F62;">/</span><span style="color:#24292E;"> </span><span style="color:#032F62;">目录路径]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 添加所有文件到暂存区</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">add</span><span style="color:#24292E;"> </span><span style="color:#032F62;">.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 停止追踪指定文件并保留在工作区</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">rm</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--cached</span><span style="color:#24292E;"> [文件路径]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 删除工作区文件并且提交到暂存区</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">rm</span><span style="color:#24292E;"> [文件路径]</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="_4-代码提交" tabindex="-1">4. 代码提交 <a class="header-anchor" href="#_4-代码提交" aria-label="Permalink to &quot;4. 代码提交&quot;">​</a></h2><h4 id="文件忽略" tabindex="-1">文件忽略 <a class="header-anchor" href="#文件忽略" aria-label="Permalink to &quot;文件忽略&quot;">​</a></h4><p>创建一个 .gitignore 文件放置在项目根目录下</p><p>该文件内可将某个文件或目录忽略，不再提示要求提交该文件了。</p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">temp.js</span></span>
<span class="line"><span style="color:#B392F0;">.gitignore</span></span>
<span class="line"><span style="color:#B392F0;">/node_modules/</span></span>
<span class="line"><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">.html</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">temp.js</span></span>
<span class="line"><span style="color:#6F42C1;">.gitignore</span></span>
<span class="line"><span style="color:#6F42C1;">/node_modules/</span></span>
<span class="line"><span style="color:#D73A49;">*</span><span style="color:#24292E;">.html</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 提交暂存区到仓库区</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">commit</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-m</span><span style="color:#E1E4E8;"> [提交信息]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 替换上一次 commit（如无代码改动，就重写上一次 commit 的提交信息）</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">commit</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--amend</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-m</span><span style="color:#E1E4E8;"> [提交信息]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 提交暂存区到仓库区</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">commit</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-m</span><span style="color:#24292E;"> [提交信息]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 替换上一次 commit（如无代码改动，就重写上一次 commit 的提交信息）</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">commit</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--amend</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-m</span><span style="color:#24292E;"> [提交信息]</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="_5-分支" tabindex="-1">5. 分支 <a class="header-anchor" href="#_5-分支" aria-label="Permalink to &quot;5. 分支&quot;">​</a></h2><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 列出所有本地分支</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">branch</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 列出所有远程分支</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">branch</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-r</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 列出所有本地分支和远程分支</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">branch</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-a</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 新建一个分支，但依然停留在当前分支</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">branch</span><span style="color:#E1E4E8;"> [分支名]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 新建一个分支，并切换到该分支</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">checkout</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-b</span><span style="color:#E1E4E8;"> [分支名]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 新建一个分支，指向指定commit</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">branch</span><span style="color:#E1E4E8;"> [分支名] [commit id]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 新建一个分支，与指定的远程分支建立追踪关系</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">branch</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--track</span><span style="color:#E1E4E8;"> [分支名] [远程分支名]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 新建一个空白分支</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">checkout</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--orphan</span><span style="color:#E1E4E8;"> [分支名]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 切换到指定分支，并更新工作区</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">checkout</span><span style="color:#E1E4E8;"> [分支名]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 切换到上一个分支</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">checkout</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">-</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 合并指定分支到当前分支</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">merge</span><span style="color:#E1E4E8;"> [分支名]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 删除分支</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">branch</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-d</span><span style="color:#E1E4E8;"> [分支名]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 删除远程分支</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">push</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">origin</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--delete</span><span style="color:#E1E4E8;"> [分支名]</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">branch</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-dr</span><span style="color:#E1E4E8;"> [remote/分支名]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 列出所有本地分支</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">branch</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 列出所有远程分支</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">branch</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-r</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 列出所有本地分支和远程分支</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">branch</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-a</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 新建一个分支，但依然停留在当前分支</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">branch</span><span style="color:#24292E;"> [分支名]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 新建一个分支，并切换到该分支</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">checkout</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-b</span><span style="color:#24292E;"> [分支名]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 新建一个分支，指向指定commit</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">branch</span><span style="color:#24292E;"> [分支名] [commit id]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 新建一个分支，与指定的远程分支建立追踪关系</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">branch</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--track</span><span style="color:#24292E;"> [分支名] [远程分支名]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 新建一个空白分支</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">checkout</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--orphan</span><span style="color:#24292E;"> [分支名]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 切换到指定分支，并更新工作区</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">checkout</span><span style="color:#24292E;"> [分支名]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 切换到上一个分支</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">checkout</span><span style="color:#24292E;"> </span><span style="color:#032F62;">-</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 合并指定分支到当前分支</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">merge</span><span style="color:#24292E;"> [分支名]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 删除分支</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">branch</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-d</span><span style="color:#24292E;"> [分支名]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 删除远程分支</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">push</span><span style="color:#24292E;"> </span><span style="color:#032F62;">origin</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--delete</span><span style="color:#24292E;"> [分支名]</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">branch</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-dr</span><span style="color:#24292E;"> [remote/分支名]</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br></div></div><h2 id="_6-标签" tabindex="-1">6. 标签 <a class="header-anchor" href="#_6-标签" aria-label="Permalink to &quot;6. 标签&quot;">​</a></h2><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 列出所有 tag</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">tag</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 根据当前 commit 创建一个 tag</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">tag</span><span style="color:#E1E4E8;"> [tag]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 根据指定 commit 创建一个 tag</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">tag</span><span style="color:#E1E4E8;"> [tag] [commit id]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 删除本地 tag</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">tag</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-d</span><span style="color:#E1E4E8;"> [tag]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 删除远程 tag</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">push</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">origin</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">:refs/tags/[tagName]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 查看 tag 信息</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">show</span><span style="color:#E1E4E8;"> [tag]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 提交指定 tag</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">push</span><span style="color:#E1E4E8;"> [remote] [tag]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 提交所有 tag</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">push</span><span style="color:#E1E4E8;"> [remote] --tags</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 新建一个分支，指向某个tag</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">checkout</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-b</span><span style="color:#E1E4E8;"> [分支名] [tag]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 列出所有 tag</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">tag</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 根据当前 commit 创建一个 tag</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">tag</span><span style="color:#24292E;"> [tag]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 根据指定 commit 创建一个 tag</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">tag</span><span style="color:#24292E;"> [tag] [commit id]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 删除本地 tag</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">tag</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-d</span><span style="color:#24292E;"> [tag]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 删除远程 tag</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">push</span><span style="color:#24292E;"> </span><span style="color:#032F62;">origin</span><span style="color:#24292E;"> </span><span style="color:#032F62;">:refs/tags/[tagName]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 查看 tag 信息</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">show</span><span style="color:#24292E;"> [tag]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 提交指定 tag</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">push</span><span style="color:#24292E;"> [remote] [tag]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 提交所有 tag</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">push</span><span style="color:#24292E;"> [remote] --tags</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 新建一个分支，指向某个tag</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">checkout</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-b</span><span style="color:#24292E;"> [分支名] [tag]</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><h2 id="_7-查看信息" tabindex="-1">7. 查看信息 <a class="header-anchor" href="#_7-查看信息" aria-label="Permalink to &quot;7. 查看信息&quot;">​</a></h2><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark has-diff vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 显示变更的文件</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">status</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 显示当前分支的版本历史</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">log</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 显示commit历史，以及每次commit发生变更的文件</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">log</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--stat</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 搜索提交历史，根据关键词</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">log</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-S</span><span style="color:#E1E4E8;"> [keyword]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 显示某个文件的版本历史，包括文件改名</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">log</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--follow</span><span style="color:#E1E4E8;"> [文件路径]</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">whatchanged</span><span style="color:#E1E4E8;"> [文件路径]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 显示指定文件相关的每一次diff</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">log</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-p</span><span style="color:#E1E4E8;"> [文件路径]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 显示过去5次提交</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">log</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-5</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--pretty</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--oneline</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 显示所有提交过的用户，按提交次数排序</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">shortlog</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-sn</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 显示指定文件是什么人在什么时间修改过</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">blame</span><span style="color:#E1E4E8;"> [file]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 显示暂存区和工作区的差异</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">diff</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 显示工作区与当前分支最新 commit 之间的差异</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">diff</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">HEAD</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 显示今天你写了多少行代码</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">diff</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--shortstat</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;@{0 day ago}&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 显示当前分支的最近几次提交</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">reflog</span></span></code></pre><pre class="shiki github-light has-diff vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 显示变更的文件</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">status</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 显示当前分支的版本历史</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">log</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 显示commit历史，以及每次commit发生变更的文件</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">log</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--stat</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 搜索提交历史，根据关键词</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">log</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-S</span><span style="color:#24292E;"> [keyword]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 显示某个文件的版本历史，包括文件改名</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">log</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--follow</span><span style="color:#24292E;"> [文件路径]</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">whatchanged</span><span style="color:#24292E;"> [文件路径]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 显示指定文件相关的每一次diff</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">log</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-p</span><span style="color:#24292E;"> [文件路径]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 显示过去5次提交</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">log</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-5</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--pretty</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--oneline</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 显示所有提交过的用户，按提交次数排序</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">shortlog</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-sn</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 显示指定文件是什么人在什么时间修改过</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">blame</span><span style="color:#24292E;"> [file]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 显示暂存区和工作区的差异</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">diff</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 显示工作区与当前分支最新 commit 之间的差异</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">diff</span><span style="color:#24292E;"> </span><span style="color:#032F62;">HEAD</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 显示今天你写了多少行代码</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">diff</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--shortstat</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;@{0 day ago}&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 显示当前分支的最近几次提交</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">reflog</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br></div></div><h2 id="_8-提交" tabindex="-1">8. 提交 <a class="header-anchor" href="#_8-提交" aria-label="Permalink to &quot;8. 提交&quot;">​</a></h2><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 下载远程仓库的所有变动</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">fetch</span><span style="color:#E1E4E8;"> [remote]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 显示所有远程仓库</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">remote</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-v</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 显示某个远程仓库的信息</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">remote</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">show</span><span style="color:#E1E4E8;"> [remote]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 增加一个新的远程仓库，并命名</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">remote</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">add</span><span style="color:#E1E4E8;"> [name] [url]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 删除远程仓库</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">remote</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">remove</span><span style="color:#E1E4E8;"> [name]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 查看远程仓库地址</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">remote</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">get-url</span><span style="color:#E1E4E8;"> [name]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 取回远程仓库的变化，并与本地分支合并</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">pull</span><span style="color:#E1E4E8;"> [remote] [branch]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 上传本地指定分支到远程仓库</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">push</span><span style="color:#E1E4E8;"> [remote] [branch]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 强行推送当前分支到远程仓库，即使有冲突</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">push</span><span style="color:#E1E4E8;"> [remote] --force</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 推送所有分支到远程仓库</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">push</span><span style="color:#E1E4E8;"> [remote] --all</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 下载远程仓库的所有变动</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">fetch</span><span style="color:#24292E;"> [remote]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 显示所有远程仓库</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">remote</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-v</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 显示某个远程仓库的信息</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">remote</span><span style="color:#24292E;"> </span><span style="color:#032F62;">show</span><span style="color:#24292E;"> [remote]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 增加一个新的远程仓库，并命名</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">remote</span><span style="color:#24292E;"> </span><span style="color:#032F62;">add</span><span style="color:#24292E;"> [name] [url]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 删除远程仓库</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">remote</span><span style="color:#24292E;"> </span><span style="color:#032F62;">remove</span><span style="color:#24292E;"> [name]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 查看远程仓库地址</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">remote</span><span style="color:#24292E;"> </span><span style="color:#032F62;">get-url</span><span style="color:#24292E;"> [name]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 取回远程仓库的变化，并与本地分支合并</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">pull</span><span style="color:#24292E;"> [remote] [branch]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 上传本地指定分支到远程仓库</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">push</span><span style="color:#24292E;"> [remote] [branch]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 强行推送当前分支到远程仓库，即使有冲突</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">push</span><span style="color:#24292E;"> [remote] --force</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 推送所有分支到远程仓库</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">push</span><span style="color:#24292E;"> [remote] --all</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div><h2 id="_9-撤销" tabindex="-1">9. 撤销 <a class="header-anchor" href="#_9-撤销" aria-label="Permalink to &quot;9. 撤销&quot;">​</a></h2><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 重置暂存区的指定文件，与上一次 commit 保持一致，但工作区不变</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">reset</span><span style="color:#E1E4E8;"> [文件路径]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 重置暂存区与工作区，与上一次 commit 保持一致</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">reset</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--hard</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 重置当前分支的指针为指定 commit，同时重置暂存区，但工作区不变</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">reset</span><span style="color:#E1E4E8;"> [commit </span><span style="color:#9ECBFF;">id]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 重置当前分支的 HEAD 为指定 commit，同时重置暂存区和工作区，与指定 commit 一致</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">reset</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--hard</span><span style="color:#E1E4E8;"> [commit </span><span style="color:#9ECBFF;">id]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 重置当前 HEAD 为指定 commit，但保持暂存区和工作区不变</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">reset</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--keep</span><span style="color:#E1E4E8;"> [commit </span><span style="color:#9ECBFF;">id]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 新建一个 commit，用来撤销指定 commit 后者的所有变化都将被前者抵消，并且应用到当前分支</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">revert</span><span style="color:#E1E4E8;"> [commit </span><span style="color:#9ECBFF;">id]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 暂存操作</span></span>
<span class="line"><span style="color:#6A737D;"># 只暂存被追踪的文件</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">stash</span></span>
<span class="line"><span style="color:#6A737D;"># 暂存所有文件并添加说明</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">stash</span><span style="color:#E1E4E8;"> [save </span><span style="color:#9ECBFF;">&#39;说明信息&#39;]</span><span style="color:#E1E4E8;"> [-u]</span></span>
<span class="line"><span style="color:#6A737D;"># 查看 stash 列表</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">stash</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">list</span></span>
<span class="line"><span style="color:#6A737D;"># 取出最近一次的 stash</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">stash</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">apply</span></span>
<span class="line"><span style="color:#6A737D;"># 取出 stash 列表里对应数字的暂存</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">stash</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">apply</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">数字</span></span>
<span class="line"><span style="color:#6A737D;"># 取出并删除最近一次的 stash</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">stash</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">pop</span></span>
<span class="line"><span style="color:#6A737D;"># 清空所有 stash</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">stash</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">clear</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 重置暂存区的指定文件，与上一次 commit 保持一致，但工作区不变</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">reset</span><span style="color:#24292E;"> [文件路径]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 重置暂存区与工作区，与上一次 commit 保持一致</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">reset</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--hard</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 重置当前分支的指针为指定 commit，同时重置暂存区，但工作区不变</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">reset</span><span style="color:#24292E;"> [commit </span><span style="color:#032F62;">id]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 重置当前分支的 HEAD 为指定 commit，同时重置暂存区和工作区，与指定 commit 一致</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">reset</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--hard</span><span style="color:#24292E;"> [commit </span><span style="color:#032F62;">id]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 重置当前 HEAD 为指定 commit，但保持暂存区和工作区不变</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">reset</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--keep</span><span style="color:#24292E;"> [commit </span><span style="color:#032F62;">id]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 新建一个 commit，用来撤销指定 commit 后者的所有变化都将被前者抵消，并且应用到当前分支</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">revert</span><span style="color:#24292E;"> [commit </span><span style="color:#032F62;">id]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 暂存操作</span></span>
<span class="line"><span style="color:#6A737D;"># 只暂存被追踪的文件</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">stash</span></span>
<span class="line"><span style="color:#6A737D;"># 暂存所有文件并添加说明</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">stash</span><span style="color:#24292E;"> [save </span><span style="color:#032F62;">&#39;说明信息&#39;]</span><span style="color:#24292E;"> [-u]</span></span>
<span class="line"><span style="color:#6A737D;"># 查看 stash 列表</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">stash</span><span style="color:#24292E;"> </span><span style="color:#032F62;">list</span></span>
<span class="line"><span style="color:#6A737D;"># 取出最近一次的 stash</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">stash</span><span style="color:#24292E;"> </span><span style="color:#032F62;">apply</span></span>
<span class="line"><span style="color:#6A737D;"># 取出 stash 列表里对应数字的暂存</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">stash</span><span style="color:#24292E;"> </span><span style="color:#032F62;">apply</span><span style="color:#24292E;"> </span><span style="color:#032F62;">数字</span></span>
<span class="line"><span style="color:#6A737D;"># 取出并删除最近一次的 stash</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">stash</span><span style="color:#24292E;"> </span><span style="color:#032F62;">pop</span></span>
<span class="line"><span style="color:#6A737D;"># 清空所有 stash</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">stash</span><span style="color:#24292E;"> </span><span style="color:#032F62;">clear</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br></div></div><h2 id="_10-日志" tabindex="-1">10. 日志 <a class="header-anchor" href="#_10-日志" aria-label="Permalink to &quot;10. 日志&quot;">​</a></h2><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 查看提交过的完整日志</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">log</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 查看精简日志（精简版本号和提交信息）</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">log</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--oneline</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 查看精简日志（完整版本号和提交信息）</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">log</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--pretty=oneline</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 查看所有分支的所有操作记录（包括被删除的 commit 记录和 reset 操作）</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">reflog</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 查看提交过的完整日志</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">log</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 查看精简日志（精简版本号和提交信息）</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">log</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--oneline</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 查看精简日志（完整版本号和提交信息）</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">log</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--pretty=oneline</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 查看所有分支的所有操作记录（包括被删除的 commit 记录和 reset 操作）</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">reflog</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p><a href="https://www.ruanyifeng.com/blog/2015/12/git-cheat-sheet.html" target="_blank" rel="noreferrer">参考地址：阮一峰 -- 常用 Git 命令清单</a></p>`,26),o=[e];function c(r,t,i,y,E,b){return n(),a("div",null,o)}const u=s(p,[["render",c]]);export{m as __pageData,u as default};

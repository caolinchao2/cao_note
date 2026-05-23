import{_ as n,o as a,c as p,O as l}from"./chunks/framework.b55d0e42.js";const F=JSON.parse('{"title":"Docker 基础","description":"","frontmatter":{},"headers":[],"relativePath":"TechToolkit/docker/docker基础.md","filePath":"TechToolkit/docker/docker基础.md","lastUpdated":1779445540000}'),o={name:"TechToolkit/docker/docker基础.md"};function e(c,s,r,t,E,y){return a(),p("div",null,s[0]||(s[0]=[l(`<h1 id="docker-基础" tabindex="-1">Docker 基础 <a class="header-anchor" href="#docker-基础" aria-label="Permalink to &quot;Docker 基础&quot;">​</a></h1><h2 id="核心概念" tabindex="-1">核心概念 <a class="header-anchor" href="#核心概念" aria-label="Permalink to &quot;核心概念&quot;">​</a></h2><table><thead><tr><th>概念</th><th>说明</th></tr></thead><tbody><tr><td><strong>镜像（Image）</strong></td><td>只读模板，包含运行环境和应用程序</td></tr><tr><td><strong>容器（Container）</strong></td><td>镜像的运行实例，可启动/停止/删除</td></tr><tr><td><strong>仓库（Registry）</strong></td><td>存储镜像的地方（Docker Hub、私服等）</td></tr><tr><td><strong>Dockerfile</strong></td><td>构建镜像的自动化脚本</td></tr><tr><td><strong>卷（Volume）</strong></td><td>持久化数据存储</td></tr><tr><td><strong>网络（Network）</strong></td><td>容器间通信的隔离网络</td></tr></tbody></table><h2 id="常用命令" tabindex="-1">常用命令 <a class="header-anchor" href="#常用命令" aria-label="Permalink to &quot;常用命令&quot;">​</a></h2><h3 id="镜像管理" tabindex="-1">镜像管理 <a class="header-anchor" href="#镜像管理" aria-label="Permalink to &quot;镜像管理&quot;">​</a></h3><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 搜索镜像</span></span>
<span class="line"><span style="color:#B392F0;">docker</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">search</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">nginx</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 拉取镜像</span></span>
<span class="line"><span style="color:#B392F0;">docker</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">pull</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">nginx:latest</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 列出镜像</span></span>
<span class="line"><span style="color:#B392F0;">docker</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">images</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 构建镜像</span></span>
<span class="line"><span style="color:#B392F0;">docker</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">build</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-t</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">my-app:1.0</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 删除镜像</span></span>
<span class="line"><span style="color:#B392F0;">docker</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">rmi</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">my-app:1.0</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 标签/重命名</span></span>
<span class="line"><span style="color:#B392F0;">docker</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">tag</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">my-app:1.0</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">my-app:latest</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 导出/导入镜像</span></span>
<span class="line"><span style="color:#B392F0;">docker</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">save</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-o</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">my-app.tar</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">my-app:1.0</span></span>
<span class="line"><span style="color:#B392F0;">docker</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">load</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-i</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">my-app.tar</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 查看镜像历史</span></span>
<span class="line"><span style="color:#B392F0;">docker</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">history</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">my-app:1.0</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 搜索镜像</span></span>
<span class="line"><span style="color:#6F42C1;">docker</span><span style="color:#24292E;"> </span><span style="color:#032F62;">search</span><span style="color:#24292E;"> </span><span style="color:#032F62;">nginx</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 拉取镜像</span></span>
<span class="line"><span style="color:#6F42C1;">docker</span><span style="color:#24292E;"> </span><span style="color:#032F62;">pull</span><span style="color:#24292E;"> </span><span style="color:#032F62;">nginx:latest</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 列出镜像</span></span>
<span class="line"><span style="color:#6F42C1;">docker</span><span style="color:#24292E;"> </span><span style="color:#032F62;">images</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 构建镜像</span></span>
<span class="line"><span style="color:#6F42C1;">docker</span><span style="color:#24292E;"> </span><span style="color:#032F62;">build</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-t</span><span style="color:#24292E;"> </span><span style="color:#032F62;">my-app:1.0</span><span style="color:#24292E;"> </span><span style="color:#032F62;">.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 删除镜像</span></span>
<span class="line"><span style="color:#6F42C1;">docker</span><span style="color:#24292E;"> </span><span style="color:#032F62;">rmi</span><span style="color:#24292E;"> </span><span style="color:#032F62;">my-app:1.0</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 标签/重命名</span></span>
<span class="line"><span style="color:#6F42C1;">docker</span><span style="color:#24292E;"> </span><span style="color:#032F62;">tag</span><span style="color:#24292E;"> </span><span style="color:#032F62;">my-app:1.0</span><span style="color:#24292E;"> </span><span style="color:#032F62;">my-app:latest</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 导出/导入镜像</span></span>
<span class="line"><span style="color:#6F42C1;">docker</span><span style="color:#24292E;"> </span><span style="color:#032F62;">save</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-o</span><span style="color:#24292E;"> </span><span style="color:#032F62;">my-app.tar</span><span style="color:#24292E;"> </span><span style="color:#032F62;">my-app:1.0</span></span>
<span class="line"><span style="color:#6F42C1;">docker</span><span style="color:#24292E;"> </span><span style="color:#032F62;">load</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-i</span><span style="color:#24292E;"> </span><span style="color:#032F62;">my-app.tar</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 查看镜像历史</span></span>
<span class="line"><span style="color:#6F42C1;">docker</span><span style="color:#24292E;"> </span><span style="color:#032F62;">history</span><span style="color:#24292E;"> </span><span style="color:#032F62;">my-app:1.0</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><h3 id="容器管理" tabindex="-1">容器管理 <a class="header-anchor" href="#容器管理" aria-label="Permalink to &quot;容器管理&quot;">​</a></h3><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 创建并运行容器</span></span>
<span class="line"><span style="color:#B392F0;">docker</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">run</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-d</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--name</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">my-nginx</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-p</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">8080</span><span style="color:#9ECBFF;">:80</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">nginx:latest</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 列出运行中的容器</span></span>
<span class="line"><span style="color:#B392F0;">docker</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">ps</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 列出所有容器（含已停止）</span></span>
<span class="line"><span style="color:#B392F0;">docker</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">ps</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-a</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 停止容器</span></span>
<span class="line"><span style="color:#B392F0;">docker</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">stop</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">my-nginx</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 启动容器</span></span>
<span class="line"><span style="color:#B392F0;">docker</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">start</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">my-nginx</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 重启容器</span></span>
<span class="line"><span style="color:#B392F0;">docker</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">restart</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">my-nginx</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 进入容器</span></span>
<span class="line"><span style="color:#B392F0;">docker</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">exec</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-it</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">my-nginx</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/bin/bash</span></span>
<span class="line"><span style="color:#B392F0;">docker</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">exec</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-it</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">my-nginx</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/bin/sh</span><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;"># Alpine 镜像</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 查看容器日志</span></span>
<span class="line"><span style="color:#B392F0;">docker</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">logs</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-f</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">my-nginx</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 查看容器资源占用</span></span>
<span class="line"><span style="color:#B392F0;">docker</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">stats</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 复制文件到/从容器</span></span>
<span class="line"><span style="color:#B392F0;">docker</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">cp</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">local.txt</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">my-nginx:/tmp/</span></span>
<span class="line"><span style="color:#B392F0;">docker</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">cp</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">my-nginx:/tmp/file.txt</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 删除容器</span></span>
<span class="line"><span style="color:#B392F0;">docker</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">rm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">my-nginx</span></span>
<span class="line"><span style="color:#B392F0;">docker</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">rm</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-f</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">my-nginx</span><span style="color:#E1E4E8;">   </span><span style="color:#6A737D;"># 强制删除运行中的容器</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 清理所有停止的容器</span></span>
<span class="line"><span style="color:#B392F0;">docker</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">container</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">prune</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 创建并运行容器</span></span>
<span class="line"><span style="color:#6F42C1;">docker</span><span style="color:#24292E;"> </span><span style="color:#032F62;">run</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-d</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--name</span><span style="color:#24292E;"> </span><span style="color:#032F62;">my-nginx</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-p</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">8080</span><span style="color:#032F62;">:80</span><span style="color:#24292E;"> </span><span style="color:#032F62;">nginx:latest</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 列出运行中的容器</span></span>
<span class="line"><span style="color:#6F42C1;">docker</span><span style="color:#24292E;"> </span><span style="color:#032F62;">ps</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 列出所有容器（含已停止）</span></span>
<span class="line"><span style="color:#6F42C1;">docker</span><span style="color:#24292E;"> </span><span style="color:#032F62;">ps</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-a</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 停止容器</span></span>
<span class="line"><span style="color:#6F42C1;">docker</span><span style="color:#24292E;"> </span><span style="color:#032F62;">stop</span><span style="color:#24292E;"> </span><span style="color:#032F62;">my-nginx</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 启动容器</span></span>
<span class="line"><span style="color:#6F42C1;">docker</span><span style="color:#24292E;"> </span><span style="color:#032F62;">start</span><span style="color:#24292E;"> </span><span style="color:#032F62;">my-nginx</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 重启容器</span></span>
<span class="line"><span style="color:#6F42C1;">docker</span><span style="color:#24292E;"> </span><span style="color:#032F62;">restart</span><span style="color:#24292E;"> </span><span style="color:#032F62;">my-nginx</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 进入容器</span></span>
<span class="line"><span style="color:#6F42C1;">docker</span><span style="color:#24292E;"> </span><span style="color:#032F62;">exec</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-it</span><span style="color:#24292E;"> </span><span style="color:#032F62;">my-nginx</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/bin/bash</span></span>
<span class="line"><span style="color:#6F42C1;">docker</span><span style="color:#24292E;"> </span><span style="color:#032F62;">exec</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-it</span><span style="color:#24292E;"> </span><span style="color:#032F62;">my-nginx</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/bin/sh</span><span style="color:#24292E;">  </span><span style="color:#6A737D;"># Alpine 镜像</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 查看容器日志</span></span>
<span class="line"><span style="color:#6F42C1;">docker</span><span style="color:#24292E;"> </span><span style="color:#032F62;">logs</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-f</span><span style="color:#24292E;"> </span><span style="color:#032F62;">my-nginx</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 查看容器资源占用</span></span>
<span class="line"><span style="color:#6F42C1;">docker</span><span style="color:#24292E;"> </span><span style="color:#032F62;">stats</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 复制文件到/从容器</span></span>
<span class="line"><span style="color:#6F42C1;">docker</span><span style="color:#24292E;"> </span><span style="color:#032F62;">cp</span><span style="color:#24292E;"> </span><span style="color:#032F62;">local.txt</span><span style="color:#24292E;"> </span><span style="color:#032F62;">my-nginx:/tmp/</span></span>
<span class="line"><span style="color:#6F42C1;">docker</span><span style="color:#24292E;"> </span><span style="color:#032F62;">cp</span><span style="color:#24292E;"> </span><span style="color:#032F62;">my-nginx:/tmp/file.txt</span><span style="color:#24292E;"> </span><span style="color:#032F62;">.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 删除容器</span></span>
<span class="line"><span style="color:#6F42C1;">docker</span><span style="color:#24292E;"> </span><span style="color:#032F62;">rm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">my-nginx</span></span>
<span class="line"><span style="color:#6F42C1;">docker</span><span style="color:#24292E;"> </span><span style="color:#032F62;">rm</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-f</span><span style="color:#24292E;"> </span><span style="color:#032F62;">my-nginx</span><span style="color:#24292E;">   </span><span style="color:#6A737D;"># 强制删除运行中的容器</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 清理所有停止的容器</span></span>
<span class="line"><span style="color:#6F42C1;">docker</span><span style="color:#24292E;"> </span><span style="color:#032F62;">container</span><span style="color:#24292E;"> </span><span style="color:#032F62;">prune</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br></div></div><h3 id="数据卷-volume" tabindex="-1">数据卷（Volume） <a class="header-anchor" href="#数据卷-volume" aria-label="Permalink to &quot;数据卷（Volume）&quot;">​</a></h3><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 创建卷</span></span>
<span class="line"><span style="color:#B392F0;">docker</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">volume</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">create</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">my-data</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 列出卷</span></span>
<span class="line"><span style="color:#B392F0;">docker</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">volume</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">ls</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 挂载卷（运行容器时）</span></span>
<span class="line"><span style="color:#B392F0;">docker</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">run</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-d</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--name</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">my-app</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-v</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">my-data:/app/data</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">my-app:1.0</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 挂载宿主机目录（bind mount）</span></span>
<span class="line"><span style="color:#B392F0;">docker</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">run</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-d</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--name</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">my-app</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-v</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/host/path:/app/data</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">my-app:1.0</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 查看卷详情</span></span>
<span class="line"><span style="color:#B392F0;">docker</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">volume</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">inspect</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">my-data</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 删除卷</span></span>
<span class="line"><span style="color:#B392F0;">docker</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">volume</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">rm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">my-data</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 清理未使用的卷</span></span>
<span class="line"><span style="color:#B392F0;">docker</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">volume</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">prune</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 创建卷</span></span>
<span class="line"><span style="color:#6F42C1;">docker</span><span style="color:#24292E;"> </span><span style="color:#032F62;">volume</span><span style="color:#24292E;"> </span><span style="color:#032F62;">create</span><span style="color:#24292E;"> </span><span style="color:#032F62;">my-data</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 列出卷</span></span>
<span class="line"><span style="color:#6F42C1;">docker</span><span style="color:#24292E;"> </span><span style="color:#032F62;">volume</span><span style="color:#24292E;"> </span><span style="color:#032F62;">ls</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 挂载卷（运行容器时）</span></span>
<span class="line"><span style="color:#6F42C1;">docker</span><span style="color:#24292E;"> </span><span style="color:#032F62;">run</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-d</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--name</span><span style="color:#24292E;"> </span><span style="color:#032F62;">my-app</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-v</span><span style="color:#24292E;"> </span><span style="color:#032F62;">my-data:/app/data</span><span style="color:#24292E;"> </span><span style="color:#032F62;">my-app:1.0</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 挂载宿主机目录（bind mount）</span></span>
<span class="line"><span style="color:#6F42C1;">docker</span><span style="color:#24292E;"> </span><span style="color:#032F62;">run</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-d</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--name</span><span style="color:#24292E;"> </span><span style="color:#032F62;">my-app</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-v</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/host/path:/app/data</span><span style="color:#24292E;"> </span><span style="color:#032F62;">my-app:1.0</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 查看卷详情</span></span>
<span class="line"><span style="color:#6F42C1;">docker</span><span style="color:#24292E;"> </span><span style="color:#032F62;">volume</span><span style="color:#24292E;"> </span><span style="color:#032F62;">inspect</span><span style="color:#24292E;"> </span><span style="color:#032F62;">my-data</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 删除卷</span></span>
<span class="line"><span style="color:#6F42C1;">docker</span><span style="color:#24292E;"> </span><span style="color:#032F62;">volume</span><span style="color:#24292E;"> </span><span style="color:#032F62;">rm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">my-data</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 清理未使用的卷</span></span>
<span class="line"><span style="color:#6F42C1;">docker</span><span style="color:#24292E;"> </span><span style="color:#032F62;">volume</span><span style="color:#24292E;"> </span><span style="color:#032F62;">prune</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><h3 id="网络管理" tabindex="-1">网络管理 <a class="header-anchor" href="#网络管理" aria-label="Permalink to &quot;网络管理&quot;">​</a></h3><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 列出网络</span></span>
<span class="line"><span style="color:#B392F0;">docker</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">network</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">ls</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 创建网络</span></span>
<span class="line"><span style="color:#B392F0;">docker</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">network</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">create</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--driver</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">bridge</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">my-net</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 容器连接到网络</span></span>
<span class="line"><span style="color:#B392F0;">docker</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">network</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">connect</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">my-net</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">my-container</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 容器断开网络</span></span>
<span class="line"><span style="color:#B392F0;">docker</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">network</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">disconnect</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">my-net</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">my-container</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 查看网络详情</span></span>
<span class="line"><span style="color:#B392F0;">docker</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">network</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">inspect</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">my-net</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 创建容器时指定网络</span></span>
<span class="line"><span style="color:#B392F0;">docker</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">run</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-d</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--name</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">my-app</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--network</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">my-net</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">my-app:1.0</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 删除网络</span></span>
<span class="line"><span style="color:#B392F0;">docker</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">network</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">rm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">my-net</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 列出网络</span></span>
<span class="line"><span style="color:#6F42C1;">docker</span><span style="color:#24292E;"> </span><span style="color:#032F62;">network</span><span style="color:#24292E;"> </span><span style="color:#032F62;">ls</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 创建网络</span></span>
<span class="line"><span style="color:#6F42C1;">docker</span><span style="color:#24292E;"> </span><span style="color:#032F62;">network</span><span style="color:#24292E;"> </span><span style="color:#032F62;">create</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--driver</span><span style="color:#24292E;"> </span><span style="color:#032F62;">bridge</span><span style="color:#24292E;"> </span><span style="color:#032F62;">my-net</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 容器连接到网络</span></span>
<span class="line"><span style="color:#6F42C1;">docker</span><span style="color:#24292E;"> </span><span style="color:#032F62;">network</span><span style="color:#24292E;"> </span><span style="color:#032F62;">connect</span><span style="color:#24292E;"> </span><span style="color:#032F62;">my-net</span><span style="color:#24292E;"> </span><span style="color:#032F62;">my-container</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 容器断开网络</span></span>
<span class="line"><span style="color:#6F42C1;">docker</span><span style="color:#24292E;"> </span><span style="color:#032F62;">network</span><span style="color:#24292E;"> </span><span style="color:#032F62;">disconnect</span><span style="color:#24292E;"> </span><span style="color:#032F62;">my-net</span><span style="color:#24292E;"> </span><span style="color:#032F62;">my-container</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 查看网络详情</span></span>
<span class="line"><span style="color:#6F42C1;">docker</span><span style="color:#24292E;"> </span><span style="color:#032F62;">network</span><span style="color:#24292E;"> </span><span style="color:#032F62;">inspect</span><span style="color:#24292E;"> </span><span style="color:#032F62;">my-net</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 创建容器时指定网络</span></span>
<span class="line"><span style="color:#6F42C1;">docker</span><span style="color:#24292E;"> </span><span style="color:#032F62;">run</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-d</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--name</span><span style="color:#24292E;"> </span><span style="color:#032F62;">my-app</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--network</span><span style="color:#24292E;"> </span><span style="color:#032F62;">my-net</span><span style="color:#24292E;"> </span><span style="color:#032F62;">my-app:1.0</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 删除网络</span></span>
<span class="line"><span style="color:#6F42C1;">docker</span><span style="color:#24292E;"> </span><span style="color:#032F62;">network</span><span style="color:#24292E;"> </span><span style="color:#032F62;">rm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">my-net</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><h3 id="常用运行选项" tabindex="-1">常用运行选项 <a class="header-anchor" href="#常用运行选项" aria-label="Permalink to &quot;常用运行选项&quot;">​</a></h3><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 交互式运行（测试用）</span></span>
<span class="line"><span style="color:#B392F0;">docker</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">run</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-it</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--rm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">ubuntu:22.04</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/bin/bash</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 后台运行 + 端口映射 + 数据卷</span></span>
<span class="line"><span style="color:#B392F0;">docker</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">run</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-d</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">\\</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">--name</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">my-app</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">\\</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">-p</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">3000</span><span style="color:#9ECBFF;">:3000</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">\\</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">-p</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">8080</span><span style="color:#9ECBFF;">:8080</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">\\</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">-v</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">$(</span><span style="color:#79B8FF;">pwd</span><span style="color:#9ECBFF;">)/data:/app/data</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">\\</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">-v</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">my-volume:/app/config</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">\\</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">--restart</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">unless-stopped</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">\\</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">-e</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">NODE_ENV=production</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">\\</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">--network</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">my-net</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">\\</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">my-app:1.0</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 资源限制</span></span>
<span class="line"><span style="color:#B392F0;">docker</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">run</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-d</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">\\</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">--memory=</span><span style="color:#9ECBFF;">&quot;512m&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">\\</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">--cpus=</span><span style="color:#9ECBFF;">&quot;1.5&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">\\</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">--restart</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">on-failure:3</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">\\</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">nginx:latest</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 交互式运行（测试用）</span></span>
<span class="line"><span style="color:#6F42C1;">docker</span><span style="color:#24292E;"> </span><span style="color:#032F62;">run</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-it</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--rm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">ubuntu:22.04</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/bin/bash</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 后台运行 + 端口映射 + 数据卷</span></span>
<span class="line"><span style="color:#6F42C1;">docker</span><span style="color:#24292E;"> </span><span style="color:#032F62;">run</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-d</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">\\</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">--name</span><span style="color:#24292E;"> </span><span style="color:#032F62;">my-app</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">\\</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">-p</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">3000</span><span style="color:#032F62;">:3000</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">\\</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">-p</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">8080</span><span style="color:#032F62;">:8080</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">\\</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">-v</span><span style="color:#24292E;"> </span><span style="color:#032F62;">$(</span><span style="color:#005CC5;">pwd</span><span style="color:#032F62;">)/data:/app/data</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">\\</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">-v</span><span style="color:#24292E;"> </span><span style="color:#032F62;">my-volume:/app/config</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">\\</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">--restart</span><span style="color:#24292E;"> </span><span style="color:#032F62;">unless-stopped</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">\\</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">-e</span><span style="color:#24292E;"> </span><span style="color:#032F62;">NODE_ENV=production</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">\\</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">--network</span><span style="color:#24292E;"> </span><span style="color:#032F62;">my-net</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">\\</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#032F62;">my-app:1.0</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 资源限制</span></span>
<span class="line"><span style="color:#6F42C1;">docker</span><span style="color:#24292E;"> </span><span style="color:#032F62;">run</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-d</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">\\</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">--memory=</span><span style="color:#032F62;">&quot;512m&quot;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">\\</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">--cpus=</span><span style="color:#032F62;">&quot;1.5&quot;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">\\</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">--restart</span><span style="color:#24292E;"> </span><span style="color:#032F62;">on-failure:3</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">\\</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#032F62;">nginx:latest</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><hr><h2 id="dockerfile" tabindex="-1">Dockerfile <a class="header-anchor" href="#dockerfile" aria-label="Permalink to &quot;Dockerfile&quot;">​</a></h2><h3 id="常用指令" tabindex="-1">常用指令 <a class="header-anchor" href="#常用指令" aria-label="Permalink to &quot;常用指令&quot;">​</a></h3><table><thead><tr><th>指令</th><th>用途</th><th>示例</th></tr></thead><tbody><tr><td><code>FROM</code></td><td>基础镜像</td><td><code>FROM node:20-alpine</code></td></tr><tr><td><code>WORKDIR</code></td><td>工作目录</td><td><code>WORKDIR /app</code></td></tr><tr><td><code>COPY</code></td><td>复制文件</td><td><code>COPY package.json ./</code></td></tr><tr><td><code>ADD</code></td><td>复制文件（支持自动解压+URL）</td><td><code>ADD app.tar.gz /app</code></td></tr><tr><td><code>RUN</code></td><td>执行命令（构建时）</td><td><code>RUN npm install</code></td></tr><tr><td><code>CMD</code></td><td>默认启动命令</td><td><code>CMD [&quot;node&quot;, &quot;server.js&quot;]</code></td></tr><tr><td><code>ENTRYPOINT</code></td><td>入口点</td><td><code>ENTRYPOINT [&quot;docker-entrypoint.sh&quot;]</code></td></tr><tr><td><code>EXPOSE</code></td><td>声明端口</td><td><code>EXPOSE 3000</code></td></tr><tr><td><code>ENV</code></td><td>环境变量</td><td><code>ENV NODE_ENV=production</code></td></tr><tr><td><code>ARG</code></td><td>构建参数</td><td><code>ARG VERSION=1.0</code></td></tr><tr><td><code>LABEL</code></td><td>元数据标签</td><td><code>LABEL maintainer=&quot;me@example.com&quot;</code></td></tr><tr><td><code>HEALTHCHECK</code></td><td>健康检查</td><td><code>HEALTHCHECK CMD curl -f http://localhost:3000</code></td></tr><tr><td><code>USER</code></td><td>运行用户</td><td><code>USER node</code></td></tr></tbody></table><h3 id="多阶段构建" tabindex="-1">多阶段构建 <a class="header-anchor" href="#多阶段构建" aria-label="Permalink to &quot;多阶段构建&quot;">​</a></h3><div class="language-dockerfile vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">dockerfile</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 构建阶段</span></span>
<span class="line"><span style="color:#F97583;">FROM</span><span style="color:#E1E4E8;"> node:20-alpine </span><span style="color:#F97583;">AS</span><span style="color:#E1E4E8;"> builder</span></span>
<span class="line"><span style="color:#F97583;">WORKDIR</span><span style="color:#E1E4E8;"> /app</span></span>
<span class="line"><span style="color:#F97583;">COPY</span><span style="color:#E1E4E8;"> package*.json ./</span></span>
<span class="line"><span style="color:#F97583;">RUN</span><span style="color:#E1E4E8;"> npm ci</span></span>
<span class="line"><span style="color:#F97583;">COPY</span><span style="color:#E1E4E8;"> . .</span></span>
<span class="line"><span style="color:#F97583;">RUN</span><span style="color:#E1E4E8;"> npm run build</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 生产阶段</span></span>
<span class="line"><span style="color:#F97583;">FROM</span><span style="color:#E1E4E8;"> nginx:alpine</span></span>
<span class="line"><span style="color:#F97583;">COPY</span><span style="color:#E1E4E8;"> --from=builder /app/dist /usr/share/nginx/html</span></span>
<span class="line"><span style="color:#F97583;">EXPOSE</span><span style="color:#E1E4E8;"> 80</span></span>
<span class="line"><span style="color:#F97583;">CMD</span><span style="color:#E1E4E8;"> [</span><span style="color:#9ECBFF;">&quot;nginx&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;-g&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;daemon off;&quot;</span><span style="color:#E1E4E8;">]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 构建阶段</span></span>
<span class="line"><span style="color:#D73A49;">FROM</span><span style="color:#24292E;"> node:20-alpine </span><span style="color:#D73A49;">AS</span><span style="color:#24292E;"> builder</span></span>
<span class="line"><span style="color:#D73A49;">WORKDIR</span><span style="color:#24292E;"> /app</span></span>
<span class="line"><span style="color:#D73A49;">COPY</span><span style="color:#24292E;"> package*.json ./</span></span>
<span class="line"><span style="color:#D73A49;">RUN</span><span style="color:#24292E;"> npm ci</span></span>
<span class="line"><span style="color:#D73A49;">COPY</span><span style="color:#24292E;"> . .</span></span>
<span class="line"><span style="color:#D73A49;">RUN</span><span style="color:#24292E;"> npm run build</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 生产阶段</span></span>
<span class="line"><span style="color:#D73A49;">FROM</span><span style="color:#24292E;"> nginx:alpine</span></span>
<span class="line"><span style="color:#D73A49;">COPY</span><span style="color:#24292E;"> --from=builder /app/dist /usr/share/nginx/html</span></span>
<span class="line"><span style="color:#D73A49;">EXPOSE</span><span style="color:#24292E;"> 80</span></span>
<span class="line"><span style="color:#D73A49;">CMD</span><span style="color:#24292E;"> [</span><span style="color:#032F62;">&quot;nginx&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;-g&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;daemon off;&quot;</span><span style="color:#24292E;">]</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h3 id="最佳实践" tabindex="-1">最佳实践 <a class="header-anchor" href="#最佳实践" aria-label="Permalink to &quot;最佳实践&quot;">​</a></h3><div class="language-dockerfile vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">dockerfile</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 使用 Alpine 减小体积</span></span>
<span class="line"><span style="color:#F97583;">FROM</span><span style="color:#E1E4E8;"> node:20-alpine</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 设置工作目录</span></span>
<span class="line"><span style="color:#F97583;">WORKDIR</span><span style="color:#E1E4E8;"> /app</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 先复制依赖配置（利用缓存）</span></span>
<span class="line"><span style="color:#F97583;">COPY</span><span style="color:#E1E4E8;"> package*.json ./</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 安装依赖（带缓存层）</span></span>
<span class="line"><span style="color:#F97583;">RUN</span><span style="color:#E1E4E8;"> npm ci --only=production &amp;&amp; npm cache clean --force</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 复制源码</span></span>
<span class="line"><span style="color:#F97583;">COPY</span><span style="color:#E1E4E8;"> . .</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 非 root 用户运行</span></span>
<span class="line"><span style="color:#F97583;">RUN</span><span style="color:#E1E4E8;"> chown -R node:node /app</span></span>
<span class="line"><span style="color:#F97583;">USER</span><span style="color:#E1E4E8;"> node</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 健康检查</span></span>
<span class="line"><span style="color:#F97583;">HEALTHCHECK</span><span style="color:#E1E4E8;"> --interval=30s --timeout=3s --retries=3 \\</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">CMD</span><span style="color:#E1E4E8;"> wget --no-verbose --tries=1 --spider http://localhost:3000/health || exit 1</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">EXPOSE</span><span style="color:#E1E4E8;"> 3000</span></span>
<span class="line"><span style="color:#F97583;">CMD</span><span style="color:#E1E4E8;"> [</span><span style="color:#9ECBFF;">&quot;node&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;server.js&quot;</span><span style="color:#E1E4E8;">]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 使用 Alpine 减小体积</span></span>
<span class="line"><span style="color:#D73A49;">FROM</span><span style="color:#24292E;"> node:20-alpine</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 设置工作目录</span></span>
<span class="line"><span style="color:#D73A49;">WORKDIR</span><span style="color:#24292E;"> /app</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 先复制依赖配置（利用缓存）</span></span>
<span class="line"><span style="color:#D73A49;">COPY</span><span style="color:#24292E;"> package*.json ./</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 安装依赖（带缓存层）</span></span>
<span class="line"><span style="color:#D73A49;">RUN</span><span style="color:#24292E;"> npm ci --only=production &amp;&amp; npm cache clean --force</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 复制源码</span></span>
<span class="line"><span style="color:#D73A49;">COPY</span><span style="color:#24292E;"> . .</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 非 root 用户运行</span></span>
<span class="line"><span style="color:#D73A49;">RUN</span><span style="color:#24292E;"> chown -R node:node /app</span></span>
<span class="line"><span style="color:#D73A49;">USER</span><span style="color:#24292E;"> node</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 健康检查</span></span>
<span class="line"><span style="color:#D73A49;">HEALTHCHECK</span><span style="color:#24292E;"> --interval=30s --timeout=3s --retries=3 \\</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">CMD</span><span style="color:#24292E;"> wget --no-verbose --tries=1 --spider http://localhost:3000/health || exit 1</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">EXPOSE</span><span style="color:#24292E;"> 3000</span></span>
<span class="line"><span style="color:#D73A49;">CMD</span><span style="color:#24292E;"> [</span><span style="color:#032F62;">&quot;node&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;server.js&quot;</span><span style="color:#24292E;">]</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><hr><h2 id="docker-compose" tabindex="-1">Docker Compose <a class="header-anchor" href="#docker-compose" aria-label="Permalink to &quot;Docker Compose&quot;">​</a></h2><h3 id="docker-compose-yml-参考" tabindex="-1">docker-compose.yml 参考 <a class="header-anchor" href="#docker-compose-yml-参考" aria-label="Permalink to &quot;docker-compose.yml 参考&quot;">​</a></h3><div class="language-yaml vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#85E89D;">version</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;3.8&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#85E89D;">services</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;"># Web 服务</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">web</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">build</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">context</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">.</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">dockerfile</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Dockerfile</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">args</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">        - </span><span style="color:#9ECBFF;">NODE_ENV=production</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">image</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">my-app:latest</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">container_name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">my-web</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">ports</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#9ECBFF;">&quot;3000:3000&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">environment</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#9ECBFF;">NODE_ENV=production</span></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#9ECBFF;">DB_HOST=db</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">env_file</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#9ECBFF;">.env.production</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">volumes</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#9ECBFF;">./data:/app/data</span></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#9ECBFF;">/app/node_modules</span><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;"># 匿名卷，避免覆盖</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">depends_on</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">db</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">condition</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">service_healthy</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">redis</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">condition</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">service_started</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">restart</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">unless-stopped</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">networks</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#9ECBFF;">frontend</span></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#9ECBFF;">backend</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">healthcheck</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">test</span><span style="color:#E1E4E8;">: [</span><span style="color:#9ECBFF;">&quot;CMD&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;curl&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;-f&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;http://localhost:3000/health&quot;</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">interval</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">30s</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">timeout</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">10s</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">retries</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">3</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;"># 数据库</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">db</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">image</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">postgres:16-alpine</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">container_name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">my-db</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">environment</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">POSTGRES_DB</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">myapp</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">POSTGRES_USER</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">app</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">POSTGRES_PASSWORD</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">\${DB_PASSWORD}</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">volumes</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#9ECBFF;">pg-data:/var/lib/postgresql/data</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">ports</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#9ECBFF;">&quot;5432:5432&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">networks</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#9ECBFF;">backend</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">healthcheck</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">test</span><span style="color:#E1E4E8;">: [</span><span style="color:#9ECBFF;">&quot;CMD-SHELL&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;pg_isready -U app&quot;</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">interval</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">10s</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">timeout</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">5s</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">retries</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">5</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;"># 缓存</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">redis</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">image</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">redis:7-alpine</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">container_name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">my-redis</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">volumes</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#9ECBFF;">redis-data:/data</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">command</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">redis-server --appendonly yes</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">ports</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#9ECBFF;">&quot;6379:6379&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">networks</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#9ECBFF;">backend</span></span>
<span class="line"></span>
<span class="line"><span style="color:#85E89D;">volumes</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">pg-data</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">redis-data</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"></span>
<span class="line"><span style="color:#85E89D;">networks</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">frontend</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">driver</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">bridge</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">backend</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">driver</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">bridge</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#22863A;">version</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;3.8&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#22863A;">services</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;"># Web 服务</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">web</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">build</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#22863A;">context</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">.</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#22863A;">dockerfile</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Dockerfile</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#22863A;">args</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">        - </span><span style="color:#032F62;">NODE_ENV=production</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">image</span><span style="color:#24292E;">: </span><span style="color:#032F62;">my-app:latest</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">container_name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">my-web</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">ports</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#032F62;">&quot;3000:3000&quot;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">environment</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#032F62;">NODE_ENV=production</span></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#032F62;">DB_HOST=db</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">env_file</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#032F62;">.env.production</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">volumes</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#032F62;">./data:/app/data</span></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#032F62;">/app/node_modules</span><span style="color:#24292E;">  </span><span style="color:#6A737D;"># 匿名卷，避免覆盖</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">depends_on</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#22863A;">db</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">condition</span><span style="color:#24292E;">: </span><span style="color:#032F62;">service_healthy</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#22863A;">redis</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">condition</span><span style="color:#24292E;">: </span><span style="color:#032F62;">service_started</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">restart</span><span style="color:#24292E;">: </span><span style="color:#032F62;">unless-stopped</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">networks</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#032F62;">frontend</span></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#032F62;">backend</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">healthcheck</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#22863A;">test</span><span style="color:#24292E;">: [</span><span style="color:#032F62;">&quot;CMD&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;curl&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;-f&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;http://localhost:3000/health&quot;</span><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#22863A;">interval</span><span style="color:#24292E;">: </span><span style="color:#032F62;">30s</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#22863A;">timeout</span><span style="color:#24292E;">: </span><span style="color:#032F62;">10s</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#22863A;">retries</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">3</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;"># 数据库</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">db</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">image</span><span style="color:#24292E;">: </span><span style="color:#032F62;">postgres:16-alpine</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">container_name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">my-db</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">environment</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#22863A;">POSTGRES_DB</span><span style="color:#24292E;">: </span><span style="color:#032F62;">myapp</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#22863A;">POSTGRES_USER</span><span style="color:#24292E;">: </span><span style="color:#032F62;">app</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#22863A;">POSTGRES_PASSWORD</span><span style="color:#24292E;">: </span><span style="color:#032F62;">\${DB_PASSWORD}</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">volumes</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#032F62;">pg-data:/var/lib/postgresql/data</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">ports</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#032F62;">&quot;5432:5432&quot;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">networks</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#032F62;">backend</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">healthcheck</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#22863A;">test</span><span style="color:#24292E;">: [</span><span style="color:#032F62;">&quot;CMD-SHELL&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;pg_isready -U app&quot;</span><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#22863A;">interval</span><span style="color:#24292E;">: </span><span style="color:#032F62;">10s</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#22863A;">timeout</span><span style="color:#24292E;">: </span><span style="color:#032F62;">5s</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#22863A;">retries</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">5</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;"># 缓存</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">redis</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">image</span><span style="color:#24292E;">: </span><span style="color:#032F62;">redis:7-alpine</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">container_name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">my-redis</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">volumes</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#032F62;">redis-data:/data</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">command</span><span style="color:#24292E;">: </span><span style="color:#032F62;">redis-server --appendonly yes</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">ports</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#032F62;">&quot;6379:6379&quot;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">networks</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#032F62;">backend</span></span>
<span class="line"></span>
<span class="line"><span style="color:#22863A;">volumes</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">pg-data</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">redis-data</span><span style="color:#24292E;">:</span></span>
<span class="line"></span>
<span class="line"><span style="color:#22863A;">networks</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">frontend</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">driver</span><span style="color:#24292E;">: </span><span style="color:#032F62;">bridge</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">backend</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">driver</span><span style="color:#24292E;">: </span><span style="color:#032F62;">bridge</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br></div></div><h3 id="常用-compose-命令" tabindex="-1">常用 Compose 命令 <a class="header-anchor" href="#常用-compose-命令" aria-label="Permalink to &quot;常用 Compose 命令&quot;">​</a></h3><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 启动所有服务</span></span>
<span class="line"><span style="color:#B392F0;">docker</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">compose</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">up</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-d</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 构建并启动</span></span>
<span class="line"><span style="color:#B392F0;">docker</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">compose</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">up</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-d</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--build</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 查看日志</span></span>
<span class="line"><span style="color:#B392F0;">docker</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">compose</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">logs</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-f</span></span>
<span class="line"><span style="color:#B392F0;">docker</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">compose</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">logs</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-f</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">web</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 列出服务</span></span>
<span class="line"><span style="color:#B392F0;">docker</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">compose</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">ps</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 执行命令</span></span>
<span class="line"><span style="color:#B392F0;">docker</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">compose</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">exec</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">web</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/bin/sh</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 停止服务</span></span>
<span class="line"><span style="color:#B392F0;">docker</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">compose</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">stop</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 停止并删除容器</span></span>
<span class="line"><span style="color:#B392F0;">docker</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">compose</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">down</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 停止并删除容器+卷</span></span>
<span class="line"><span style="color:#B392F0;">docker</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">compose</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">down</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-v</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 重启服务</span></span>
<span class="line"><span style="color:#B392F0;">docker</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">compose</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">restart</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 拉取最新镜像</span></span>
<span class="line"><span style="color:#B392F0;">docker</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">compose</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">pull</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 查看服务资源占用</span></span>
<span class="line"><span style="color:#B392F0;">docker</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">compose</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">top</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 启动所有服务</span></span>
<span class="line"><span style="color:#6F42C1;">docker</span><span style="color:#24292E;"> </span><span style="color:#032F62;">compose</span><span style="color:#24292E;"> </span><span style="color:#032F62;">up</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-d</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 构建并启动</span></span>
<span class="line"><span style="color:#6F42C1;">docker</span><span style="color:#24292E;"> </span><span style="color:#032F62;">compose</span><span style="color:#24292E;"> </span><span style="color:#032F62;">up</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-d</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--build</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 查看日志</span></span>
<span class="line"><span style="color:#6F42C1;">docker</span><span style="color:#24292E;"> </span><span style="color:#032F62;">compose</span><span style="color:#24292E;"> </span><span style="color:#032F62;">logs</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-f</span></span>
<span class="line"><span style="color:#6F42C1;">docker</span><span style="color:#24292E;"> </span><span style="color:#032F62;">compose</span><span style="color:#24292E;"> </span><span style="color:#032F62;">logs</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-f</span><span style="color:#24292E;"> </span><span style="color:#032F62;">web</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 列出服务</span></span>
<span class="line"><span style="color:#6F42C1;">docker</span><span style="color:#24292E;"> </span><span style="color:#032F62;">compose</span><span style="color:#24292E;"> </span><span style="color:#032F62;">ps</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 执行命令</span></span>
<span class="line"><span style="color:#6F42C1;">docker</span><span style="color:#24292E;"> </span><span style="color:#032F62;">compose</span><span style="color:#24292E;"> </span><span style="color:#032F62;">exec</span><span style="color:#24292E;"> </span><span style="color:#032F62;">web</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/bin/sh</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 停止服务</span></span>
<span class="line"><span style="color:#6F42C1;">docker</span><span style="color:#24292E;"> </span><span style="color:#032F62;">compose</span><span style="color:#24292E;"> </span><span style="color:#032F62;">stop</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 停止并删除容器</span></span>
<span class="line"><span style="color:#6F42C1;">docker</span><span style="color:#24292E;"> </span><span style="color:#032F62;">compose</span><span style="color:#24292E;"> </span><span style="color:#032F62;">down</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 停止并删除容器+卷</span></span>
<span class="line"><span style="color:#6F42C1;">docker</span><span style="color:#24292E;"> </span><span style="color:#032F62;">compose</span><span style="color:#24292E;"> </span><span style="color:#032F62;">down</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-v</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 重启服务</span></span>
<span class="line"><span style="color:#6F42C1;">docker</span><span style="color:#24292E;"> </span><span style="color:#032F62;">compose</span><span style="color:#24292E;"> </span><span style="color:#032F62;">restart</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 拉取最新镜像</span></span>
<span class="line"><span style="color:#6F42C1;">docker</span><span style="color:#24292E;"> </span><span style="color:#032F62;">compose</span><span style="color:#24292E;"> </span><span style="color:#032F62;">pull</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 查看服务资源占用</span></span>
<span class="line"><span style="color:#6F42C1;">docker</span><span style="color:#24292E;"> </span><span style="color:#032F62;">compose</span><span style="color:#24292E;"> </span><span style="color:#032F62;">top</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br></div></div><h3 id="常用-compose-模式" tabindex="-1">常用 Compose 模式 <a class="header-anchor" href="#常用-compose-模式" aria-label="Permalink to &quot;常用 Compose 模式&quot;">​</a></h3><h4 id="node-js-mongodb" tabindex="-1">Node.js + MongoDB <a class="header-anchor" href="#node-js-mongodb" aria-label="Permalink to &quot;Node.js + MongoDB&quot;">​</a></h4><div class="language-yaml vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#85E89D;">version</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;3.8&quot;</span></span>
<span class="line"><span style="color:#85E89D;">services</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">app</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">build</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">.</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">ports</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#9ECBFF;">&quot;3000:3000&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">environment</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#9ECBFF;">MONGO_URI=mongodb://mongo:27017/myapp</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">depends_on</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#9ECBFF;">mongo</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">mongo</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">image</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">mongo:7</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">volumes</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#9ECBFF;">mongo-data:/data/db</span></span>
<span class="line"><span style="color:#85E89D;">volumes</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">mongo-data</span><span style="color:#E1E4E8;">:</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#22863A;">version</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;3.8&quot;</span></span>
<span class="line"><span style="color:#22863A;">services</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">app</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">build</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">.</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">ports</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#032F62;">&quot;3000:3000&quot;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">environment</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#032F62;">MONGO_URI=mongodb://mongo:27017/myapp</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">depends_on</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#032F62;">mongo</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">mongo</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">image</span><span style="color:#24292E;">: </span><span style="color:#032F62;">mongo:7</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">volumes</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#032F62;">mongo-data:/data/db</span></span>
<span class="line"><span style="color:#22863A;">volumes</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">mongo-data</span><span style="color:#24292E;">:</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h4 id="nginx-反向代理" tabindex="-1">Nginx 反向代理 <a class="header-anchor" href="#nginx-反向代理" aria-label="Permalink to &quot;Nginx 反向代理&quot;">​</a></h4><div class="language-yaml vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#85E89D;">version</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;3.8&quot;</span></span>
<span class="line"><span style="color:#85E89D;">services</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">nginx</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">image</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">nginx:alpine</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">ports</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#9ECBFF;">&quot;80:80&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">volumes</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#9ECBFF;">./nginx.conf:/etc/nginx/nginx.conf:ro</span></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#9ECBFF;">./ssl:/etc/nginx/ssl:ro</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">depends_on</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#9ECBFF;">app1</span></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#9ECBFF;">app2</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">app1</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">build</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">./app1</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">expose</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#9ECBFF;">&quot;3000&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">app2</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">build</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">./app2</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">expose</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#9ECBFF;">&quot;3000&quot;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#22863A;">version</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;3.8&quot;</span></span>
<span class="line"><span style="color:#22863A;">services</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">nginx</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">image</span><span style="color:#24292E;">: </span><span style="color:#032F62;">nginx:alpine</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">ports</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#032F62;">&quot;80:80&quot;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">volumes</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#032F62;">./nginx.conf:/etc/nginx/nginx.conf:ro</span></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#032F62;">./ssl:/etc/nginx/ssl:ro</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">depends_on</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#032F62;">app1</span></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#032F62;">app2</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">app1</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">build</span><span style="color:#24292E;">: </span><span style="color:#032F62;">./app1</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">expose</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#032F62;">&quot;3000&quot;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">app2</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">build</span><span style="color:#24292E;">: </span><span style="color:#032F62;">./app2</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">expose</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#032F62;">&quot;3000&quot;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><hr><h2 id="清理命令" tabindex="-1">清理命令 <a class="header-anchor" href="#清理命令" aria-label="Permalink to &quot;清理命令&quot;">​</a></h2><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 清理所有未使用的资源</span></span>
<span class="line"><span style="color:#B392F0;">docker</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">system</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">prune</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-a</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--volumes</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 仅清理停止的容器</span></span>
<span class="line"><span style="color:#B392F0;">docker</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">container</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">prune</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 仅清理未使用的镜像</span></span>
<span class="line"><span style="color:#B392F0;">docker</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">image</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">prune</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-a</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 仅清理未使用的卷</span></span>
<span class="line"><span style="color:#B392F0;">docker</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">volume</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">prune</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 仅清理未使用的网络</span></span>
<span class="line"><span style="color:#B392F0;">docker</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">network</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">prune</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 清理所有未使用的资源</span></span>
<span class="line"><span style="color:#6F42C1;">docker</span><span style="color:#24292E;"> </span><span style="color:#032F62;">system</span><span style="color:#24292E;"> </span><span style="color:#032F62;">prune</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-a</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--volumes</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 仅清理停止的容器</span></span>
<span class="line"><span style="color:#6F42C1;">docker</span><span style="color:#24292E;"> </span><span style="color:#032F62;">container</span><span style="color:#24292E;"> </span><span style="color:#032F62;">prune</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 仅清理未使用的镜像</span></span>
<span class="line"><span style="color:#6F42C1;">docker</span><span style="color:#24292E;"> </span><span style="color:#032F62;">image</span><span style="color:#24292E;"> </span><span style="color:#032F62;">prune</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-a</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 仅清理未使用的卷</span></span>
<span class="line"><span style="color:#6F42C1;">docker</span><span style="color:#24292E;"> </span><span style="color:#032F62;">volume</span><span style="color:#24292E;"> </span><span style="color:#032F62;">prune</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 仅清理未使用的网络</span></span>
<span class="line"><span style="color:#6F42C1;">docker</span><span style="color:#24292E;"> </span><span style="color:#032F62;">network</span><span style="color:#24292E;"> </span><span style="color:#032F62;">prune</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><hr><h2 id="常用技巧" tabindex="-1">常用技巧 <a class="header-anchor" href="#常用技巧" aria-label="Permalink to &quot;常用技巧&quot;">​</a></h2><h3 id="查看容器-ip" tabindex="-1">查看容器 IP <a class="header-anchor" href="#查看容器-ip" aria-label="Permalink to &quot;查看容器 IP&quot;">​</a></h3><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">docker</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">inspect</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-f</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;{{range.NetworkSettings.Networks}}{{.IPAddress}}{{end}}&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">container_name</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">docker</span><span style="color:#24292E;"> </span><span style="color:#032F62;">inspect</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-f</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;{{range.NetworkSettings.Networks}}{{.IPAddress}}{{end}}&#39;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">container_name</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="容器内安装调试工具" tabindex="-1">容器内安装调试工具 <a class="header-anchor" href="#容器内安装调试工具" aria-label="Permalink to &quot;容器内安装调试工具&quot;">​</a></h3><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># Alpine 镜像</span></span>
<span class="line"><span style="color:#B392F0;">docker</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">exec</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-it</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">container_name</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">apk</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">add</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">curl</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">vim</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># Ubuntu/Debian 镜像</span></span>
<span class="line"><span style="color:#B392F0;">docker</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">exec</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-it</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">container_name</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">apt-get</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">update</span><span style="color:#E1E4E8;"> &amp;&amp; </span><span style="color:#B392F0;">apt-get</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-y</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">curl</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">vim</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># Alpine 镜像</span></span>
<span class="line"><span style="color:#6F42C1;">docker</span><span style="color:#24292E;"> </span><span style="color:#032F62;">exec</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-it</span><span style="color:#24292E;"> </span><span style="color:#032F62;">container_name</span><span style="color:#24292E;"> </span><span style="color:#032F62;">apk</span><span style="color:#24292E;"> </span><span style="color:#032F62;">add</span><span style="color:#24292E;"> </span><span style="color:#032F62;">curl</span><span style="color:#24292E;"> </span><span style="color:#032F62;">vim</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># Ubuntu/Debian 镜像</span></span>
<span class="line"><span style="color:#6F42C1;">docker</span><span style="color:#24292E;"> </span><span style="color:#032F62;">exec</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-it</span><span style="color:#24292E;"> </span><span style="color:#032F62;">container_name</span><span style="color:#24292E;"> </span><span style="color:#032F62;">apt-get</span><span style="color:#24292E;"> </span><span style="color:#032F62;">update</span><span style="color:#24292E;"> &amp;&amp; </span><span style="color:#6F42C1;">apt-get</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-y</span><span style="color:#24292E;"> </span><span style="color:#032F62;">curl</span><span style="color:#24292E;"> </span><span style="color:#032F62;">vim</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="查看容器进程" tabindex="-1">查看容器进程 <a class="header-anchor" href="#查看容器进程" aria-label="Permalink to &quot;查看容器进程&quot;">​</a></h3><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">docker</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">top</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">container_name</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">docker</span><span style="color:#24292E;"> </span><span style="color:#032F62;">top</span><span style="color:#24292E;"> </span><span style="color:#032F62;">container_name</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="实时查看资源占用" tabindex="-1">实时查看资源占用 <a class="header-anchor" href="#实时查看资源占用" aria-label="Permalink to &quot;实时查看资源占用&quot;">​</a></h3><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 所有容器</span></span>
<span class="line"><span style="color:#B392F0;">docker</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">stats</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 指定容器</span></span>
<span class="line"><span style="color:#B392F0;">docker</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">stats</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">container1</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">container2</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 所有容器</span></span>
<span class="line"><span style="color:#6F42C1;">docker</span><span style="color:#24292E;"> </span><span style="color:#032F62;">stats</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 指定容器</span></span>
<span class="line"><span style="color:#6F42C1;">docker</span><span style="color:#24292E;"> </span><span style="color:#032F62;">stats</span><span style="color:#24292E;"> </span><span style="color:#032F62;">container1</span><span style="color:#24292E;"> </span><span style="color:#032F62;">container2</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="日志管理" tabindex="-1">日志管理 <a class="header-anchor" href="#日志管理" aria-label="Permalink to &quot;日志管理&quot;">​</a></h3><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 限制日志大小（运行容器时）</span></span>
<span class="line"><span style="color:#B392F0;">docker</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">run</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-d</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--log-opt</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">max-size=</span><span style="color:#79B8FF;">10</span><span style="color:#9ECBFF;">m</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--log-opt</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">max-file=</span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">nginx</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 或在 docker-compose 中</span></span>
<span class="line"><span style="color:#B392F0;">services:</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">web:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">logging:</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">driver:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">json-file</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">options:</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">max-size:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;10m&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">max-file:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;3&quot;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 限制日志大小（运行容器时）</span></span>
<span class="line"><span style="color:#6F42C1;">docker</span><span style="color:#24292E;"> </span><span style="color:#032F62;">run</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-d</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--log-opt</span><span style="color:#24292E;"> </span><span style="color:#032F62;">max-size=</span><span style="color:#005CC5;">10</span><span style="color:#032F62;">m</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--log-opt</span><span style="color:#24292E;"> </span><span style="color:#032F62;">max-file=</span><span style="color:#005CC5;">3</span><span style="color:#24292E;"> </span><span style="color:#032F62;">nginx</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 或在 docker-compose 中</span></span>
<span class="line"><span style="color:#6F42C1;">services:</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">web:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">logging:</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">driver:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">json-file</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">options:</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">max-size:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;10m&quot;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">max-file:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;3&quot;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h3 id="容器自动重启策略" tabindex="-1">容器自动重启策略 <a class="header-anchor" href="#容器自动重启策略" aria-label="Permalink to &quot;容器自动重启策略&quot;">​</a></h3><table><thead><tr><th>策略</th><th>行为</th></tr></thead><tbody><tr><td><code>no</code></td><td>不自动重启（默认）</td></tr><tr><td><code>always</code></td><td>总是重启</td></tr><tr><td><code>unless-stopped</code></td><td>总是重启，除非手动停止</td></tr><tr><td><code>on-failure:3</code></td><td>退出码非0时重启，最多3次</td></tr></tbody></table>`,50)]))}const b=n(o,[["render",e]]);export{F as __pageData,b as default};

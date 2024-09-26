import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.b5309610.js";const u=JSON.parse('{"title":"目录","description":"","frontmatter":{},"headers":[],"relativePath":"leadingEnd/node/index.md","filePath":"leadingEnd/node/index.md","lastUpdated":1727338778000}'),p={name:"leadingEnd/node/index.md"},e=l(`<h1 id="目录" tabindex="-1">目录 <a class="header-anchor" href="#目录" aria-label="Permalink to &quot;目录&quot;">​</a></h1><p>官方文档：<a href="http://nodejs.cn/api/" target="_blank" rel="noreferrer">node API文档</a></p><p><a href="./Npm">一、Npm、Package、Install</a></p><p><a href="./模板化">二、模板化</a></p><p><a href="./全局变量">三、全局变量</a></p><p><a href="./path、os">四、path、os</a></p><p><a href="./process">五、process</a></p><p><a href="./events、util">六、events、util</a></p><p><a href="./fs文件">七、fs文件</a></p><p><a href="./插件">插件</a></p><h1 id="nvm" tabindex="-1">nvm <a class="header-anchor" href="#nvm" aria-label="Permalink to &quot;nvm&quot;">​</a></h1><div class="language-jsx vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">nvm list available    </span><span style="color:#6A737D;">//查看可安装的版本</span></span>
<span class="line"><span style="color:#E1E4E8;">nvm install 版本号    </span><span style="color:#6A737D;">// 安装某个版本</span></span>
<span class="line"><span style="color:#E1E4E8;">nvm use 版本号    </span><span style="color:#6A737D;">//使用某个版本号</span></span>
<span class="line"><span style="color:#E1E4E8;">nvm ls  </span><span style="color:#6A737D;">//查看下载的Node.js版本列表</span></span>
<span class="line"><span style="color:#E1E4E8;">nvm uninstall 版本号   </span><span style="color:#6A737D;">//卸载某个版本</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">nvm</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">arch #显示节点是以32位还是64位模式运行。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">nvm install＜version＞[arch] </span></span>
<span class="line"><span style="color:#E1E4E8;">#版本可以是node.js版本，也可以是“最新”的最新稳定版本。</span></span>
<span class="line"><span style="color:#E1E4E8;">#（可选）指定是安装32位版本还是64位版本（默认为system arch）。</span></span>
<span class="line"><span style="color:#E1E4E8;">#将[arch]设置为“all”以安装32 </span><span style="color:#79B8FF;">AND</span><span style="color:#E1E4E8;"> 64位版本。</span></span>
<span class="line"><span style="color:#E1E4E8;">#在该命令的末尾添加</span><span style="color:#F97583;">--</span><span style="color:#E1E4E8;">unsecurity，以绕过远程下载服务器的SSL验证。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">nvm list[可用] # 列出node.js的安装。在末尾键入“available”（可用），查看可以安装的内容。别名为ls。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">nvm on #启用node.js版本管理。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">nvm off #禁用node.js版本管理。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">nvm proxy [url] </span></span>
<span class="line"><span style="color:#E1E4E8;">#设置用于下载的代理。将[url]留空以查看当前代理。</span></span>
<span class="line"><span style="color:#E1E4E8;">#将[url]设置为“none”以删除代理。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">nvm node_mirror [url] #设置节点镜像。</span><span style="color:#B392F0;">默认为https</span><span style="color:#E1E4E8;">:</span><span style="color:#6A737D;">//nodejs.org/dist/.将[url]留空以使用默认url。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">nvm npm_mirror [url] #设置npm镜像。</span><span style="color:#B392F0;">默认为https</span><span style="color:#E1E4E8;">:</span><span style="color:#6A737D;">//github.com/npm/cli/archive/.将[url]留空为默认url。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">nvm uninstall ＜version＞ #版本必须是特定的版本。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">nvm use [version] [arch] </span></span>
<span class="line"><span style="color:#E1E4E8;">#切换到使用指定的版本。可选择指定32</span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;">64位体系结构。</span></span>
<span class="line"><span style="color:#E1E4E8;">#nvm使用＜arch＞将继续使用所选版本，但切换到32</span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;">64位模式。</span></span>
<span class="line"><span style="color:#E1E4E8;">#nvm</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">root[path]：设置nvm应存储不同版本node.js的目录。</span></span>
<span class="line"><span style="color:#E1E4E8;">#如果未设置＜path＞，则会显示当前根目录。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">nvm version #显示用于Windows的nvm的当前运行版本。别名为v。</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">nvm list available    </span><span style="color:#6A737D;">//查看可安装的版本</span></span>
<span class="line"><span style="color:#24292E;">nvm install 版本号    </span><span style="color:#6A737D;">// 安装某个版本</span></span>
<span class="line"><span style="color:#24292E;">nvm use 版本号    </span><span style="color:#6A737D;">//使用某个版本号</span></span>
<span class="line"><span style="color:#24292E;">nvm ls  </span><span style="color:#6A737D;">//查看下载的Node.js版本列表</span></span>
<span class="line"><span style="color:#24292E;">nvm uninstall 版本号   </span><span style="color:#6A737D;">//卸载某个版本</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">nvm</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">arch #显示节点是以32位还是64位模式运行。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">nvm install＜version＞[arch] </span></span>
<span class="line"><span style="color:#24292E;">#版本可以是node.js版本，也可以是“最新”的最新稳定版本。</span></span>
<span class="line"><span style="color:#24292E;">#（可选）指定是安装32位版本还是64位版本（默认为system arch）。</span></span>
<span class="line"><span style="color:#24292E;">#将[arch]设置为“all”以安装32 </span><span style="color:#005CC5;">AND</span><span style="color:#24292E;"> 64位版本。</span></span>
<span class="line"><span style="color:#24292E;">#在该命令的末尾添加</span><span style="color:#D73A49;">--</span><span style="color:#24292E;">unsecurity，以绕过远程下载服务器的SSL验证。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">nvm list[可用] # 列出node.js的安装。在末尾键入“available”（可用），查看可以安装的内容。别名为ls。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">nvm on #启用node.js版本管理。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">nvm off #禁用node.js版本管理。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">nvm proxy [url] </span></span>
<span class="line"><span style="color:#24292E;">#设置用于下载的代理。将[url]留空以查看当前代理。</span></span>
<span class="line"><span style="color:#24292E;">#将[url]设置为“none”以删除代理。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">nvm node_mirror [url] #设置节点镜像。</span><span style="color:#6F42C1;">默认为https</span><span style="color:#24292E;">:</span><span style="color:#6A737D;">//nodejs.org/dist/.将[url]留空以使用默认url。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">nvm npm_mirror [url] #设置npm镜像。</span><span style="color:#6F42C1;">默认为https</span><span style="color:#24292E;">:</span><span style="color:#6A737D;">//github.com/npm/cli/archive/.将[url]留空为默认url。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">nvm uninstall ＜version＞ #版本必须是特定的版本。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">nvm use [version] [arch] </span></span>
<span class="line"><span style="color:#24292E;">#切换到使用指定的版本。可选择指定32</span><span style="color:#D73A49;">/</span><span style="color:#24292E;">64位体系结构。</span></span>
<span class="line"><span style="color:#24292E;">#nvm使用＜arch＞将继续使用所选版本，但切换到32</span><span style="color:#D73A49;">/</span><span style="color:#24292E;">64位模式。</span></span>
<span class="line"><span style="color:#24292E;">#nvm</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">root[path]：设置nvm应存储不同版本node.js的目录。</span></span>
<span class="line"><span style="color:#24292E;">#如果未设置＜path＞，则会显示当前根目录。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">nvm version #显示用于Windows的nvm的当前运行版本。别名为v。</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br></div></div><h1 id="cmd命令行" tabindex="-1">CMD命令行 <a class="header-anchor" href="#cmd命令行" aria-label="Permalink to &quot;CMD命令行&quot;">​</a></h1><p>第1种：windows + R -&gt; 输入 cmd -&gt; 敲回车</p><p>第2种：打开任意文件夹 -&gt; 在地址栏输入cmd -&gt; 敲回车</p><p>常用命令</p><p>● cls 清屏</p><p>● dir 列出当前目录下的所有文件</p><p>● cd 进入到指定的目录 cd.. 退回到上一级目录</p><p>● md 创建指定的目录</p><p>● rd 删除一个文件夹（只能删除空文件夹</p><p>● rm 删除文件</p>`,22),o=[e];function r(c,i,t,E,m,y){return n(),a("div",null,o)}const d=s(p,[["render",r]]);export{u as __pageData,d as default};

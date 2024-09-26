import{_ as e,o as n,c as a,Q as s}from"./chunks/framework.b5309610.js";const b=JSON.parse('{"title":"npm","description":"","frontmatter":{},"headers":[],"relativePath":"leadingEnd/node/Npm.md","filePath":"leadingEnd/node/Npm.md","lastUpdated":1727086072000}'),l={name:"leadingEnd/node/Npm.md"},p=s(`<h1 id="npm" tabindex="-1">npm <a class="header-anchor" href="#npm" aria-label="Permalink to &quot;npm&quot;">​</a></h1><h2 id="npm-简介" tabindex="-1">npm 简介 <a class="header-anchor" href="#npm-简介" aria-label="Permalink to &quot;npm 简介&quot;">​</a></h2><ul><li>npm（全称 Node Package Manager）是 Node.js 的包管理工具，是一个基于命令行的工具，用于帮助开发者在自己的项目中安装、升级、移除和管理依赖项。可访问 www.npmjs.com/。</li><li>类似其他语言的工具： <ul><li>PHP：Composer，是 PHP 的包管理器，可下载、安装和管理 PHP 的依赖项，类似于 npm。</li><li>Java：Maven，是 Java 的构建工具和项目管理工具，可自动化构建、测试和部署 Java 应用程序，类似于 npm 和 webpack 的功能。</li><li>Python：pip，是 Python 的包管理器，可用于安装和管理 Python 的依赖项，类似于 npm。</li><li>Rust：Cargo，是 Rust 的包管理器和构建工具，可用于下载、编译和管理 Rust 的依赖项，类似于 npm 和 Maven 的功能。</li></ul></li></ul><h2 id="npm-命令" tabindex="-1">npm 命令 <a class="header-anchor" href="#npm-命令" aria-label="Permalink to &quot;npm 命令&quot;">​</a></h2><ul><li><p><code>npm init</code>：初始化一个新的 npm 项目，创建 <code>package.json</code> 文件。</p></li><li><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">npm install</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">npm install</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>：安装一个包或一组包，并且会在当前目录存放一个</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">node_modules</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">node_modules</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li><code>npm install &lt;package-name&gt;</code>：安装指定的包。</li><li><code>npm install &lt;package-name&gt; --save</code>：安装指定的包，并将其添加到 <code>package.json</code> 文件中的依赖列表中。</li><li><code>npm install &lt;package-name&gt; --save-dev</code>：安装指定的包，并将其添加到 <code>package.json</code> 文件中的开发依赖列表中。</li><li><code>npm install -g &lt;package-name&gt;</code>：全局安装指定的包。</li></ul></li><li><p><code>npm update &lt;package-name&gt;</code>：更新指定的包。</p></li><li><p><code>npm uninstall &lt;package-name&gt;</code>：卸载指定的包。</p></li><li><p><code>npm run &lt;script-name&gt;</code>：执行 <code>package.json</code> 文件中定义的脚本命令。</p></li><li><p><code>npm search &lt;keyword&gt;</code>：搜索 npm 库中包含指定关键字的包。</p></li><li><p><code>npm info &lt;package-name&gt;</code>：查看指定包的详细信息。</p></li><li><p><code>npm list</code>：列出当前项目中安装的所有包。</p></li><li><p><code>npm outdated</code>：列出当前项目中需要更新的包。</p></li><li><p><code>npm audit</code>：检查当前项目中的依赖项是否存在安全漏洞。</p></li><li><p><code>npm publish</code>：发布自己开发的包到 npm 库中。</p></li><li><p><code>npm login</code>：登录到 npm 账户。</p></li><li><p><code>npm logout</code>：注销当前 npm 账户。</p></li><li><p><code>npm link</code>：将本地模块链接到全局的 <code>node_modules</code> 目录下。</p></li><li><p><code>npm config list</code>：用于列出所有的 npm 配置信息。执行该命令可以查看当前系统和用户级别的所有 npm 配置信息，以及当前项目的配置信息（如果在项目目录下执行该命令）。</p></li><li><p><code>npm get registry</code>：用于获取当前 npm 配置中的 registry 配置项的值。registry 配置项用于指定 npm 包的下载地址，如果未指定，则默认使用 npm 官方的包注册表地址。</p></li><li><p><code>npm set registry</code>：使用 <code>npm config set registry &lt;registry-url&gt;</code> 命令，将 registry 配置项的值修改为指定的 <code>&lt;registry-url&gt;</code> 地址。</p></li></ul><h2 id="package" tabindex="-1">package <a class="header-anchor" href="#package" aria-label="Permalink to &quot;package&quot;">​</a></h2><h3 id="package-json" tabindex="-1">Package.json <a class="header-anchor" href="#package-json" aria-label="Permalink to &quot;Package.json&quot;">​</a></h3><ul><li>执行 <code>npm init</code> 便可以初始化一个 <code>package.json</code>。</li><li>各字段含义： <ul><li><code>name</code>：项目名称，必须是唯一的字符串，通常采用小写字母和连字符的组合。</li><li><code>version</code>：项目版本号，通常采用语义化版本号规范。</li><li><code>description</code>：项目描述。</li><li><code>main</code>：项目的主入口文件路径，通常是一个 JavaScript 文件。</li><li><code>keywords</code>：项目的关键字列表，方便他人搜索和发现该项目。</li><li><code>author</code>：项目作者的信息，包括姓名、邮箱、网址等。</li><li><code>license</code>：项目的许可证类型，可以是自定义的许可证类型或者常见的开源许可证（如 MIT、Apache 等）。</li><li><code>dependencies</code>：项目所依赖的包的列表，这些包会在项目运行时自动安装。</li><li><code>devDependencies</code>：项目开发过程中所需要的包的列表，这些包不会随项目一起发布，而是只在开发时使用。</li><li><code>peerDependencies</code>：项目的同级依赖，即项目所需要的模块被其他模块所依赖。</li><li><code>scripts</code>：定义了一些脚本命令，比如启动项目、运行测试等。</li><li><code>repository</code>：项目代码仓库的信息，包括类型、网址等。</li><li><code>bugs</code>：项目的 bug 报告地址。</li><li><code>homepage</code>：项目的官方网站地址或者文档地址。</li></ul></li><li>版本号规范：三段式版本号一般是 1.0.0，大版本号、次版本号、修订号。大版本号一般是有重大变化才会升级，次版本号一般是增加功能进行升级，修订号一般是修改 bug 进行升级。</li></ul><h3 id="npm-安装的嵌套情况" tabindex="-1">npm 安装的嵌套情况 <a class="header-anchor" href="#npm-安装的嵌套情况" aria-label="Permalink to &quot;npm 安装的嵌套情况&quot;">​</a></h3><p>npm install 安装模块的时候一般是扁平化安装的，但是有时候出现嵌套的情况是因为版本不同。例如 A 依赖 C1.0，B 依赖 C1.0，D 依赖 C2.0，此时 C 1.0 就会被放到 A、B 的 <code>node_moduels</code>，C2.0 会被放入 D 模块下面的 <code>node_moduels</code>。</p><h2 id="npminstall-原理" tabindex="-1">NpmInstall 原理 <a class="header-anchor" href="#npminstall-原理" aria-label="Permalink to &quot;NpmInstall 原理&quot;">​</a></h2><h3 id="执行npm-install时的情况" tabindex="-1">执行<code>npm install</code>时的情况 <a class="header-anchor" href="#执行npm-install时的情况" aria-label="Permalink to &quot;执行\`npm install\`时的情况&quot;">​</a></h3><ul><li>安装的依赖存放在根目录的<code>node_modules</code>。</li><li>默认采用扁平化安装方式，排序规则为：先<code>.bin</code>，再<code>@</code>系列，然后按照首字母排序（abcd 等），采用广度优先遍历依赖树。</li><li>在遍历依赖树时，npm 先处理项目根目录下的依赖，然后逐层处理每个依赖包的依赖，直到所有依赖都被处理完毕。</li><li>处理每个依赖时，npm 会检查该依赖的版本号是否符合依赖树中其他依赖的版本要求，如果不符合，则会尝试安装适合的版本。</li></ul><p><img src="https://raw.githubusercontent.com/caolinchao2/blogimg/main/img/ccc296d349db4237a10c3b51efbaf238%7Etplv-k3u1fbpfcp-zoom-in-crop-mark%3A1512%3A0%3A0%3A0.awebp" alt="image.png"></p><h3 id="扁平化安装" tabindex="-1">扁平化安装 <a class="header-anchor" href="#扁平化安装" aria-label="Permalink to &quot;扁平化安装&quot;">​</a></h3><ol><li><strong>理想状态</strong>：安装某个二级模块时，若发现第一层级有相同名称、相同版本的模块，便直接复用那个模块。例如 A 模块下的 C 模块被安装到了第一级，这使得 B 模块能够复用处在同一级下且名称、版本均相同的 C 模块。</li><li><strong>非理想状态</strong>：如果 B 和 A 所要求的依赖模块不同（B 下要求是 v2.0 的 C，A 下要求是 v1.0 的 C），B 不能复用 A 下的 C v1.0 模块，此时会出现模块冗余的情况，就会给 B 继续搞一层<code>node_modules</code>，变为非扁平化。</li></ol><h3 id="npm-install-后续流程" tabindex="-1">npm install 后续流程 <a class="header-anchor" href="#npm-install-后续流程" aria-label="Permalink to &quot;npm install 后续流程&quot;">​</a></h3><p><img src="https://raw.githubusercontent.com/caolinchao2/blogimg/main/img/0570bf4581f74a9790bb86567b889e68%7Etplv-k3u1fbpfcp-zoom-in-crop-mark%3A1512%3A0%3A0%3A0.awebp" alt="image.png"></p><h3 id="npmrc-配置" tabindex="-1">npmrc 配置 <a class="header-anchor" href="#npmrc-配置" aria-label="Permalink to &quot;npmrc 配置&quot;">​</a></h3><p>以下是一个配置示例：</p><div class="language-plaintext vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">plaintext</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">registry=http://registry.npmjs.org/</span></span>
<span class="line"><span style="color:#e1e4e8;"># 定义 npm 的 registry，即 npm 的包下载源</span></span>
<span class="line"><span style="color:#e1e4e8;">proxy=http://proxy.example.com:8080/</span></span>
<span class="line"><span style="color:#e1e4e8;"># 定义 npm 的代理服务器，用于访问网络</span></span>
<span class="line"><span style="color:#e1e4e8;">https-proxy=http://proxy.example.com:8080/</span></span>
<span class="line"><span style="color:#e1e4e8;"># 定义 npm 的 https 代理服务器，用于访问网络</span></span>
<span class="line"><span style="color:#e1e4e8;">strict-ssl=true</span></span>
<span class="line"><span style="color:#e1e4e8;"># 是否在 SSL 证书验证错误时退出</span></span>
<span class="line"><span style="color:#e1e4e8;">cafile=/path/to/cafile.pem</span></span>
<span class="line"><span style="color:#e1e4e8;"># 定义自定义 CA 证书文件的路径</span></span>
<span class="line"><span style="color:#e1e4e8;">user-agent=npm/{npm-version} node/{node-version} {platform}</span></span>
<span class="line"><span style="color:#e1e4e8;"># 自定义请求头中的 User-Agent</span></span>
<span class="line"><span style="color:#e1e4e8;">save=true</span></span>
<span class="line"><span style="color:#e1e4e8;"># 安装包时是否自动保存到 package.json 的 dependencies 中</span></span>
<span class="line"><span style="color:#e1e4e8;">save-dev=true</span></span>
<span class="line"><span style="color:#e1e4e8;"># 安装包时是否自动保存到 package.json 的 devDependencies 中</span></span>
<span class="line"><span style="color:#e1e4e8;">save-exact=true</span></span>
<span class="line"><span style="color:#e1e4e8;"># 安装包时是否精确保存版本号</span></span>
<span class="line"><span style="color:#e1e4e8;">engine-strict=true</span></span>
<span class="line"><span style="color:#e1e4e8;"># 是否在安装时检查依赖的 node 和 npm 版本是否符合要求</span></span>
<span class="line"><span style="color:#e1e4e8;">scripts-prepend-node-path=true</span></span>
<span class="line"><span style="color:#e1e4e8;"># 是否在运行脚本时自动将 node 的路径添加到 PATH 环境变量中</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">registry=http://registry.npmjs.org/</span></span>
<span class="line"><span style="color:#24292e;"># 定义 npm 的 registry，即 npm 的包下载源</span></span>
<span class="line"><span style="color:#24292e;">proxy=http://proxy.example.com:8080/</span></span>
<span class="line"><span style="color:#24292e;"># 定义 npm 的代理服务器，用于访问网络</span></span>
<span class="line"><span style="color:#24292e;">https-proxy=http://proxy.example.com:8080/</span></span>
<span class="line"><span style="color:#24292e;"># 定义 npm 的 https 代理服务器，用于访问网络</span></span>
<span class="line"><span style="color:#24292e;">strict-ssl=true</span></span>
<span class="line"><span style="color:#24292e;"># 是否在 SSL 证书验证错误时退出</span></span>
<span class="line"><span style="color:#24292e;">cafile=/path/to/cafile.pem</span></span>
<span class="line"><span style="color:#24292e;"># 定义自定义 CA 证书文件的路径</span></span>
<span class="line"><span style="color:#24292e;">user-agent=npm/{npm-version} node/{node-version} {platform}</span></span>
<span class="line"><span style="color:#24292e;"># 自定义请求头中的 User-Agent</span></span>
<span class="line"><span style="color:#24292e;">save=true</span></span>
<span class="line"><span style="color:#24292e;"># 安装包时是否自动保存到 package.json 的 dependencies 中</span></span>
<span class="line"><span style="color:#24292e;">save-dev=true</span></span>
<span class="line"><span style="color:#24292e;"># 安装包时是否自动保存到 package.json 的 devDependencies 中</span></span>
<span class="line"><span style="color:#24292e;">save-exact=true</span></span>
<span class="line"><span style="color:#24292e;"># 安装包时是否精确保存版本号</span></span>
<span class="line"><span style="color:#24292e;">engine-strict=true</span></span>
<span class="line"><span style="color:#24292e;"># 是否在安装时检查依赖的 node 和 npm 版本是否符合要求</span></span>
<span class="line"><span style="color:#24292e;">scripts-prepend-node-path=true</span></span>
<span class="line"><span style="color:#24292e;"># 是否在运行脚本时自动将 node 的路径添加到 PATH 环境变量中</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><h3 id="package-lock-json-的作用" tabindex="-1">package-lock.json 的作用 <a class="header-anchor" href="#package-lock-json-的作用" aria-label="Permalink to &quot;package-lock.json 的作用&quot;">​</a></h3><ul><li>很多人知道这个文件可以锁定版本、记录依赖树详细信息。 <ul><li><code>version</code>：指定当前包的版本号。</li><li><code>resolved</code>：指定当前包的下载地址。</li><li><code>integrity</code>：用于验证包的完整性。</li><li><code>dev</code>：指定当前包是一个开发依赖包。</li><li><code>bin</code>：指定当前包中可执行文件的路径和名称。</li><li><code>engines</code>：指定当前包所依赖的 Node.js 版本范围。</li></ul></li><li>帮助做缓存，会通过<code>name + version + integrity</code>信息生成一个唯一的 key，这个 key 能找到对应的<code>index-v5</code>下的缓存记录，也就是<code>npm cache</code>文件夹下的。如果发现有缓存记录，就会找到 tar 包的 hash 值，然后将对应的二进制文件解压到<code>node_modeules</code>。</li></ul><p><img src="https://raw.githubusercontent.com/caolinchao2/blogimg/main/img/3c321d177dd445588981a9bb4f719381%7Etplv-k3u1fbpfcp-zoom-in-crop-mark%3A1512%3A0%3A0%3A0.awebp" alt="image.png"></p><p><img src="https://raw.githubusercontent.com/caolinchao2/blogimg/main/img/0023c0c4cbd248ae96d99f7f577e5680%7Etplv-k3u1fbpfcp-zoom-in-crop-mark%3A1512%3A0%3A0%3A0.awebp" alt="image.png"></p><h2 id="npm-run-原理" tabindex="-1">Npm run 原理 <a class="header-anchor" href="#npm-run-原理" aria-label="Permalink to &quot;Npm run 原理&quot;">​</a></h2><h3 id="npm-run-xxx-发生了什么" tabindex="-1">npm run xxx 发生了什么 <a class="header-anchor" href="#npm-run-xxx-发生了什么" aria-label="Permalink to &quot;npm run xxx 发生了什么&quot;">​</a></h3><p>按照下面的例子npm run dev 举例过程中发生了什么</p><p><img src="https://raw.githubusercontent.com/caolinchao2/blogimg/main/img/9a46cfd937944053b6b50d2bd6d69eea~tplv-k3u1fbpfcp-zoom-in-crop-mark%3A1512%3A0%3A0%3A0.awebp" alt="image.png"></p><p>读取package json 的scripts 对应的脚本命令(dev:vite),vite是个可执行脚本，他的查找规则是：</p><ul><li>先从当前项目的node_modules/.bin去查找可执行命令vite</li><li>如果没找到就去全局的node_modules 去找可执行命令vite</li><li>如果还没找到就去环境变量查找</li><li>再找不到就进行报错</li></ul><p>如果成功找到会发现有三个文件</p><p><img src="https://raw.githubusercontent.com/caolinchao2/blogimg/main/img/06bd3cd2f1744b2e9c1999baae06397e~tplv-k3u1fbpfcp-zoom-in-crop-mark%3A1512%3A0%3A0%3A0.awebp" alt="image.png"></p><div class="tip custom-block"><p class="custom-block-title">因为nodejs 是跨平台的所以可执行命令兼容各个平台</p></div><ul><li>.sh文件是给Linux unix Macos 使用</li><li>.cmd 给windows的cmd使用</li><li>.ps1 给windows的powerShell 使用</li></ul><h3 id="npm-生命周期" tabindex="-1">npm 生命周期 <a class="header-anchor" href="#npm-生命周期" aria-label="Permalink to &quot;npm 生命周期&quot;">​</a></h3><p>没想到吧npm执行命令也有生命周期！！！</p><div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;predev&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;node prev.js&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&quot;dev&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;node index.js&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&quot;postdev&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;node post.js&quot;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;predev&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;node prev.js&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&quot;dev&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;node index.js&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&quot;postdev&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;node post.js&quot;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>执行 npm run dev 命令的时候 predev 会自动执行 他的生命周期是在dev之前执行，然后执行dev命令，再然后执行postdev，也就是dev之后执行</p><p>运用场景例如npm run build 可以在打包之后删除dist目录等等</p><p>post例如你编写完一个工具发布npm，那就可以在之后写一个ci脚本顺便帮你推送到git等等</p><p>谁用到了例如vue-cli <a href="https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Fvuejs%2Fvue-cli%2Fblob%2Fdev%2Fpackage.json" target="_blank" rel="noreferrer">github.com/vuejs/vue-c…</a></p><p><img src="https://raw.githubusercontent.com/caolinchao2/blogimg/main/img/e193d239500b43c6885aac43233c6dd1~tplv-k3u1fbpfcp-zoom-in-crop-mark%3A1512%3A0%3A0%3A0.awebp" alt="image.png"></p><h2 id="npx" tabindex="-1">npx <a class="header-anchor" href="#npx" aria-label="Permalink to &quot;npx&quot;">​</a></h2><h3 id="npx-是什么" tabindex="-1">npx 是什么 <a class="header-anchor" href="#npx-是什么" aria-label="Permalink to &quot;npx 是什么&quot;">​</a></h3><p>npx 是一个命令行工具，是 npm 5.2.0 版本中新增的功能。它允许用户在不安装全局包的情况下，运行已安装在本地项目中的包或者远程仓库中的包。</p><p>npx 的作用是在命令行中运行 node 包中的可执行文件，而不需要全局安装这些包。这可以使开发人员更轻松地管理包的依赖关系，并且可以避免全局污染的问题。它还可以帮助开发人员在项目中使用不同版本的包，而不会出现版本冲突的问题。</p><h3 id="npx-的优势" tabindex="-1">npx 的优势 <a class="header-anchor" href="#npx-的优势" aria-label="Permalink to &quot;npx 的优势&quot;">​</a></h3><ol><li><strong>避免全局安装</strong>：npx 允许执行 npm package，而不需要先全局安装它。</li><li><strong>总是使用最新版本</strong>：如果没有在本地安装相应的 npm package，npx 会从 npm 的 package 仓库中下载并使用最新版。</li><li><strong>执行任意 npm 包</strong>：npx 不仅可以执行在 package.json 的 scripts 部分定义的命令，还可以执行任何 npm package。</li><li><strong>执行 GitHub gist</strong>：npx 甚至可以执行 GitHub gist 或者其他公开的 JavaScript 文件。</li></ol><h3 id="npm-和-npx-区别" tabindex="-1">npm 和 npx 区别 <a class="header-anchor" href="#npm-和-npx-区别" aria-label="Permalink to &quot;npm 和 npx 区别&quot;">​</a></h3><ul><li>npx 侧重于执行命令，执行某个模块命令。虽然会自动安装模块，但是重在执行某个命令。</li><li>npm 侧重于安装或者卸载某个模块，重在安装，并不具备执行某个模块的功能。</li></ul><h3 id="示例" tabindex="-1">示例 <a class="header-anchor" href="#示例" aria-label="Permalink to &quot;示例&quot;">​</a></h3><ol><li>创建 react 项目示例 <ul><li>以前创建一个 react 项目需要安装到全局，即<code>npm install -g create-react-app</code>，然后执行<code>create-react-app my-app</code>。但这样会有两个问题，首先需要全局安装这个包占用磁盘空间，并且如果需要更新还得执行更新命令。</li></ul></li><li>vite 示例 <ul><li>全局没有安装 vite，在当前项目安装 vite，即<code>npm i vite -D</code>。安装完成之后发现无法执行运行 vite 命令，这时候就可以使用<code>npx vite</code>。</li></ul></li></ol><h3 id="npx的运行规则" tabindex="-1">npx的运行规则 <a class="header-anchor" href="#npx的运行规则" aria-label="Permalink to &quot;npx的运行规则&quot;">​</a></h3><p>npx 的运行规则和 npm 是一样的，先在本地目录查找.bin，看有没有，如果没有就去全局的 node_modules 查找，如果还没有就去下载这个包然后运行命令，然后删除这个包。</p><h2 id="发布npm包" tabindex="-1">发布npm包 <a class="header-anchor" href="#发布npm包" aria-label="Permalink to &quot;发布npm包&quot;">​</a></h2>`,56),o=[p];function i(c,t,r,d,m,u){return n(),a("div",null,o)}const g=e(l,[["render",i]]);export{b as __pageData,g as default};

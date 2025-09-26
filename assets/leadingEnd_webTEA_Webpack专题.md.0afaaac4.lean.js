import{_ as n,o as a,c as l,O as p}from"./chunks/framework.b55d0e42.js";const b=JSON.parse('{"title":"Webpack 专题","description":"","frontmatter":{},"headers":[],"relativePath":"leadingEnd/webTEA/Webpack专题.md","filePath":"leadingEnd/webTEA/Webpack专题.md","lastUpdated":1758707342000}'),e={name:"leadingEnd/webTEA/Webpack专题.md"};function o(c,s,r,t,E,y){return a(),l("div",null,s[0]||(s[0]=[p(`<h1 id="webpack-专题" tabindex="-1">Webpack 专题 <a class="header-anchor" href="#webpack-专题" aria-label="Permalink to &quot;Webpack 专题&quot;">​</a></h1><h2 id="webpack5-和-webpack4-之间重要的区别" tabindex="-1">webpack5 和 webpack4 之间重要的区别 <a class="header-anchor" href="#webpack5-和-webpack4-之间重要的区别" aria-label="Permalink to &quot;webpack5 和 webpack4 之间重要的区别&quot;">​</a></h2><div class="language-javascript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">1.</span><span style="color:#E1E4E8;"> 性能改进：webpack5在构建速度和打包体积方面进行了一些优化。它引入了持久缓存，可以减少构建时间。</span></span>
<span class="line"><span style="color:#E1E4E8;">  	此外，webpack5还引入了更好的树摇（tree shaking）算法，可以更好地优化打包体积。</span></span>
<span class="line"><span style="color:#79B8FF;">2.</span><span style="color:#E1E4E8;"> 模块联邦（Module Federation）：这是webpack5中最重要的新功能之一。模块联邦允许不同的应用程序共享模块，从而实现更好的代码复用和拆分。</span></span>
<span class="line"><span style="color:#E1E4E8;">  	这对于构建大型的微服务架构非常有用。</span></span>
<span class="line"><span style="color:#79B8FF;">3.</span><span style="color:#E1E4E8;"> 支持WebAssembly：webpack5对WebAssembly提供了更好的支持。它可以直接导入和导出WebAssembly模块，并且可以通过配置进行优化。</span></span>
<span class="line"><span style="color:#79B8FF;">4.</span><span style="color:#E1E4E8;"> 改进的缓存策略：webpack5引入了更好的缓存策略，可以更好地利用浏览器缓存。这可以减少用户在更新应用程序时需要下载的文件数量。</span></span>
<span class="line"><span style="color:#79B8FF;">5.</span><span style="color:#E1E4E8;"> 改进的Tree Shaking：webpack5引入了更好的Tree Shaking算法，可以更好地识别和删除未使用的代码。这可以进一步减少打包体积。</span></span>
<span class="line"><span style="color:#79B8FF;">6.</span><span style="color:#E1E4E8;"> 改进的持久缓存：webpack5引入了更好的持久缓存策略，可以更好地利用缓存。这可以减少构建时间。</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">1.</span><span style="color:#24292E;"> 性能改进：webpack5在构建速度和打包体积方面进行了一些优化。它引入了持久缓存，可以减少构建时间。</span></span>
<span class="line"><span style="color:#24292E;">  	此外，webpack5还引入了更好的树摇（tree shaking）算法，可以更好地优化打包体积。</span></span>
<span class="line"><span style="color:#005CC5;">2.</span><span style="color:#24292E;"> 模块联邦（Module Federation）：这是webpack5中最重要的新功能之一。模块联邦允许不同的应用程序共享模块，从而实现更好的代码复用和拆分。</span></span>
<span class="line"><span style="color:#24292E;">  	这对于构建大型的微服务架构非常有用。</span></span>
<span class="line"><span style="color:#005CC5;">3.</span><span style="color:#24292E;"> 支持WebAssembly：webpack5对WebAssembly提供了更好的支持。它可以直接导入和导出WebAssembly模块，并且可以通过配置进行优化。</span></span>
<span class="line"><span style="color:#005CC5;">4.</span><span style="color:#24292E;"> 改进的缓存策略：webpack5引入了更好的缓存策略，可以更好地利用浏览器缓存。这可以减少用户在更新应用程序时需要下载的文件数量。</span></span>
<span class="line"><span style="color:#005CC5;">5.</span><span style="color:#24292E;"> 改进的Tree Shaking：webpack5引入了更好的Tree Shaking算法，可以更好地识别和删除未使用的代码。这可以进一步减少打包体积。</span></span>
<span class="line"><span style="color:#005CC5;">6.</span><span style="color:#24292E;"> 改进的持久缓存：webpack5引入了更好的持久缓存策略，可以更好地利用缓存。这可以减少构建时间。</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h2><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">init</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-y</span><span style="color:#E1E4E8;">     </span><span style="color:#9ECBFF;">//</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">初始化package.json</span></span>
<span class="line"><span style="color:#B392F0;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">webpack</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">webpack-cli</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--save-dev</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">npx</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">webpack</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--watch</span><span style="color:#E1E4E8;">     </span><span style="color:#9ECBFF;">//</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">监听文件修改</span></span>
<span class="line"><span style="color:#B392F0;">npx</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">webpack-dev-server</span><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">//</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">以server的方式启动项目，不会打包物理文件，而是输出到内存</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">init</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-y</span><span style="color:#24292E;">     </span><span style="color:#032F62;">//</span><span style="color:#24292E;"> </span><span style="color:#032F62;">初始化package.json</span></span>
<span class="line"><span style="color:#6F42C1;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span><span style="color:#24292E;"> </span><span style="color:#032F62;">webpack</span><span style="color:#24292E;"> </span><span style="color:#032F62;">webpack-cli</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--save-dev</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">npx</span><span style="color:#24292E;"> </span><span style="color:#032F62;">webpack</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--watch</span><span style="color:#24292E;">     </span><span style="color:#032F62;">//</span><span style="color:#24292E;"> </span><span style="color:#032F62;">监听文件修改</span></span>
<span class="line"><span style="color:#6F42C1;">npx</span><span style="color:#24292E;"> </span><span style="color:#032F62;">webpack-dev-server</span><span style="color:#24292E;">  </span><span style="color:#032F62;">//</span><span style="color:#24292E;"> </span><span style="color:#032F62;">以server的方式启动项目，不会打包物理文件，而是输出到内存</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="生命周期" tabindex="-1">生命周期 <a class="header-anchor" href="#生命周期" aria-label="Permalink to &quot;生命周期&quot;">​</a></h2><h5 id="生命周期-hooks" tabindex="-1">生命周期 hooks <a class="header-anchor" href="#生命周期-hooks" aria-label="Permalink to &quot;生命周期 hooks&quot;">​</a></h5><div class="language-javascript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">beforeRun：在webpack开始运行之前调用，可以在此处执行一些准备工作。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">run：在webpack开始运行时调用，可以在此处执行一些初始化操作。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">beforeCompile：在webpack开始编译之前调用，可以在此处执行一些准备工作。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">compile：在webpack开始编译时调用，可以在此处执行一些初始化操作。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">make：在webpack开始构建编译器时调用，可以在此处执行一些准备工作。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">afterCompile：在webpack完成编译之后调用，可以在此处执行一些后处理操作。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">emit：在webpack生成最终的资源之前调用，可以在此处执行一些额外的操作，如生成额外的文件。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">afterEmit：在webpack生成最终的资源之后调用，可以在此处执行一些后处理操作。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">done：在webpack完成构建之后调用，可以在此处执行一些清理工作。</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">beforeRun：在webpack开始运行之前调用，可以在此处执行一些准备工作。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">run：在webpack开始运行时调用，可以在此处执行一些初始化操作。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">beforeCompile：在webpack开始编译之前调用，可以在此处执行一些准备工作。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">compile：在webpack开始编译时调用，可以在此处执行一些初始化操作。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">make：在webpack开始构建编译器时调用，可以在此处执行一些准备工作。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">afterCompile：在webpack完成编译之后调用，可以在此处执行一些后处理操作。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">emit：在webpack生成最终的资源之前调用，可以在此处执行一些额外的操作，如生成额外的文件。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">afterEmit：在webpack生成最终的资源之后调用，可以在此处执行一些后处理操作。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">done：在webpack完成构建之后调用，可以在此处执行一些清理工作。</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h5 id="使用-hooks" tabindex="-1">使用 hooks <a class="header-anchor" href="#使用-hooks" aria-label="Permalink to &quot;使用 hooks&quot;">​</a></h5><div class="language-javascript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">module</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">exports</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// ...</span></span>
<span class="line"><span style="color:#E1E4E8;">  plugins: [</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">apply</span><span style="color:#E1E4E8;">: (</span><span style="color:#FFAB70;">compiler</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        compiler.hooks.beforeRun.</span><span style="color:#B392F0;">tap</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;MyPlugin&#39;</span><span style="color:#E1E4E8;">, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">          console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;Before run&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">        })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        compiler.hooks.done.</span><span style="color:#B392F0;">tap</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;MyPlugin&#39;</span><span style="color:#E1E4E8;">, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">          console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;Build done&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">        })</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">  ],</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//在上述示例中，我们定义了一个自定义插件，并在其中使用了beforeRun和done两个生命周期钩子函数。</span></span>
<span class="line"><span style="color:#6A737D;">//在这些钩子函数中，我们可以执行一些自定义的操作，如输出日志信息。</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">module</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">exports</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// ...</span></span>
<span class="line"><span style="color:#24292E;">  plugins: [</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">apply</span><span style="color:#24292E;">: (</span><span style="color:#E36209;">compiler</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        compiler.hooks.beforeRun.</span><span style="color:#6F42C1;">tap</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;MyPlugin&#39;</span><span style="color:#24292E;">, () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">          console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;Before run&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">        })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        compiler.hooks.done.</span><span style="color:#6F42C1;">tap</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;MyPlugin&#39;</span><span style="color:#24292E;">, () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">          console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;Build done&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">        })</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">  ],</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//在上述示例中，我们定义了一个自定义插件，并在其中使用了beforeRun和done两个生命周期钩子函数。</span></span>
<span class="line"><span style="color:#6A737D;">//在这些钩子函数中，我们可以执行一些自定义的操作，如输出日志信息。</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><h2 id="webpack-中的-loader-转换器" tabindex="-1">webpack 中的 loader（转换器） <a class="header-anchor" href="#webpack-中的-loader-转换器" aria-label="Permalink to &quot;webpack 中的 loader（转换器）&quot;">​</a></h2><h5 id="工作原理" tabindex="-1">工作原理 <a class="header-anchor" href="#工作原理" aria-label="Permalink to &quot;工作原理&quot;">​</a></h5><div class="language-javascript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">webpack loader 在 webpack 构建过程中的生命周期中的工作主要分为以下几个阶段：</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">解析阶段：webpack 会根据配置文件中的入口文件，递归解析所有的依赖模块。在这个阶段，webpack 会根据文件的后缀名来确定使用哪个 loader 来处理该文件。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">编译阶段：在这个阶段，webpack 会将解析后的模块转换成 </span><span style="color:#79B8FF;">AST</span><span style="color:#E1E4E8;">（抽象语法树），并且根据配置文件中的规则，将模块中的代码进行转换和处理。</span></span>
<span class="line"><span style="color:#E1E4E8;">  			 这个阶段是 loader 的主要工作阶段，loader 可以对模块进行各种处理，例如转换代码、添加额外的功能等。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">生成阶段：在这个阶段，webpack 会根据处理后的模块生成最终的输出文件。输出文件的格式和路径可以通过配置文件进行配置。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">在这些阶段中，loader 主要在编译阶段发挥作用。loader 可以通过导出一个函数来定义自己的处理逻辑，这个函数接收一个参数，即待处理的模块的源代码，然后返回处理后的代码。</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">webpack loader 在 webpack 构建过程中的生命周期中的工作主要分为以下几个阶段：</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">解析阶段：webpack 会根据配置文件中的入口文件，递归解析所有的依赖模块。在这个阶段，webpack 会根据文件的后缀名来确定使用哪个 loader 来处理该文件。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">编译阶段：在这个阶段，webpack 会将解析后的模块转换成 </span><span style="color:#005CC5;">AST</span><span style="color:#24292E;">（抽象语法树），并且根据配置文件中的规则，将模块中的代码进行转换和处理。</span></span>
<span class="line"><span style="color:#24292E;">  			 这个阶段是 loader 的主要工作阶段，loader 可以对模块进行各种处理，例如转换代码、添加额外的功能等。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">生成阶段：在这个阶段，webpack 会根据处理后的模块生成最终的输出文件。输出文件的格式和路径可以通过配置文件进行配置。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">在这些阶段中，loader 主要在编译阶段发挥作用。loader 可以通过导出一个函数来定义自己的处理逻辑，这个函数接收一个参数，即待处理的模块的源代码，然后返回处理后的代码。</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h5 id="多个-loader-通信" tabindex="-1">多个 loader 通信 <a class="header-anchor" href="#多个-loader-通信" aria-label="Permalink to &quot;多个 loader 通信&quot;">​</a></h5><div class="language-javascript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">在Webpack中，loader用于对模块的源代码进行转换，允许你在import或load模块时预处理文件。当多个loader需要对同一个资源进行处理时，它们之间可以通过特定的执行顺序和上下文对象进行通信。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">、Loader链的执行顺序：多个loader可以串联起来，形成一个loader链。这些loader按照在配置中的顺序，从右到左（或从下到上）执行。</span></span>
<span class="line"><span style="color:#E1E4E8;">  最后一个loader最先执行，它接收的是资源文件的内容；第一个loader最后执行，它返回Webpack期望的JavaScript代码。中间的loader会接收前一个loader的输出作为输入，并输出给下一个loader。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">、上下文对象（loaderContext）：loader函数接收到的参数中，this指向一个上下文对象，它提供了loader运行时的上下文信息和一些方法。</span></span>
<span class="line"><span style="color:#E1E4E8;">  如this.</span><span style="color:#B392F0;">async</span><span style="color:#E1E4E8;">()用于异步处理，</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">cacheable</span><span style="color:#E1E4E8;">()用于控制缓存，</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">emitFile</span><span style="color:#E1E4E8;">()用于生成额外的文件，</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">addDependency</span><span style="color:#E1E4E8;">()用于添加文件依赖等。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">、Pitching Loader：某些loader可以定义一个pitch方法，这个方法在loader链的normal阶段之前执行，并且是从左到右执行。</span></span>
<span class="line"><span style="color:#E1E4E8;">  如果某个pitch方法返回了一个值，那么它将中断loader链的执行，后面的loader将不会被执行，而是直接进入返回值的loader的normal阶段。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">4</span><span style="color:#E1E4E8;">、内联使用：在import语句中，可以通过添加特定前缀来覆盖配置中的loader，例如使用</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">前缀来禁用所有normal loader，或者使用</span><span style="color:#F97583;">!!</span><span style="color:#E1E4E8;">前缀来禁用所有loader。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;">、Loader </span><span style="color:#79B8FF;">API</span><span style="color:#E1E4E8;">：Webpack提供了一些API，如loader</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">utils，它可以帮助loader之间进行通信，例如获取loader选项、解析文件名模板等。</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">在Webpack中，loader用于对模块的源代码进行转换，允许你在import或load模块时预处理文件。当多个loader需要对同一个资源进行处理时，它们之间可以通过特定的执行顺序和上下文对象进行通信。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">1</span><span style="color:#24292E;">、Loader链的执行顺序：多个loader可以串联起来，形成一个loader链。这些loader按照在配置中的顺序，从右到左（或从下到上）执行。</span></span>
<span class="line"><span style="color:#24292E;">  最后一个loader最先执行，它接收的是资源文件的内容；第一个loader最后执行，它返回Webpack期望的JavaScript代码。中间的loader会接收前一个loader的输出作为输入，并输出给下一个loader。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">2</span><span style="color:#24292E;">、上下文对象（loaderContext）：loader函数接收到的参数中，this指向一个上下文对象，它提供了loader运行时的上下文信息和一些方法。</span></span>
<span class="line"><span style="color:#24292E;">  如this.</span><span style="color:#6F42C1;">async</span><span style="color:#24292E;">()用于异步处理，</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">cacheable</span><span style="color:#24292E;">()用于控制缓存，</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">emitFile</span><span style="color:#24292E;">()用于生成额外的文件，</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">addDependency</span><span style="color:#24292E;">()用于添加文件依赖等。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">3</span><span style="color:#24292E;">、Pitching Loader：某些loader可以定义一个pitch方法，这个方法在loader链的normal阶段之前执行，并且是从左到右执行。</span></span>
<span class="line"><span style="color:#24292E;">  如果某个pitch方法返回了一个值，那么它将中断loader链的执行，后面的loader将不会被执行，而是直接进入返回值的loader的normal阶段。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">4</span><span style="color:#24292E;">、内联使用：在import语句中，可以通过添加特定前缀来覆盖配置中的loader，例如使用</span><span style="color:#D73A49;">!</span><span style="color:#24292E;">前缀来禁用所有normal loader，或者使用</span><span style="color:#D73A49;">!!</span><span style="color:#24292E;">前缀来禁用所有loader。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">5</span><span style="color:#24292E;">、Loader </span><span style="color:#005CC5;">API</span><span style="color:#24292E;">：Webpack提供了一些API，如loader</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">utils，它可以帮助loader之间进行通信，例如获取loader选项、解析文件名模板等。</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h5 id="常用-loader" tabindex="-1">常用 loader <a class="header-anchor" href="#常用-loader" aria-label="Permalink to &quot;常用 loader&quot;">​</a></h5><div class="language-javascript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">以下是一些常用的webpack loader：</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">babel</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">loader：用于将ES6</span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;">的JavaScript代码转换为ES5代码，以便在旧版本浏览器中运行。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">css</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">loader：用于解析CSS文件，</span><span style="color:#B392F0;">并处理其中的import和url</span><span style="color:#E1E4E8;">()等语法。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">style</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">loader：将解析后的CSS代码以</span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;">style</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;">标签的形式插入到HTML文件中。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">file</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">loader：用于处理文件资源（如图片、字体等），并将其复制到输出目录中。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">url</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">loader：类似于file</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">loader，但可以根据文件大小将文件转换为DataURL，以减少HTTP请求。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">sass</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">loader：用于将Sass</span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;">SCSS代码转换为CSS代码。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">less</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">loader：用于将Less代码转换为CSS代码。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">postcss</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">loader：用于对CSS代码进行后处理，如自动添加浏览器前缀等。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">vue</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">loader：用于解析和转换Vue单文件组件。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">ts</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">loader：用于将TypeScript代码转换为JavaScript代码。</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">以下是一些常用的webpack loader：</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">babel</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">loader：用于将ES6</span><span style="color:#D73A49;">+</span><span style="color:#24292E;">的JavaScript代码转换为ES5代码，以便在旧版本浏览器中运行。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">css</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">loader：用于解析CSS文件，</span><span style="color:#6F42C1;">并处理其中的import和url</span><span style="color:#24292E;">()等语法。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">style</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">loader：将解析后的CSS代码以</span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;">style</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;">标签的形式插入到HTML文件中。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">file</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">loader：用于处理文件资源（如图片、字体等），并将其复制到输出目录中。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">url</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">loader：类似于file</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">loader，但可以根据文件大小将文件转换为DataURL，以减少HTTP请求。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">sass</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">loader：用于将Sass</span><span style="color:#D73A49;">/</span><span style="color:#24292E;">SCSS代码转换为CSS代码。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">less</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">loader：用于将Less代码转换为CSS代码。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">postcss</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">loader：用于对CSS代码进行后处理，如自动添加浏览器前缀等。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">vue</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">loader：用于解析和转换Vue单文件组件。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">ts</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">loader：用于将TypeScript代码转换为JavaScript代码。</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><h5 id="自定义-loader" tabindex="-1">自定义 loader <a class="header-anchor" href="#自定义-loader" aria-label="Permalink to &quot;自定义 loader&quot;">​</a></h5><div class="language-javascript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 核心代码：</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">clearConsoleLoader</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">source</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 使用正则表达式匹配并替换console语句</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">modifiedSource</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> source.</span><span style="color:#B392F0;">replace</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">/</span><span style="color:#DBEDFF;">console</span><span style="color:#85E89D;font-weight:bold;">\\.</span><span style="color:#79B8FF;">[a-z]</span><span style="color:#F97583;">+</span><span style="color:#85E89D;font-weight:bold;">\\(</span><span style="color:#79B8FF;">.</span><span style="color:#F97583;">+</span><span style="color:#85E89D;font-weight:bold;">\\)</span><span style="color:#DBEDFF;">;</span><span style="color:#F97583;">?</span><span style="color:#9ECBFF;">/</span><span style="color:#F97583;">g</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> modifiedSource</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">module</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">exports</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> clearConsoleLoader</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//使用</span></span>
<span class="line"><span style="color:#79B8FF;">module</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">exports</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// ...</span></span>
<span class="line"><span style="color:#E1E4E8;">  module: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    rules: [</span></span>
<span class="line"><span style="color:#E1E4E8;">      {</span></span>
<span class="line"><span style="color:#E1E4E8;">        test:</span><span style="color:#DBEDFF;"> </span><span style="color:#9ECBFF;">/</span><span style="color:#85E89D;font-weight:bold;">\\.</span><span style="color:#DBEDFF;">js</span><span style="color:#F97583;">$</span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        exclude:</span><span style="color:#DBEDFF;"> </span><span style="color:#9ECBFF;">/</span><span style="color:#DBEDFF;">node_modules</span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        use: [</span><span style="color:#9ECBFF;">&#39;babel-loader&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;./path/to/clearConsoleLoader.js&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">    ],</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 核心代码：</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">clearConsoleLoader</span><span style="color:#24292E;">(</span><span style="color:#E36209;">source</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 使用正则表达式匹配并替换console语句</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">modifiedSource</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> source.</span><span style="color:#6F42C1;">replace</span><span style="color:#24292E;">(</span><span style="color:#032F62;">/console</span><span style="color:#22863A;font-weight:bold;">\\.</span><span style="color:#005CC5;">[a-z]</span><span style="color:#D73A49;">+</span><span style="color:#22863A;font-weight:bold;">\\(</span><span style="color:#005CC5;">.</span><span style="color:#D73A49;">+</span><span style="color:#22863A;font-weight:bold;">\\)</span><span style="color:#032F62;">;</span><span style="color:#D73A49;">?</span><span style="color:#032F62;">/</span><span style="color:#D73A49;">g</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> modifiedSource</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">module</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">exports</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> clearConsoleLoader</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//使用</span></span>
<span class="line"><span style="color:#005CC5;">module</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">exports</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// ...</span></span>
<span class="line"><span style="color:#24292E;">  module: {</span></span>
<span class="line"><span style="color:#24292E;">    rules: [</span></span>
<span class="line"><span style="color:#24292E;">      {</span></span>
<span class="line"><span style="color:#24292E;">        test:</span><span style="color:#032F62;"> /</span><span style="color:#22863A;font-weight:bold;">\\.</span><span style="color:#032F62;">js</span><span style="color:#D73A49;">$</span><span style="color:#032F62;">/</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        exclude:</span><span style="color:#032F62;"> /node_modules/</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        use: [</span><span style="color:#032F62;">&#39;babel-loader&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;./path/to/clearConsoleLoader.js&#39;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">    ],</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><h2 id="webpack-中的-plugins-插件" tabindex="-1">webpack 中的 plugins（插件） <a class="header-anchor" href="#webpack-中的-plugins-插件" aria-label="Permalink to &quot;webpack 中的 plugins（插件）&quot;">​</a></h2><h5 id="工作原理-1" tabindex="-1">工作原理 <a class="header-anchor" href="#工作原理-1" aria-label="Permalink to &quot;工作原理&quot;">​</a></h5><div class="language-javascript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">webpack 插件是用来扩展 webpack 功能的工具，它可以在 webpack 构建过程中的不同阶段执行一些额外的操作。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">插件的工作原理是通过在 webpack 的构建过程中的不同生命周期中注册一些钩子函数，然后在对应的阶段执行这些钩子函数中的逻辑。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">webpack 的构建过程中有以下几个生命周期：</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">	初始化阶段：在这个阶段，webpack 会初始化配置参数，加载插件，并准备开始编译。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">	编译阶段：在这个阶段，webpack 会从入口文件开始递归解析所有的依赖模块，并将模块转换成 </span><span style="color:#79B8FF;">AST</span><span style="color:#E1E4E8;">（抽象语法树），然后根据配置文件中的规则进行转换和处理。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">	完成编译阶段：在这个阶段，webpack 已经完成了所有的模块的转换和处理，并且生成了最终的输出文件。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">	输出阶段：在这个阶段，webpack 会将生成的输出文件写入到磁盘上。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">插件可以在这些生命周期中的任意阶段注册对应的钩子函数，并在钩子函数中执行一些额外的操作。</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">webpack 插件是用来扩展 webpack 功能的工具，它可以在 webpack 构建过程中的不同阶段执行一些额外的操作。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">插件的工作原理是通过在 webpack 的构建过程中的不同生命周期中注册一些钩子函数，然后在对应的阶段执行这些钩子函数中的逻辑。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">webpack 的构建过程中有以下几个生命周期：</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">	初始化阶段：在这个阶段，webpack 会初始化配置参数，加载插件，并准备开始编译。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">	编译阶段：在这个阶段，webpack 会从入口文件开始递归解析所有的依赖模块，并将模块转换成 </span><span style="color:#005CC5;">AST</span><span style="color:#24292E;">（抽象语法树），然后根据配置文件中的规则进行转换和处理。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">	完成编译阶段：在这个阶段，webpack 已经完成了所有的模块的转换和处理，并且生成了最终的输出文件。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">	输出阶段：在这个阶段，webpack 会将生成的输出文件写入到磁盘上。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">插件可以在这些生命周期中的任意阶段注册对应的钩子函数，并在钩子函数中执行一些额外的操作。</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h5 id="自定义-plugins" tabindex="-1">自定义 plugins <a class="header-anchor" href="#自定义-plugins" aria-label="Permalink to &quot;自定义 plugins&quot;">​</a></h5><div class="language-javascript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">class</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">MyPlugin</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">apply</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">compiler</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 注册初始化阶段的钩子函数</span></span>
<span class="line"><span style="color:#E1E4E8;">    compiler.hooks.initialize.</span><span style="color:#B392F0;">tap</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;MyPlugin&#39;</span><span style="color:#E1E4E8;">, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;MyPlugin initialized&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 注册编译阶段的钩子函数</span></span>
<span class="line"><span style="color:#E1E4E8;">    compiler.hooks.compile.</span><span style="color:#B392F0;">tap</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;MyPlugin&#39;</span><span style="color:#E1E4E8;">, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;MyPlugin compiling&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">module</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">exports</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> MyPlugin</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 使用</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">MyPlugin</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;./my-plugin&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">module</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">exports</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// ...</span></span>
<span class="line"><span style="color:#E1E4E8;">  plugins: [</span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">MyPlugin</span><span style="color:#E1E4E8;">()],</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">MyPlugin</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">apply</span><span style="color:#24292E;">(</span><span style="color:#E36209;">compiler</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 注册初始化阶段的钩子函数</span></span>
<span class="line"><span style="color:#24292E;">    compiler.hooks.initialize.</span><span style="color:#6F42C1;">tap</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;MyPlugin&#39;</span><span style="color:#24292E;">, () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">      console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;MyPlugin initialized&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">    })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 注册编译阶段的钩子函数</span></span>
<span class="line"><span style="color:#24292E;">    compiler.hooks.compile.</span><span style="color:#6F42C1;">tap</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;MyPlugin&#39;</span><span style="color:#24292E;">, () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">      console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;MyPlugin compiling&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">    })</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">module</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">exports</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> MyPlugin</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 使用</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">MyPlugin</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">require</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;./my-plugin&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">module</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">exports</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// ...</span></span>
<span class="line"><span style="color:#24292E;">  plugins: [</span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">MyPlugin</span><span style="color:#24292E;">()],</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><h2 id="打包过程" tabindex="-1">打包过程 <a class="header-anchor" href="#打包过程" aria-label="Permalink to &quot;打包过程&quot;">​</a></h2><div class="language-javascript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">读取配置文件：Webpack会首先读取配置文件，根据配置文件中的入口、出口等信息进行打包。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">解析模块依赖：Webpack会从指定的入口文件开始递归解析所有的模块依赖，直到找到所有的模块。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">加载器处理：对于不同类型的模块，Webpack会使用相应的加载器对其进行处理。例如，对于JavaScript模块，Webpack会使用Babel加载器将ES6语法转换为ES5语法；对于CSS模块，Webpack会使用CSS加载器将CSS代码打包进JS文件中。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">插件处理：在模块加载完成之后，Webpack会执行一系列插件，用于完成一些额外的任务，例如生成HTML文件、提取CSS文件等。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">编译打包：Webpack将经过处理的模块和插件生成最终的打包文件。通常情况下，Webpack会生成一个或多个JavaScript文件，同时也可以生成其他类型的文件，例如CSS、图片等。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">输出打包文件：Webpack将生成的打包文件输出到指定的目录中。通常情况下，Webpack会将打包文件输出到dist目录下。</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">读取配置文件：Webpack会首先读取配置文件，根据配置文件中的入口、出口等信息进行打包。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">解析模块依赖：Webpack会从指定的入口文件开始递归解析所有的模块依赖，直到找到所有的模块。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">加载器处理：对于不同类型的模块，Webpack会使用相应的加载器对其进行处理。例如，对于JavaScript模块，Webpack会使用Babel加载器将ES6语法转换为ES5语法；对于CSS模块，Webpack会使用CSS加载器将CSS代码打包进JS文件中。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">插件处理：在模块加载完成之后，Webpack会执行一系列插件，用于完成一些额外的任务，例如生成HTML文件、提取CSS文件等。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">编译打包：Webpack将经过处理的模块和插件生成最终的打包文件。通常情况下，Webpack会生成一个或多个JavaScript文件，同时也可以生成其他类型的文件，例如CSS、图片等。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">输出打包文件：Webpack将生成的打包文件输出到指定的目录中。通常情况下，Webpack会将打包文件输出到dist目录下。</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h3 id="加速-webpack-打包速度和减小打包体积的优化" tabindex="-1">加速 webpack 打包速度和减小打包体积的优化 <a class="header-anchor" href="#加速-webpack-打包速度和减小打包体积的优化" aria-label="Permalink to &quot;加速 webpack 打包速度和减小打包体积的优化&quot;">​</a></h3><div class="language-plain vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">1. 优化Webpack配置：使用Tree shaking来减小打包体积，设置Webpack的mode为production以启用UglifyJsPlugin等插件进行代码压缩和优化。</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">2. 使用Webpack的code splitting功能：将代码分割成较小的块，以便在需要时动态加载。</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">3. 压缩图片和字体文件：使用ImageMinWebpackPlugin和FontminWebpackPlugin等插件来压缩图片和字体文件，减小打包体积。</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">4. 缓存：启用Webpack的缓存功能，以便在修改代码时只重新打包修改的文件，而不是重新打包所有文件。</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">5. 使用DLLPlugin和DllReferencePlugin：将一些第三方库打包成单独的文件，以便在每次打包应用程序时不必重新打包这些库。</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">6. 使用HappyPack插件：使用多线程来加速Webpack打包，以便同时处理多个任务。</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">7. 使用externals选项：将一些不需要打包的库从打包中排除，以便减小打包体积。</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">8. 使用Webpack-bundle-analyzer插件：分析打包后的文件，以便找出冗余的代码和依赖关系，进行优化。</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">这些技巧可以帮助优化Webpack的打包速度和打包体积。</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">1. 优化Webpack配置：使用Tree shaking来减小打包体积，设置Webpack的mode为production以启用UglifyJsPlugin等插件进行代码压缩和优化。</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">2. 使用Webpack的code splitting功能：将代码分割成较小的块，以便在需要时动态加载。</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">3. 压缩图片和字体文件：使用ImageMinWebpackPlugin和FontminWebpackPlugin等插件来压缩图片和字体文件，减小打包体积。</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">4. 缓存：启用Webpack的缓存功能，以便在修改代码时只重新打包修改的文件，而不是重新打包所有文件。</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">5. 使用DLLPlugin和DllReferencePlugin：将一些第三方库打包成单独的文件，以便在每次打包应用程序时不必重新打包这些库。</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">6. 使用HappyPack插件：使用多线程来加速Webpack打包，以便同时处理多个任务。</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">7. 使用externals选项：将一些不需要打包的库从打包中排除，以便减小打包体积。</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">8. 使用Webpack-bundle-analyzer插件：分析打包后的文件，以便找出冗余的代码和依赖关系，进行优化。</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">这些技巧可以帮助优化Webpack的打包速度和打包体积。</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h3 id="webpack-配置" tabindex="-1">webpack 配置 <a class="header-anchor" href="#webpack-配置" aria-label="Permalink to &quot;webpack 配置&quot;">​</a></h3><div class="language-javascript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">path</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;path&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">HtmlWebpackPlugin</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;html-webpack-plugin&#39;</span><span style="color:#E1E4E8;">) </span><span style="color:#6A737D;">// 自动引入资源插件  npm install --save-dev html-webpack-plugin</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">MiniCssExtracPlugin</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;mini-css-extrac-plugin&#39;</span><span style="color:#E1E4E8;">) </span><span style="color:#6A737D;">// css抽离</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">CssMinimizerPlugin</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;css-minimizer-webpack-plugin&#39;</span><span style="color:#E1E4E8;">) </span><span style="color:#6A737D;">//css压缩 npm install css-minimizer-webpack-plugin  --save-dev</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">TerserPlugin</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;terser-webpack-plugin&#39;</span><span style="color:#E1E4E8;">) </span><span style="color:#6A737D;">// js压缩  npm install --save-dev terser-webpack-plugin</span></span>
<span class="line"><span style="color:#6A737D;">//加载toml、yarm、json5数据资源 npm install toml yarm json5 -D</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">toml</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;toml&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">yarm</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;yarm&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">json5</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;json5&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">module</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">exports</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">env</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 手动分离公共文件，通过配置成对象的方式实现多入口代码分割</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// entry: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//  index:{</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//    import:&quot;./src/index.js&quot;,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//    dependOn: &quot;shared&quot;  // 抽离公共文件</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//  },</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//  shared: &quot;lodash&quot;      // 公共的js文件</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// },</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 多入口</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// entry: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 	 pageOne: &#39;./src/pageOne/index.js&#39;,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//  	pageTwo: &#39;./src/pageTwo/index.js&#39;,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//  	pageThree: &#39;./src/pageThree/index.js&#39;,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// },</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 单入口</span></span>
<span class="line"><span style="color:#E1E4E8;">    entry: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      index: </span><span style="color:#9ECBFF;">&#39;./src/index.js&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    output: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      filename: </span><span style="color:#9ECBFF;">&#39;scripts/[name].[contenthash].js&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 将所有的js放入同一个文件夹，并且根据文件名自动命名</span></span>
<span class="line"><span style="color:#E1E4E8;">      path: path.</span><span style="color:#B392F0;">resolve</span><span style="color:#E1E4E8;">(__dirname, </span><span style="color:#9ECBFF;">&#39;./dist&#39;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">      clean: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 清除上一次的垃圾文件</span></span>
<span class="line"><span style="color:#E1E4E8;">      assetModuleFilename: </span><span style="color:#9ECBFF;">&#39;images/[contenthash][ext]&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 在images目录下，根据文件内容自动生成hash文件名</span></span>
<span class="line"><span style="color:#E1E4E8;">      publicPath: </span><span style="color:#9ECBFF;">&#39;https://*****.com/&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 公共路径（cdn域名或者本地localhost）</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    mode: env.prodection </span><span style="color:#F97583;">?</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;prodection&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;development&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 生产环境或者开发环境 package.json 启动命令：npx webpack --env prodection</span></span>
<span class="line"><span style="color:#E1E4E8;">    devtool: </span><span style="color:#9ECBFF;">&#39;cheap-module-source-map&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 真实报错文件指向,生产环境一般不开启sourcemap</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 插件（非必要的，缺少也不影响项目打包）</span></span>
<span class="line"><span style="color:#E1E4E8;">    plugins: [</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">HtmlWebpackPlugin</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">        template: </span><span style="color:#9ECBFF;">&#39;./index.html&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 模板</span></span>
<span class="line"><span style="color:#E1E4E8;">        filename: </span><span style="color:#9ECBFF;">&#39;app.html&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        inject: </span><span style="color:#9ECBFF;">&#39;body&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// script 存在的位置</span></span>
<span class="line"><span style="color:#E1E4E8;">        hash: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 解决缓存</span></span>
<span class="line"><span style="color:#E1E4E8;">        minify: {</span></span>
<span class="line"><span style="color:#E1E4E8;">          removeAttributeQuotes: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 压缩，去掉引号</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">      }),</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">MiniCssExtracPlugin</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">        filename: </span><span style="color:#9ECBFF;">&#39;style/[contenthash].css&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      }),</span></span>
<span class="line"><span style="color:#E1E4E8;">    ],</span></span>
<span class="line"><span style="color:#E1E4E8;">    devServer: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      static: </span><span style="color:#9ECBFF;">&#39;./dist&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 监听根目录文件变化，自动刷新页面插件 npm install --save-dev webpack-dev-server</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">//反向代理</span></span>
<span class="line"><span style="color:#E1E4E8;">      proxy: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&#39;/ajax&#39;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">          target: </span><span style="color:#9ECBFF;">&#39;https:**********&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          ws: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          changeOrigin: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 模块（必要的，缺少影响项目打包）</span></span>
<span class="line"><span style="color:#E1E4E8;">    module: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      rules: [</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">//资源模块类型我们称之为Asset Modules Type，总共有四种，来代替loader，分别是：</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// asset/resource：发送一个单独的文件并导出URL，替代file-loader</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// asset/inline：导出一个资源的data URI(base64)，替代url-loader</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// asset/source：导出资源的源代码，之前通过使用raw-loader实现</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// asset：介于asset/resource和asset/inline之间， 之前通过url-loader+limit属性实现。</span></span>
<span class="line"><span style="color:#E1E4E8;">        {</span></span>
<span class="line"><span style="color:#E1E4E8;">          test:</span><span style="color:#DBEDFF;"> </span><span style="color:#9ECBFF;">/</span><span style="color:#85E89D;font-weight:bold;">\\.</span><span style="color:#DBEDFF;">(png</span><span style="color:#F97583;">|</span><span style="color:#DBEDFF;">gif</span><span style="color:#F97583;">|</span><span style="color:#DBEDFF;">jp</span><span style="color:#F97583;">?</span><span style="color:#DBEDFF;">g</span><span style="color:#F97583;">|</span><span style="color:#DBEDFF;">svg</span><span style="color:#F97583;">|</span><span style="color:#DBEDFF;">webp</span><span style="color:#F97583;">|</span><span style="color:#DBEDFF;">ico)</span><span style="color:#F97583;">$</span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 正则图片文件</span></span>
<span class="line"><span style="color:#E1E4E8;">          type: </span><span style="color:#9ECBFF;">&#39;asset&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          generator: {</span></span>
<span class="line"><span style="color:#E1E4E8;">            filename: </span><span style="color:#9ECBFF;">&#39;images/[contenthash][ext]&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 优先级高于 assetModuleFilename</span></span>
<span class="line"><span style="color:#E1E4E8;">          },</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">        {</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#6A737D;">// 支持less</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#6A737D;">// npm install style-loader css-loader less-loader less --save-dev</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#6A737D;">// 抽离 npm install mini-css-extrac-plugin  --save-dev   webpack5环境下构建的插件</span></span>
<span class="line"><span style="color:#E1E4E8;">          test:</span><span style="color:#DBEDFF;"> </span><span style="color:#9ECBFF;">/</span><span style="color:#85E89D;font-weight:bold;">\\.</span><span style="color:#DBEDFF;">(le</span><span style="color:#F97583;">|</span><span style="color:#DBEDFF;">c)ss</span><span style="color:#F97583;">$</span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// .less and .css</span></span>
<span class="line"><span style="color:#E1E4E8;">          use: [MiniCssExtracPlugin.loader, </span><span style="color:#6A737D;">/* &quot;style-loader&quot;, */</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;css-loader&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;less-loader&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">        {</span></span>
<span class="line"><span style="color:#E1E4E8;">          test:</span><span style="color:#DBEDFF;"> </span><span style="color:#9ECBFF;">/</span><span style="color:#85E89D;font-weight:bold;">\\.</span><span style="color:#DBEDFF;">(woff</span><span style="color:#F97583;">|</span><span style="color:#DBEDFF;">woff2</span><span style="color:#F97583;">|</span><span style="color:#DBEDFF;">eot</span><span style="color:#F97583;">|</span><span style="color:#DBEDFF;">ttf</span><span style="color:#F97583;">|</span><span style="color:#DBEDFF;">oft)</span><span style="color:#F97583;">$</span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 正则字体文件</span></span>
<span class="line"><span style="color:#E1E4E8;">          type: </span><span style="color:#9ECBFF;">&#39;asset/resource&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">//加载csv、xml数据资源 npm install csv-loader xml-loader -D</span></span>
<span class="line"><span style="color:#E1E4E8;">        {</span></span>
<span class="line"><span style="color:#E1E4E8;">          test:</span><span style="color:#DBEDFF;"> </span><span style="color:#9ECBFF;">/</span><span style="color:#85E89D;font-weight:bold;">\\.</span><span style="color:#DBEDFF;">(csv</span><span style="color:#F97583;">|</span><span style="color:#DBEDFF;">tsv)</span><span style="color:#F97583;">$</span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          use: </span><span style="color:#9ECBFF;">&#39;csv-loader&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">        {</span></span>
<span class="line"><span style="color:#E1E4E8;">          test:</span><span style="color:#DBEDFF;"> </span><span style="color:#9ECBFF;">/</span><span style="color:#85E89D;font-weight:bold;">\\.</span><span style="color:#DBEDFF;">xml</span><span style="color:#F97583;">$</span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          use: </span><span style="color:#9ECBFF;">&#39;xml-loader&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">//加载toml、yarm、json5数据资源</span></span>
<span class="line"><span style="color:#E1E4E8;">        {</span></span>
<span class="line"><span style="color:#E1E4E8;">          test:</span><span style="color:#DBEDFF;"> </span><span style="color:#9ECBFF;">/</span><span style="color:#85E89D;font-weight:bold;">\\.</span><span style="color:#DBEDFF;">toml</span><span style="color:#F97583;">$</span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          type: </span><span style="color:#9ECBFF;">&#39;json&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          parser: {</span></span>
<span class="line"><span style="color:#E1E4E8;">            parse: toml.parse,</span></span>
<span class="line"><span style="color:#E1E4E8;">          },</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">        {</span></span>
<span class="line"><span style="color:#E1E4E8;">          test:</span><span style="color:#DBEDFF;"> </span><span style="color:#9ECBFF;">/</span><span style="color:#85E89D;font-weight:bold;">\\.</span><span style="color:#DBEDFF;">yarm</span><span style="color:#F97583;">$</span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          type: </span><span style="color:#9ECBFF;">&#39;json&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          parser: {</span></span>
<span class="line"><span style="color:#E1E4E8;">            parse: yarm.parse,</span></span>
<span class="line"><span style="color:#E1E4E8;">          },</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">        {</span></span>
<span class="line"><span style="color:#E1E4E8;">          test:</span><span style="color:#DBEDFF;"> </span><span style="color:#9ECBFF;">/</span><span style="color:#85E89D;font-weight:bold;">\\.</span><span style="color:#DBEDFF;">json5</span><span style="color:#F97583;">$</span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          type: </span><span style="color:#9ECBFF;">&#39;json&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          parser: {</span></span>
<span class="line"><span style="color:#E1E4E8;">            parse: json5.parse,</span></span>
<span class="line"><span style="color:#E1E4E8;">          },</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// loader工具 支持数组方式链式调用，数组靠后的元素先执行</span></span>
<span class="line"><span style="color:#E1E4E8;">        {</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#6A737D;">// 压缩图片</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#6A737D;">//图片小于一定大小使用base64 否则使用file-loader产生真实图片 npm install url-loader --save-dev</span></span>
<span class="line"><span style="color:#E1E4E8;">          test:</span><span style="color:#DBEDFF;"> </span><span style="color:#9ECBFF;">/</span><span style="color:#85E89D;font-weight:bold;">\\.</span><span style="color:#DBEDFF;">(png</span><span style="color:#F97583;">|</span><span style="color:#DBEDFF;">gif</span><span style="color:#F97583;">|</span><span style="color:#DBEDFF;">jp</span><span style="color:#F97583;">?</span><span style="color:#DBEDFF;">g</span><span style="color:#F97583;">|</span><span style="color:#DBEDFF;">svg</span><span style="color:#F97583;">|</span><span style="color:#DBEDFF;">webp</span><span style="color:#F97583;">|</span><span style="color:#DBEDFF;">ico)</span><span style="color:#F97583;">$</span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 正则</span></span>
<span class="line"><span style="color:#E1E4E8;">          use: [</span></span>
<span class="line"><span style="color:#E1E4E8;">            {</span></span>
<span class="line"><span style="color:#E1E4E8;">              loader: </span><span style="color:#9ECBFF;">&#39;url-loader&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">              options: {</span></span>
<span class="line"><span style="color:#E1E4E8;">                limit: </span><span style="color:#79B8FF;">5000</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">//小于限定使用base64</span></span>
<span class="line"><span style="color:#E1E4E8;">                name: </span><span style="color:#9ECBFF;">&#39;home/images/[name].[hash:8].[ext]&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                publicPath: </span><span style="color:#9ECBFF;">\`../../\`</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                esModule: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">              },</span></span>
<span class="line"><span style="color:#E1E4E8;">            },</span></span>
<span class="line"><span style="color:#E1E4E8;">          ],</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 使用babel-loader npm install -D babel-loader @babel/core @babel/preset-env</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// regeneratorRuntime是webpack打包生成的全局辅助函数，由babel生成，用于兼容 async/await 的语法</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// npm install --save @babel/runtime</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// npm install --save-dev @babel/plugin-transform-runtime</span></span>
<span class="line"><span style="color:#E1E4E8;">        {</span></span>
<span class="line"><span style="color:#E1E4E8;">          test:</span><span style="color:#DBEDFF;"> </span><span style="color:#9ECBFF;">/</span><span style="color:#85E89D;font-weight:bold;">\\.</span><span style="color:#DBEDFF;">js</span><span style="color:#F97583;">$</span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          exclude:</span><span style="color:#DBEDFF;"> </span><span style="color:#9ECBFF;">/</span><span style="color:#DBEDFF;">node_modules</span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// *业务代码里面可能会引入node_modules外部js，这些js不需要babel-loader编译，因此需要排除掉</span></span>
<span class="line"><span style="color:#E1E4E8;">          use: {</span></span>
<span class="line"><span style="color:#E1E4E8;">            loader: </span><span style="color:#9ECBFF;">&#39;babel-loader&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// *引入babel-loader</span></span>
<span class="line"><span style="color:#E1E4E8;">            options: {</span></span>
<span class="line"><span style="color:#E1E4E8;">              presets: [</span><span style="color:#9ECBFF;">&#39;@babel/preset-env&#39;</span><span style="color:#E1E4E8;">], </span><span style="color:#6A737D;">// *引入预设</span></span>
<span class="line"><span style="color:#E1E4E8;">              plugins: [</span></span>
<span class="line"><span style="color:#E1E4E8;">                [</span></span>
<span class="line"><span style="color:#E1E4E8;">                  </span><span style="color:#9ECBFF;">&#39;@babel/plugin-transform-runtime&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// *配置插件信息</span></span>
<span class="line"><span style="color:#E1E4E8;">                ],</span></span>
<span class="line"><span style="color:#E1E4E8;">              ],</span></span>
<span class="line"><span style="color:#E1E4E8;">            },</span></span>
<span class="line"><span style="color:#E1E4E8;">          },</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">      ],</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    optimization: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      minimizer: [</span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">CssMinimizerPlugin</span><span style="color:#E1E4E8;">(), </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">TerserPlugin</span><span style="color:#E1E4E8;">()], </span><span style="color:#6A737D;">//代码压缩 mode改为 production</span></span>
<span class="line"><span style="color:#E1E4E8;">      splitChunks: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 缓存</span></span>
<span class="line"><span style="color:#E1E4E8;">        cacheGroups: {</span></span>
<span class="line"><span style="color:#E1E4E8;">          vendor: {</span></span>
<span class="line"><span style="color:#E1E4E8;">            test:</span><span style="color:#DBEDFF;"> </span><span style="color:#9ECBFF;">/</span><span style="color:#79B8FF;">[</span><span style="color:#85E89D;font-weight:bold;">\\\\</span><span style="color:#79B8FF;">/]</span><span style="color:#DBEDFF;">node_modules</span><span style="color:#79B8FF;">[</span><span style="color:#85E89D;font-weight:bold;">\\\\</span><span style="color:#79B8FF;">/]</span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            name: </span><span style="color:#9ECBFF;">&#39;vendors&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            chunks: </span><span style="color:#9ECBFF;">&#39;all&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 自动重复代码抽离</span></span>
<span class="line"><span style="color:#E1E4E8;">          },</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">path</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">require</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;path&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">HtmlWebpackPlugin</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">require</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;html-webpack-plugin&#39;</span><span style="color:#24292E;">) </span><span style="color:#6A737D;">// 自动引入资源插件  npm install --save-dev html-webpack-plugin</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">MiniCssExtracPlugin</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">require</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;mini-css-extrac-plugin&#39;</span><span style="color:#24292E;">) </span><span style="color:#6A737D;">// css抽离</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">CssMinimizerPlugin</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">require</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;css-minimizer-webpack-plugin&#39;</span><span style="color:#24292E;">) </span><span style="color:#6A737D;">//css压缩 npm install css-minimizer-webpack-plugin  --save-dev</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">TerserPlugin</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">require</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;terser-webpack-plugin&#39;</span><span style="color:#24292E;">) </span><span style="color:#6A737D;">// js压缩  npm install --save-dev terser-webpack-plugin</span></span>
<span class="line"><span style="color:#6A737D;">//加载toml、yarm、json5数据资源 npm install toml yarm json5 -D</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">toml</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">require</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;toml&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">yarm</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">require</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;yarm&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">json5</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">require</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;json5&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">module</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">exports</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">env</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 手动分离公共文件，通过配置成对象的方式实现多入口代码分割</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// entry: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//  index:{</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//    import:&quot;./src/index.js&quot;,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//    dependOn: &quot;shared&quot;  // 抽离公共文件</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//  },</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//  shared: &quot;lodash&quot;      // 公共的js文件</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// },</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 多入口</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// entry: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 	 pageOne: &#39;./src/pageOne/index.js&#39;,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//  	pageTwo: &#39;./src/pageTwo/index.js&#39;,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//  	pageThree: &#39;./src/pageThree/index.js&#39;,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// },</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 单入口</span></span>
<span class="line"><span style="color:#24292E;">    entry: {</span></span>
<span class="line"><span style="color:#24292E;">      index: </span><span style="color:#032F62;">&#39;./src/index.js&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    output: {</span></span>
<span class="line"><span style="color:#24292E;">      filename: </span><span style="color:#032F62;">&#39;scripts/[name].[contenthash].js&#39;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 将所有的js放入同一个文件夹，并且根据文件名自动命名</span></span>
<span class="line"><span style="color:#24292E;">      path: path.</span><span style="color:#6F42C1;">resolve</span><span style="color:#24292E;">(__dirname, </span><span style="color:#032F62;">&#39;./dist&#39;</span><span style="color:#24292E;">),</span></span>
<span class="line"><span style="color:#24292E;">      clean: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 清除上一次的垃圾文件</span></span>
<span class="line"><span style="color:#24292E;">      assetModuleFilename: </span><span style="color:#032F62;">&#39;images/[contenthash][ext]&#39;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 在images目录下，根据文件内容自动生成hash文件名</span></span>
<span class="line"><span style="color:#24292E;">      publicPath: </span><span style="color:#032F62;">&#39;https://*****.com/&#39;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 公共路径（cdn域名或者本地localhost）</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    mode: env.prodection </span><span style="color:#D73A49;">?</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;prodection&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;development&#39;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 生产环境或者开发环境 package.json 启动命令：npx webpack --env prodection</span></span>
<span class="line"><span style="color:#24292E;">    devtool: </span><span style="color:#032F62;">&#39;cheap-module-source-map&#39;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 真实报错文件指向,生产环境一般不开启sourcemap</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 插件（非必要的，缺少也不影响项目打包）</span></span>
<span class="line"><span style="color:#24292E;">    plugins: [</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">HtmlWebpackPlugin</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">        template: </span><span style="color:#032F62;">&#39;./index.html&#39;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 模板</span></span>
<span class="line"><span style="color:#24292E;">        filename: </span><span style="color:#032F62;">&#39;app.html&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        inject: </span><span style="color:#032F62;">&#39;body&#39;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// script 存在的位置</span></span>
<span class="line"><span style="color:#24292E;">        hash: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 解决缓存</span></span>
<span class="line"><span style="color:#24292E;">        minify: {</span></span>
<span class="line"><span style="color:#24292E;">          removeAttributeQuotes: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 压缩，去掉引号</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">      }),</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">MiniCssExtracPlugin</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">        filename: </span><span style="color:#032F62;">&#39;style/[contenthash].css&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      }),</span></span>
<span class="line"><span style="color:#24292E;">    ],</span></span>
<span class="line"><span style="color:#24292E;">    devServer: {</span></span>
<span class="line"><span style="color:#24292E;">      static: </span><span style="color:#032F62;">&#39;./dist&#39;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 监听根目录文件变化，自动刷新页面插件 npm install --save-dev webpack-dev-server</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">//反向代理</span></span>
<span class="line"><span style="color:#24292E;">      proxy: {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&#39;/ajax&#39;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">          target: </span><span style="color:#032F62;">&#39;https:**********&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          ws: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          changeOrigin: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 模块（必要的，缺少影响项目打包）</span></span>
<span class="line"><span style="color:#24292E;">    module: {</span></span>
<span class="line"><span style="color:#24292E;">      rules: [</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">//资源模块类型我们称之为Asset Modules Type，总共有四种，来代替loader，分别是：</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// asset/resource：发送一个单独的文件并导出URL，替代file-loader</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// asset/inline：导出一个资源的data URI(base64)，替代url-loader</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// asset/source：导出资源的源代码，之前通过使用raw-loader实现</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// asset：介于asset/resource和asset/inline之间， 之前通过url-loader+limit属性实现。</span></span>
<span class="line"><span style="color:#24292E;">        {</span></span>
<span class="line"><span style="color:#24292E;">          test:</span><span style="color:#032F62;"> /</span><span style="color:#22863A;font-weight:bold;">\\.</span><span style="color:#032F62;">(png</span><span style="color:#D73A49;">|</span><span style="color:#032F62;">gif</span><span style="color:#D73A49;">|</span><span style="color:#032F62;">jp</span><span style="color:#D73A49;">?</span><span style="color:#032F62;">g</span><span style="color:#D73A49;">|</span><span style="color:#032F62;">svg</span><span style="color:#D73A49;">|</span><span style="color:#032F62;">webp</span><span style="color:#D73A49;">|</span><span style="color:#032F62;">ico)</span><span style="color:#D73A49;">$</span><span style="color:#032F62;">/</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 正则图片文件</span></span>
<span class="line"><span style="color:#24292E;">          type: </span><span style="color:#032F62;">&#39;asset&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          generator: {</span></span>
<span class="line"><span style="color:#24292E;">            filename: </span><span style="color:#032F62;">&#39;images/[contenthash][ext]&#39;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 优先级高于 assetModuleFilename</span></span>
<span class="line"><span style="color:#24292E;">          },</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">        {</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#6A737D;">// 支持less</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#6A737D;">// npm install style-loader css-loader less-loader less --save-dev</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#6A737D;">// 抽离 npm install mini-css-extrac-plugin  --save-dev   webpack5环境下构建的插件</span></span>
<span class="line"><span style="color:#24292E;">          test:</span><span style="color:#032F62;"> /</span><span style="color:#22863A;font-weight:bold;">\\.</span><span style="color:#032F62;">(le</span><span style="color:#D73A49;">|</span><span style="color:#032F62;">c)ss</span><span style="color:#D73A49;">$</span><span style="color:#032F62;">/</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// .less and .css</span></span>
<span class="line"><span style="color:#24292E;">          use: [MiniCssExtracPlugin.loader, </span><span style="color:#6A737D;">/* &quot;style-loader&quot;, */</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;css-loader&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;less-loader&#39;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">        {</span></span>
<span class="line"><span style="color:#24292E;">          test:</span><span style="color:#032F62;"> /</span><span style="color:#22863A;font-weight:bold;">\\.</span><span style="color:#032F62;">(woff</span><span style="color:#D73A49;">|</span><span style="color:#032F62;">woff2</span><span style="color:#D73A49;">|</span><span style="color:#032F62;">eot</span><span style="color:#D73A49;">|</span><span style="color:#032F62;">ttf</span><span style="color:#D73A49;">|</span><span style="color:#032F62;">oft)</span><span style="color:#D73A49;">$</span><span style="color:#032F62;">/</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 正则字体文件</span></span>
<span class="line"><span style="color:#24292E;">          type: </span><span style="color:#032F62;">&#39;asset/resource&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">//加载csv、xml数据资源 npm install csv-loader xml-loader -D</span></span>
<span class="line"><span style="color:#24292E;">        {</span></span>
<span class="line"><span style="color:#24292E;">          test:</span><span style="color:#032F62;"> /</span><span style="color:#22863A;font-weight:bold;">\\.</span><span style="color:#032F62;">(csv</span><span style="color:#D73A49;">|</span><span style="color:#032F62;">tsv)</span><span style="color:#D73A49;">$</span><span style="color:#032F62;">/</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          use: </span><span style="color:#032F62;">&#39;csv-loader&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">        {</span></span>
<span class="line"><span style="color:#24292E;">          test:</span><span style="color:#032F62;"> /</span><span style="color:#22863A;font-weight:bold;">\\.</span><span style="color:#032F62;">xml</span><span style="color:#D73A49;">$</span><span style="color:#032F62;">/</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          use: </span><span style="color:#032F62;">&#39;xml-loader&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">//加载toml、yarm、json5数据资源</span></span>
<span class="line"><span style="color:#24292E;">        {</span></span>
<span class="line"><span style="color:#24292E;">          test:</span><span style="color:#032F62;"> /</span><span style="color:#22863A;font-weight:bold;">\\.</span><span style="color:#032F62;">toml</span><span style="color:#D73A49;">$</span><span style="color:#032F62;">/</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          type: </span><span style="color:#032F62;">&#39;json&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          parser: {</span></span>
<span class="line"><span style="color:#24292E;">            parse: toml.parse,</span></span>
<span class="line"><span style="color:#24292E;">          },</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">        {</span></span>
<span class="line"><span style="color:#24292E;">          test:</span><span style="color:#032F62;"> /</span><span style="color:#22863A;font-weight:bold;">\\.</span><span style="color:#032F62;">yarm</span><span style="color:#D73A49;">$</span><span style="color:#032F62;">/</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          type: </span><span style="color:#032F62;">&#39;json&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          parser: {</span></span>
<span class="line"><span style="color:#24292E;">            parse: yarm.parse,</span></span>
<span class="line"><span style="color:#24292E;">          },</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">        {</span></span>
<span class="line"><span style="color:#24292E;">          test:</span><span style="color:#032F62;"> /</span><span style="color:#22863A;font-weight:bold;">\\.</span><span style="color:#032F62;">json5</span><span style="color:#D73A49;">$</span><span style="color:#032F62;">/</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          type: </span><span style="color:#032F62;">&#39;json&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          parser: {</span></span>
<span class="line"><span style="color:#24292E;">            parse: json5.parse,</span></span>
<span class="line"><span style="color:#24292E;">          },</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// loader工具 支持数组方式链式调用，数组靠后的元素先执行</span></span>
<span class="line"><span style="color:#24292E;">        {</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#6A737D;">// 压缩图片</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#6A737D;">//图片小于一定大小使用base64 否则使用file-loader产生真实图片 npm install url-loader --save-dev</span></span>
<span class="line"><span style="color:#24292E;">          test:</span><span style="color:#032F62;"> /</span><span style="color:#22863A;font-weight:bold;">\\.</span><span style="color:#032F62;">(png</span><span style="color:#D73A49;">|</span><span style="color:#032F62;">gif</span><span style="color:#D73A49;">|</span><span style="color:#032F62;">jp</span><span style="color:#D73A49;">?</span><span style="color:#032F62;">g</span><span style="color:#D73A49;">|</span><span style="color:#032F62;">svg</span><span style="color:#D73A49;">|</span><span style="color:#032F62;">webp</span><span style="color:#D73A49;">|</span><span style="color:#032F62;">ico)</span><span style="color:#D73A49;">$</span><span style="color:#032F62;">/</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 正则</span></span>
<span class="line"><span style="color:#24292E;">          use: [</span></span>
<span class="line"><span style="color:#24292E;">            {</span></span>
<span class="line"><span style="color:#24292E;">              loader: </span><span style="color:#032F62;">&#39;url-loader&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">              options: {</span></span>
<span class="line"><span style="color:#24292E;">                limit: </span><span style="color:#005CC5;">5000</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">//小于限定使用base64</span></span>
<span class="line"><span style="color:#24292E;">                name: </span><span style="color:#032F62;">&#39;home/images/[name].[hash:8].[ext]&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                publicPath: </span><span style="color:#032F62;">\`../../\`</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                esModule: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">              },</span></span>
<span class="line"><span style="color:#24292E;">            },</span></span>
<span class="line"><span style="color:#24292E;">          ],</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 使用babel-loader npm install -D babel-loader @babel/core @babel/preset-env</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// regeneratorRuntime是webpack打包生成的全局辅助函数，由babel生成，用于兼容 async/await 的语法</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// npm install --save @babel/runtime</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// npm install --save-dev @babel/plugin-transform-runtime</span></span>
<span class="line"><span style="color:#24292E;">        {</span></span>
<span class="line"><span style="color:#24292E;">          test:</span><span style="color:#032F62;"> /</span><span style="color:#22863A;font-weight:bold;">\\.</span><span style="color:#032F62;">js</span><span style="color:#D73A49;">$</span><span style="color:#032F62;">/</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          exclude:</span><span style="color:#032F62;"> /node_modules/</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// *业务代码里面可能会引入node_modules外部js，这些js不需要babel-loader编译，因此需要排除掉</span></span>
<span class="line"><span style="color:#24292E;">          use: {</span></span>
<span class="line"><span style="color:#24292E;">            loader: </span><span style="color:#032F62;">&#39;babel-loader&#39;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// *引入babel-loader</span></span>
<span class="line"><span style="color:#24292E;">            options: {</span></span>
<span class="line"><span style="color:#24292E;">              presets: [</span><span style="color:#032F62;">&#39;@babel/preset-env&#39;</span><span style="color:#24292E;">], </span><span style="color:#6A737D;">// *引入预设</span></span>
<span class="line"><span style="color:#24292E;">              plugins: [</span></span>
<span class="line"><span style="color:#24292E;">                [</span></span>
<span class="line"><span style="color:#24292E;">                  </span><span style="color:#032F62;">&#39;@babel/plugin-transform-runtime&#39;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// *配置插件信息</span></span>
<span class="line"><span style="color:#24292E;">                ],</span></span>
<span class="line"><span style="color:#24292E;">              ],</span></span>
<span class="line"><span style="color:#24292E;">            },</span></span>
<span class="line"><span style="color:#24292E;">          },</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">      ],</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    optimization: {</span></span>
<span class="line"><span style="color:#24292E;">      minimizer: [</span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">CssMinimizerPlugin</span><span style="color:#24292E;">(), </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">TerserPlugin</span><span style="color:#24292E;">()], </span><span style="color:#6A737D;">//代码压缩 mode改为 production</span></span>
<span class="line"><span style="color:#24292E;">      splitChunks: {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 缓存</span></span>
<span class="line"><span style="color:#24292E;">        cacheGroups: {</span></span>
<span class="line"><span style="color:#24292E;">          vendor: {</span></span>
<span class="line"><span style="color:#24292E;">            test:</span><span style="color:#032F62;"> /</span><span style="color:#005CC5;">[</span><span style="color:#22863A;font-weight:bold;">\\\\</span><span style="color:#005CC5;">/]</span><span style="color:#032F62;">node_modules</span><span style="color:#005CC5;">[</span><span style="color:#22863A;font-weight:bold;">\\\\</span><span style="color:#005CC5;">/]</span><span style="color:#032F62;">/</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            name: </span><span style="color:#032F62;">&#39;vendors&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            chunks: </span><span style="color:#032F62;">&#39;all&#39;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 自动重复代码抽离</span></span>
<span class="line"><span style="color:#24292E;">          },</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br><span class="line-number">139</span><br><span class="line-number">140</span><br><span class="line-number">141</span><br><span class="line-number">142</span><br><span class="line-number">143</span><br><span class="line-number">144</span><br><span class="line-number">145</span><br><span class="line-number">146</span><br><span class="line-number">147</span><br><span class="line-number">148</span><br><span class="line-number">149</span><br><span class="line-number">150</span><br><span class="line-number">151</span><br><span class="line-number">152</span><br><span class="line-number">153</span><br><span class="line-number">154</span><br><span class="line-number">155</span><br><span class="line-number">156</span><br><span class="line-number">157</span><br><span class="line-number">158</span><br><span class="line-number">159</span><br><span class="line-number">160</span><br><span class="line-number">161</span><br><span class="line-number">162</span><br><span class="line-number">163</span><br><span class="line-number">164</span><br><span class="line-number">165</span><br><span class="line-number">166</span><br><span class="line-number">167</span><br><span class="line-number">168</span><br><span class="line-number">169</span><br><span class="line-number">170</span><br><span class="line-number">171</span><br><span class="line-number">172</span><br><span class="line-number">173</span><br><span class="line-number">174</span><br><span class="line-number">175</span><br></div></div><h3 id="webpack-配置拆分" tabindex="-1">webpack 配置拆分 <a class="header-anchor" href="#webpack-配置拆分" aria-label="Permalink to &quot;webpack 配置拆分&quot;">​</a></h3><h5 id="webpack-config-common-js-文件公共环境配置" tabindex="-1">webpack.config.common.js 文件公共环境配置 <a class="header-anchor" href="#webpack-config-common-js-文件公共环境配置" aria-label="Permalink to &quot;webpack.config.common.js 文件公共环境配置&quot;">​</a></h5><div class="language-javascript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">path</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;path&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">HtmlWebpackPlugin</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;html-webpack-plugin&#39;</span><span style="color:#E1E4E8;">) </span><span style="color:#6A737D;">// 自动引入资源插件  npm install --save-dev html-webpack-plugin</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">MiniCssExtracPlugin</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;mini-css-extrac-plugin&#39;</span><span style="color:#E1E4E8;">) </span><span style="color:#6A737D;">// css抽离</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">CssMinimizerPlugin</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;css-minimizer-webpack-plugin&#39;</span><span style="color:#E1E4E8;">) </span><span style="color:#6A737D;">//css压缩 npm install css-minimizer-webpack-plugin  --save-dev</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">TerserPlugin</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;terser-webpack-plugin&#39;</span><span style="color:#E1E4E8;">) </span><span style="color:#6A737D;">// js压缩  npm install --save-dev terser-webpack-plugin</span></span>
<span class="line"><span style="color:#6A737D;">//加载toml、yarm、json5数据资源 npm install toml yarm json5 -D</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">toml</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;toml&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">yarm</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;yarm&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">json5</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;json5&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">module</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">exports</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  entry: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    index: </span><span style="color:#9ECBFF;">&#39;./src/index.js&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  output: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    path: path.</span><span style="color:#B392F0;">resolve</span><span style="color:#E1E4E8;">(__dirname, </span><span style="color:#9ECBFF;">&#39;./dist&#39;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">    clean: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 清除上一次的垃圾文件</span></span>
<span class="line"><span style="color:#E1E4E8;">    assetModuleFilename: </span><span style="color:#9ECBFF;">&#39;images/[contenthash][ext]&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 在images目录下，根据文件内容自动生成hash文件名</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 插件（非必要的，缺少也不影响项目打包）</span></span>
<span class="line"><span style="color:#E1E4E8;">  plugins: [</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">HtmlWebpackPlugin</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">      template: </span><span style="color:#9ECBFF;">&#39;./index.html&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 模板</span></span>
<span class="line"><span style="color:#E1E4E8;">      filename: </span><span style="color:#9ECBFF;">&#39;app.html&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      inject: </span><span style="color:#9ECBFF;">&#39;body&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// script 存在的位置</span></span>
<span class="line"><span style="color:#E1E4E8;">      hash: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 解决缓存</span></span>
<span class="line"><span style="color:#E1E4E8;">      minify: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        removeAttributeQuotes: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 压缩，去掉引号</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">    }),</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">MiniCssExtracPlugin</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">      filename: </span><span style="color:#9ECBFF;">&#39;style/[contenthash].css&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    }),</span></span>
<span class="line"><span style="color:#E1E4E8;">  ],</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 模块（必要的，缺少影响项目打包）</span></span>
<span class="line"><span style="color:#E1E4E8;">  module: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    rules: [</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">//资源模块类型我们称之为Asset Modules Type，总共有四种，来代替loader，分别是：</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// asset/resource：发送一个单独的文件并导出URL，替代file-loader</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// asset/inline：导出一个资源的data URI(base64)，替代url-loader</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// asset/source：导出资源的源代码，之前通过使用raw-loader实现</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// asset：介于asset/resource和asset/inline之间， 之前通过url-loader+limit属性实现。</span></span>
<span class="line"><span style="color:#E1E4E8;">      {</span></span>
<span class="line"><span style="color:#E1E4E8;">        test:</span><span style="color:#DBEDFF;"> </span><span style="color:#9ECBFF;">/</span><span style="color:#85E89D;font-weight:bold;">\\.</span><span style="color:#DBEDFF;">(png</span><span style="color:#F97583;">|</span><span style="color:#DBEDFF;">gif</span><span style="color:#F97583;">|</span><span style="color:#DBEDFF;">jp</span><span style="color:#F97583;">?</span><span style="color:#DBEDFF;">g</span><span style="color:#F97583;">|</span><span style="color:#DBEDFF;">svg</span><span style="color:#F97583;">|</span><span style="color:#DBEDFF;">webp</span><span style="color:#F97583;">|</span><span style="color:#DBEDFF;">ico)</span><span style="color:#F97583;">$</span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 正则图片文件</span></span>
<span class="line"><span style="color:#E1E4E8;">        type: </span><span style="color:#9ECBFF;">&#39;asset&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        generator: {</span></span>
<span class="line"><span style="color:#E1E4E8;">          filename: </span><span style="color:#9ECBFF;">&#39;images/[contenthash][ext]&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 优先级高于 assetModuleFilename</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">      {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 支持less</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// npm install style-loader css-loader less-loader less --save-dev</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 抽离 npm install mini-css-extrac-plugin  --save-dev   webpack5环境下构建的插件</span></span>
<span class="line"><span style="color:#E1E4E8;">        test:</span><span style="color:#DBEDFF;"> </span><span style="color:#9ECBFF;">/</span><span style="color:#85E89D;font-weight:bold;">\\.</span><span style="color:#DBEDFF;">(le</span><span style="color:#F97583;">|</span><span style="color:#DBEDFF;">c)ss</span><span style="color:#F97583;">$</span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// .less and .css</span></span>
<span class="line"><span style="color:#E1E4E8;">        use: [MiniCssExtracPlugin.loader, </span><span style="color:#6A737D;">/* &quot;style-loader&quot;, */</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;css-loader&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;less-loader&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">      {</span></span>
<span class="line"><span style="color:#E1E4E8;">        test:</span><span style="color:#DBEDFF;"> </span><span style="color:#9ECBFF;">/</span><span style="color:#85E89D;font-weight:bold;">\\.</span><span style="color:#DBEDFF;">(woff</span><span style="color:#F97583;">|</span><span style="color:#DBEDFF;">woff2</span><span style="color:#F97583;">|</span><span style="color:#DBEDFF;">eot</span><span style="color:#F97583;">|</span><span style="color:#DBEDFF;">ttf</span><span style="color:#F97583;">|</span><span style="color:#DBEDFF;">oft)</span><span style="color:#F97583;">$</span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 正则字体文件</span></span>
<span class="line"><span style="color:#E1E4E8;">        type: </span><span style="color:#9ECBFF;">&#39;asset/resource&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">//加载csv、xml数据资源 npm install csv-loader xml-loader -D</span></span>
<span class="line"><span style="color:#E1E4E8;">      {</span></span>
<span class="line"><span style="color:#E1E4E8;">        test:</span><span style="color:#DBEDFF;"> </span><span style="color:#9ECBFF;">/</span><span style="color:#85E89D;font-weight:bold;">\\.</span><span style="color:#DBEDFF;">(csv</span><span style="color:#F97583;">|</span><span style="color:#DBEDFF;">tsv)</span><span style="color:#F97583;">$</span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        use: </span><span style="color:#9ECBFF;">&#39;csv-loader&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">      {</span></span>
<span class="line"><span style="color:#E1E4E8;">        test:</span><span style="color:#DBEDFF;"> </span><span style="color:#9ECBFF;">/</span><span style="color:#85E89D;font-weight:bold;">\\.</span><span style="color:#DBEDFF;">xml</span><span style="color:#F97583;">$</span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        use: </span><span style="color:#9ECBFF;">&#39;xml-loader&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">//加载toml、yarm、json5数据资源</span></span>
<span class="line"><span style="color:#E1E4E8;">      {</span></span>
<span class="line"><span style="color:#E1E4E8;">        test:</span><span style="color:#DBEDFF;"> </span><span style="color:#9ECBFF;">/</span><span style="color:#85E89D;font-weight:bold;">\\.</span><span style="color:#DBEDFF;">toml</span><span style="color:#F97583;">$</span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        type: </span><span style="color:#9ECBFF;">&#39;json&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        parser: {</span></span>
<span class="line"><span style="color:#E1E4E8;">          parse: toml.parse,</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">      {</span></span>
<span class="line"><span style="color:#E1E4E8;">        test:</span><span style="color:#DBEDFF;"> </span><span style="color:#9ECBFF;">/</span><span style="color:#85E89D;font-weight:bold;">\\.</span><span style="color:#DBEDFF;">yarm</span><span style="color:#F97583;">$</span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        type: </span><span style="color:#9ECBFF;">&#39;json&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        parser: {</span></span>
<span class="line"><span style="color:#E1E4E8;">          parse: yarm.parse,</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">      {</span></span>
<span class="line"><span style="color:#E1E4E8;">        test:</span><span style="color:#DBEDFF;"> </span><span style="color:#9ECBFF;">/</span><span style="color:#85E89D;font-weight:bold;">\\.</span><span style="color:#DBEDFF;">json5</span><span style="color:#F97583;">$</span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        type: </span><span style="color:#9ECBFF;">&#39;json&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        parser: {</span></span>
<span class="line"><span style="color:#E1E4E8;">          parse: json5.parse,</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// loader工具 支持数组方式链式调用，数组靠后的元素先执行</span></span>
<span class="line"><span style="color:#E1E4E8;">      {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 压缩图片</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">//图片小于一定大小使用base64 否则使用file-loader产生真实图片 npm install url-loader --save-dev</span></span>
<span class="line"><span style="color:#E1E4E8;">        test:</span><span style="color:#DBEDFF;"> </span><span style="color:#9ECBFF;">/</span><span style="color:#85E89D;font-weight:bold;">\\.</span><span style="color:#DBEDFF;">(png</span><span style="color:#F97583;">|</span><span style="color:#DBEDFF;">gif</span><span style="color:#F97583;">|</span><span style="color:#DBEDFF;">jp</span><span style="color:#F97583;">?</span><span style="color:#DBEDFF;">g</span><span style="color:#F97583;">|</span><span style="color:#DBEDFF;">svg</span><span style="color:#F97583;">|</span><span style="color:#DBEDFF;">webp</span><span style="color:#F97583;">|</span><span style="color:#DBEDFF;">ico)</span><span style="color:#F97583;">$</span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 正则</span></span>
<span class="line"><span style="color:#E1E4E8;">        use: [</span></span>
<span class="line"><span style="color:#E1E4E8;">          {</span></span>
<span class="line"><span style="color:#E1E4E8;">            loader: </span><span style="color:#9ECBFF;">&#39;url-loader&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            options: {</span></span>
<span class="line"><span style="color:#E1E4E8;">              limit: </span><span style="color:#79B8FF;">5000</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">//小于限定使用base64</span></span>
<span class="line"><span style="color:#E1E4E8;">              name: </span><span style="color:#9ECBFF;">&#39;home/images/[name].[hash:8].[ext]&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">              publicPath: </span><span style="color:#9ECBFF;">\`../../\`</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">              esModule: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            },</span></span>
<span class="line"><span style="color:#E1E4E8;">          },</span></span>
<span class="line"><span style="color:#E1E4E8;">        ],</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// 使用babel-loader npm install -D babel-loader @babel/core @babel/preset-env</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// regeneratorRuntime是webpack打包生成的全局辅助函数，由babel生成，用于兼容 async/await 的语法</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// npm install --save @babel/runtime</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// npm install --save-dev @babel/plugin-transform-runtime</span></span>
<span class="line"><span style="color:#E1E4E8;">      {</span></span>
<span class="line"><span style="color:#E1E4E8;">        test:</span><span style="color:#DBEDFF;"> </span><span style="color:#9ECBFF;">/</span><span style="color:#85E89D;font-weight:bold;">\\.</span><span style="color:#DBEDFF;">js</span><span style="color:#F97583;">$</span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        exclude:</span><span style="color:#DBEDFF;"> </span><span style="color:#9ECBFF;">/</span><span style="color:#DBEDFF;">node_modules</span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// *业务代码里面可能会引入node_modules外部js，这些js不需要babel-loader编译，因此需要排除掉</span></span>
<span class="line"><span style="color:#E1E4E8;">        use: {</span></span>
<span class="line"><span style="color:#E1E4E8;">          loader: </span><span style="color:#9ECBFF;">&#39;babel-loader&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// *引入babel-loader</span></span>
<span class="line"><span style="color:#E1E4E8;">          options: {</span></span>
<span class="line"><span style="color:#E1E4E8;">            presets: [</span><span style="color:#9ECBFF;">&#39;@babel/preset-env&#39;</span><span style="color:#E1E4E8;">], </span><span style="color:#6A737D;">// *引入预设</span></span>
<span class="line"><span style="color:#E1E4E8;">            plugins: [</span></span>
<span class="line"><span style="color:#E1E4E8;">              [</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#9ECBFF;">&#39;@babel/plugin-transform-runtime&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// *配置插件信息</span></span>
<span class="line"><span style="color:#E1E4E8;">              ],</span></span>
<span class="line"><span style="color:#E1E4E8;">            ],</span></span>
<span class="line"><span style="color:#E1E4E8;">          },</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">    ],</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  optimization: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    splitChunks: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// 缓存</span></span>
<span class="line"><span style="color:#E1E4E8;">      cacheGroups: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        vendor: {</span></span>
<span class="line"><span style="color:#E1E4E8;">          test:</span><span style="color:#DBEDFF;"> </span><span style="color:#9ECBFF;">/</span><span style="color:#79B8FF;">[</span><span style="color:#85E89D;font-weight:bold;">\\\\</span><span style="color:#79B8FF;">/]</span><span style="color:#DBEDFF;">node_modules</span><span style="color:#79B8FF;">[</span><span style="color:#85E89D;font-weight:bold;">\\\\</span><span style="color:#79B8FF;">/]</span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          name: </span><span style="color:#9ECBFF;">&#39;vendors&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          chunks: </span><span style="color:#9ECBFF;">&#39;all&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 自动重复代码抽离</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">path</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">require</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;path&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">HtmlWebpackPlugin</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">require</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;html-webpack-plugin&#39;</span><span style="color:#24292E;">) </span><span style="color:#6A737D;">// 自动引入资源插件  npm install --save-dev html-webpack-plugin</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">MiniCssExtracPlugin</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">require</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;mini-css-extrac-plugin&#39;</span><span style="color:#24292E;">) </span><span style="color:#6A737D;">// css抽离</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">CssMinimizerPlugin</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">require</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;css-minimizer-webpack-plugin&#39;</span><span style="color:#24292E;">) </span><span style="color:#6A737D;">//css压缩 npm install css-minimizer-webpack-plugin  --save-dev</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">TerserPlugin</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">require</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;terser-webpack-plugin&#39;</span><span style="color:#24292E;">) </span><span style="color:#6A737D;">// js压缩  npm install --save-dev terser-webpack-plugin</span></span>
<span class="line"><span style="color:#6A737D;">//加载toml、yarm、json5数据资源 npm install toml yarm json5 -D</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">toml</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">require</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;toml&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">yarm</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">require</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;yarm&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">json5</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">require</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;json5&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">module</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">exports</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  entry: {</span></span>
<span class="line"><span style="color:#24292E;">    index: </span><span style="color:#032F62;">&#39;./src/index.js&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  output: {</span></span>
<span class="line"><span style="color:#24292E;">    path: path.</span><span style="color:#6F42C1;">resolve</span><span style="color:#24292E;">(__dirname, </span><span style="color:#032F62;">&#39;./dist&#39;</span><span style="color:#24292E;">),</span></span>
<span class="line"><span style="color:#24292E;">    clean: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 清除上一次的垃圾文件</span></span>
<span class="line"><span style="color:#24292E;">    assetModuleFilename: </span><span style="color:#032F62;">&#39;images/[contenthash][ext]&#39;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 在images目录下，根据文件内容自动生成hash文件名</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 插件（非必要的，缺少也不影响项目打包）</span></span>
<span class="line"><span style="color:#24292E;">  plugins: [</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">HtmlWebpackPlugin</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">      template: </span><span style="color:#032F62;">&#39;./index.html&#39;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 模板</span></span>
<span class="line"><span style="color:#24292E;">      filename: </span><span style="color:#032F62;">&#39;app.html&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      inject: </span><span style="color:#032F62;">&#39;body&#39;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// script 存在的位置</span></span>
<span class="line"><span style="color:#24292E;">      hash: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 解决缓存</span></span>
<span class="line"><span style="color:#24292E;">      minify: {</span></span>
<span class="line"><span style="color:#24292E;">        removeAttributeQuotes: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 压缩，去掉引号</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">    }),</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">MiniCssExtracPlugin</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">      filename: </span><span style="color:#032F62;">&#39;style/[contenthash].css&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    }),</span></span>
<span class="line"><span style="color:#24292E;">  ],</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 模块（必要的，缺少影响项目打包）</span></span>
<span class="line"><span style="color:#24292E;">  module: {</span></span>
<span class="line"><span style="color:#24292E;">    rules: [</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">//资源模块类型我们称之为Asset Modules Type，总共有四种，来代替loader，分别是：</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// asset/resource：发送一个单独的文件并导出URL，替代file-loader</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// asset/inline：导出一个资源的data URI(base64)，替代url-loader</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// asset/source：导出资源的源代码，之前通过使用raw-loader实现</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// asset：介于asset/resource和asset/inline之间， 之前通过url-loader+limit属性实现。</span></span>
<span class="line"><span style="color:#24292E;">      {</span></span>
<span class="line"><span style="color:#24292E;">        test:</span><span style="color:#032F62;"> /</span><span style="color:#22863A;font-weight:bold;">\\.</span><span style="color:#032F62;">(png</span><span style="color:#D73A49;">|</span><span style="color:#032F62;">gif</span><span style="color:#D73A49;">|</span><span style="color:#032F62;">jp</span><span style="color:#D73A49;">?</span><span style="color:#032F62;">g</span><span style="color:#D73A49;">|</span><span style="color:#032F62;">svg</span><span style="color:#D73A49;">|</span><span style="color:#032F62;">webp</span><span style="color:#D73A49;">|</span><span style="color:#032F62;">ico)</span><span style="color:#D73A49;">$</span><span style="color:#032F62;">/</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 正则图片文件</span></span>
<span class="line"><span style="color:#24292E;">        type: </span><span style="color:#032F62;">&#39;asset&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        generator: {</span></span>
<span class="line"><span style="color:#24292E;">          filename: </span><span style="color:#032F62;">&#39;images/[contenthash][ext]&#39;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 优先级高于 assetModuleFilename</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">      {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 支持less</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// npm install style-loader css-loader less-loader less --save-dev</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 抽离 npm install mini-css-extrac-plugin  --save-dev   webpack5环境下构建的插件</span></span>
<span class="line"><span style="color:#24292E;">        test:</span><span style="color:#032F62;"> /</span><span style="color:#22863A;font-weight:bold;">\\.</span><span style="color:#032F62;">(le</span><span style="color:#D73A49;">|</span><span style="color:#032F62;">c)ss</span><span style="color:#D73A49;">$</span><span style="color:#032F62;">/</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// .less and .css</span></span>
<span class="line"><span style="color:#24292E;">        use: [MiniCssExtracPlugin.loader, </span><span style="color:#6A737D;">/* &quot;style-loader&quot;, */</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;css-loader&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;less-loader&#39;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">      {</span></span>
<span class="line"><span style="color:#24292E;">        test:</span><span style="color:#032F62;"> /</span><span style="color:#22863A;font-weight:bold;">\\.</span><span style="color:#032F62;">(woff</span><span style="color:#D73A49;">|</span><span style="color:#032F62;">woff2</span><span style="color:#D73A49;">|</span><span style="color:#032F62;">eot</span><span style="color:#D73A49;">|</span><span style="color:#032F62;">ttf</span><span style="color:#D73A49;">|</span><span style="color:#032F62;">oft)</span><span style="color:#D73A49;">$</span><span style="color:#032F62;">/</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 正则字体文件</span></span>
<span class="line"><span style="color:#24292E;">        type: </span><span style="color:#032F62;">&#39;asset/resource&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">//加载csv、xml数据资源 npm install csv-loader xml-loader -D</span></span>
<span class="line"><span style="color:#24292E;">      {</span></span>
<span class="line"><span style="color:#24292E;">        test:</span><span style="color:#032F62;"> /</span><span style="color:#22863A;font-weight:bold;">\\.</span><span style="color:#032F62;">(csv</span><span style="color:#D73A49;">|</span><span style="color:#032F62;">tsv)</span><span style="color:#D73A49;">$</span><span style="color:#032F62;">/</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        use: </span><span style="color:#032F62;">&#39;csv-loader&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">      {</span></span>
<span class="line"><span style="color:#24292E;">        test:</span><span style="color:#032F62;"> /</span><span style="color:#22863A;font-weight:bold;">\\.</span><span style="color:#032F62;">xml</span><span style="color:#D73A49;">$</span><span style="color:#032F62;">/</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        use: </span><span style="color:#032F62;">&#39;xml-loader&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">//加载toml、yarm、json5数据资源</span></span>
<span class="line"><span style="color:#24292E;">      {</span></span>
<span class="line"><span style="color:#24292E;">        test:</span><span style="color:#032F62;"> /</span><span style="color:#22863A;font-weight:bold;">\\.</span><span style="color:#032F62;">toml</span><span style="color:#D73A49;">$</span><span style="color:#032F62;">/</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        type: </span><span style="color:#032F62;">&#39;json&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        parser: {</span></span>
<span class="line"><span style="color:#24292E;">          parse: toml.parse,</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">      {</span></span>
<span class="line"><span style="color:#24292E;">        test:</span><span style="color:#032F62;"> /</span><span style="color:#22863A;font-weight:bold;">\\.</span><span style="color:#032F62;">yarm</span><span style="color:#D73A49;">$</span><span style="color:#032F62;">/</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        type: </span><span style="color:#032F62;">&#39;json&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        parser: {</span></span>
<span class="line"><span style="color:#24292E;">          parse: yarm.parse,</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">      {</span></span>
<span class="line"><span style="color:#24292E;">        test:</span><span style="color:#032F62;"> /</span><span style="color:#22863A;font-weight:bold;">\\.</span><span style="color:#032F62;">json5</span><span style="color:#D73A49;">$</span><span style="color:#032F62;">/</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        type: </span><span style="color:#032F62;">&#39;json&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        parser: {</span></span>
<span class="line"><span style="color:#24292E;">          parse: json5.parse,</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// loader工具 支持数组方式链式调用，数组靠后的元素先执行</span></span>
<span class="line"><span style="color:#24292E;">      {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 压缩图片</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">//图片小于一定大小使用base64 否则使用file-loader产生真实图片 npm install url-loader --save-dev</span></span>
<span class="line"><span style="color:#24292E;">        test:</span><span style="color:#032F62;"> /</span><span style="color:#22863A;font-weight:bold;">\\.</span><span style="color:#032F62;">(png</span><span style="color:#D73A49;">|</span><span style="color:#032F62;">gif</span><span style="color:#D73A49;">|</span><span style="color:#032F62;">jp</span><span style="color:#D73A49;">?</span><span style="color:#032F62;">g</span><span style="color:#D73A49;">|</span><span style="color:#032F62;">svg</span><span style="color:#D73A49;">|</span><span style="color:#032F62;">webp</span><span style="color:#D73A49;">|</span><span style="color:#032F62;">ico)</span><span style="color:#D73A49;">$</span><span style="color:#032F62;">/</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 正则</span></span>
<span class="line"><span style="color:#24292E;">        use: [</span></span>
<span class="line"><span style="color:#24292E;">          {</span></span>
<span class="line"><span style="color:#24292E;">            loader: </span><span style="color:#032F62;">&#39;url-loader&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            options: {</span></span>
<span class="line"><span style="color:#24292E;">              limit: </span><span style="color:#005CC5;">5000</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">//小于限定使用base64</span></span>
<span class="line"><span style="color:#24292E;">              name: </span><span style="color:#032F62;">&#39;home/images/[name].[hash:8].[ext]&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">              publicPath: </span><span style="color:#032F62;">\`../../\`</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">              esModule: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            },</span></span>
<span class="line"><span style="color:#24292E;">          },</span></span>
<span class="line"><span style="color:#24292E;">        ],</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// 使用babel-loader npm install -D babel-loader @babel/core @babel/preset-env</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// regeneratorRuntime是webpack打包生成的全局辅助函数，由babel生成，用于兼容 async/await 的语法</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// npm install --save @babel/runtime</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// npm install --save-dev @babel/plugin-transform-runtime</span></span>
<span class="line"><span style="color:#24292E;">      {</span></span>
<span class="line"><span style="color:#24292E;">        test:</span><span style="color:#032F62;"> /</span><span style="color:#22863A;font-weight:bold;">\\.</span><span style="color:#032F62;">js</span><span style="color:#D73A49;">$</span><span style="color:#032F62;">/</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        exclude:</span><span style="color:#032F62;"> /node_modules/</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// *业务代码里面可能会引入node_modules外部js，这些js不需要babel-loader编译，因此需要排除掉</span></span>
<span class="line"><span style="color:#24292E;">        use: {</span></span>
<span class="line"><span style="color:#24292E;">          loader: </span><span style="color:#032F62;">&#39;babel-loader&#39;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// *引入babel-loader</span></span>
<span class="line"><span style="color:#24292E;">          options: {</span></span>
<span class="line"><span style="color:#24292E;">            presets: [</span><span style="color:#032F62;">&#39;@babel/preset-env&#39;</span><span style="color:#24292E;">], </span><span style="color:#6A737D;">// *引入预设</span></span>
<span class="line"><span style="color:#24292E;">            plugins: [</span></span>
<span class="line"><span style="color:#24292E;">              [</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#032F62;">&#39;@babel/plugin-transform-runtime&#39;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// *配置插件信息</span></span>
<span class="line"><span style="color:#24292E;">              ],</span></span>
<span class="line"><span style="color:#24292E;">            ],</span></span>
<span class="line"><span style="color:#24292E;">          },</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">    ],</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  optimization: {</span></span>
<span class="line"><span style="color:#24292E;">    splitChunks: {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// 缓存</span></span>
<span class="line"><span style="color:#24292E;">      cacheGroups: {</span></span>
<span class="line"><span style="color:#24292E;">        vendor: {</span></span>
<span class="line"><span style="color:#24292E;">          test:</span><span style="color:#032F62;"> /</span><span style="color:#005CC5;">[</span><span style="color:#22863A;font-weight:bold;">\\\\</span><span style="color:#005CC5;">/]</span><span style="color:#032F62;">node_modules</span><span style="color:#005CC5;">[</span><span style="color:#22863A;font-weight:bold;">\\\\</span><span style="color:#005CC5;">/]</span><span style="color:#032F62;">/</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          name: </span><span style="color:#032F62;">&#39;vendors&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          chunks: </span><span style="color:#032F62;">&#39;all&#39;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 自动重复代码抽离</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br><span class="line-number">139</span><br><span class="line-number">140</span><br><span class="line-number">141</span><br><span class="line-number">142</span><br></div></div><h5 id="webpack-config-dev-js-文件开发环境配置-npx-webpack-c-webpack-config-dev-js" tabindex="-1">webpack.config.dev.js 文件开发环境配置 npx webpack -c ./webpack.config.dev.js <a class="header-anchor" href="#webpack-config-dev-js-文件开发环境配置-npx-webpack-c-webpack-config-dev-js" aria-label="Permalink to &quot;webpack.config.dev.js 文件开发环境配置 npx webpack -c ./webpack.config.dev.js&quot;">​</a></h5><div class="language-javascript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">module</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">exports</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  output: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    filename: </span><span style="color:#9ECBFF;">&#39;scripts/[name].js&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 将所有的js放入同一个文件夹，并且根据文件名自动命名</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  mode: </span><span style="color:#9ECBFF;">&#39;development&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 生产环境或者开发环境 package.json 启动命令：npx webpack --env prodection</span></span>
<span class="line"><span style="color:#E1E4E8;">  devtool: </span><span style="color:#9ECBFF;">&#39;cheap-module-source-map&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 真实报错文件指向,生产</span></span>
<span class="line"><span style="color:#E1E4E8;">  devServer: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    static: </span><span style="color:#9ECBFF;">&#39;./dist&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 监听根目录文件变化，自动刷新页面插件 npm install --save-dev webpack-dev-server</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//反向代理</span></span>
<span class="line"><span style="color:#E1E4E8;">    proxy: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">&#39;/ajax&#39;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        target: </span><span style="color:#9ECBFF;">&#39;https:**********&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        ws: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        changeOrigin: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">module</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">exports</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  output: {</span></span>
<span class="line"><span style="color:#24292E;">    filename: </span><span style="color:#032F62;">&#39;scripts/[name].js&#39;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 将所有的js放入同一个文件夹，并且根据文件名自动命名</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  mode: </span><span style="color:#032F62;">&#39;development&#39;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 生产环境或者开发环境 package.json 启动命令：npx webpack --env prodection</span></span>
<span class="line"><span style="color:#24292E;">  devtool: </span><span style="color:#032F62;">&#39;cheap-module-source-map&#39;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 真实报错文件指向,生产</span></span>
<span class="line"><span style="color:#24292E;">  devServer: {</span></span>
<span class="line"><span style="color:#24292E;">    static: </span><span style="color:#032F62;">&#39;./dist&#39;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 监听根目录文件变化，自动刷新页面插件 npm install --save-dev webpack-dev-server</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//反向代理</span></span>
<span class="line"><span style="color:#24292E;">    proxy: {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">&#39;/ajax&#39;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">        target: </span><span style="color:#032F62;">&#39;https:**********&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        ws: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        changeOrigin: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><h5 id="webpack-config-prod-js-文件生产环境配置-npx-webpack-c-webpack-config-prod-js" tabindex="-1">webpack.config.prod.js 文件生产环境配置 npx webpack -c ./webpack.config.prod.js <a class="header-anchor" href="#webpack-config-prod-js-文件生产环境配置-npx-webpack-c-webpack-config-prod-js" aria-label="Permalink to &quot;webpack.config.prod.js 文件生产环境配置 npx webpack -c ./webpack.config.prod.js&quot;">​</a></h5><div class="language-javascript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">CssMinimizerPlugin</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;css-minimizer-webpack-plugin&#39;</span><span style="color:#E1E4E8;">) </span><span style="color:#6A737D;">//css压缩 npm install css-minimizer-webpack-plugin  --save-dev</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">TerserPlugin</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;terser-webpack-plugin&#39;</span><span style="color:#E1E4E8;">) </span><span style="color:#6A737D;">// js压缩  npm install --save-dev terser-webpack-plugin</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">module</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">exports</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  output: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    filename: </span><span style="color:#9ECBFF;">&#39;scripts/[name].[contenthash].js&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 将所有的js放入同一个文件夹，并且根据文件名自动命名</span></span>
<span class="line"><span style="color:#E1E4E8;">    publicPath: </span><span style="color:#9ECBFF;">&#39;https://*****.com/&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 公共路径（cdn域名或者本地localhost）</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  mode: </span><span style="color:#9ECBFF;">&#39;prodection&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 生产环境或者开发环境 package.json 启动命令：npx webpack --env prodection</span></span>
<span class="line"><span style="color:#E1E4E8;">  optimization: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    minimizer: [</span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">CssMinimizerPlugin</span><span style="color:#E1E4E8;">(), </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">TerserPlugin</span><span style="color:#E1E4E8;">()], </span><span style="color:#6A737D;">//代码压缩 mode改为 production</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  performance: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    hints: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 关闭性能提示</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">CssMinimizerPlugin</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">require</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;css-minimizer-webpack-plugin&#39;</span><span style="color:#24292E;">) </span><span style="color:#6A737D;">//css压缩 npm install css-minimizer-webpack-plugin  --save-dev</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">TerserPlugin</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">require</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;terser-webpack-plugin&#39;</span><span style="color:#24292E;">) </span><span style="color:#6A737D;">// js压缩  npm install --save-dev terser-webpack-plugin</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">module</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">exports</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  output: {</span></span>
<span class="line"><span style="color:#24292E;">    filename: </span><span style="color:#032F62;">&#39;scripts/[name].[contenthash].js&#39;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 将所有的js放入同一个文件夹，并且根据文件名自动命名</span></span>
<span class="line"><span style="color:#24292E;">    publicPath: </span><span style="color:#032F62;">&#39;https://*****.com/&#39;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 公共路径（cdn域名或者本地localhost）</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  mode: </span><span style="color:#032F62;">&#39;prodection&#39;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 生产环境或者开发环境 package.json 启动命令：npx webpack --env prodection</span></span>
<span class="line"><span style="color:#24292E;">  optimization: {</span></span>
<span class="line"><span style="color:#24292E;">    minimizer: [</span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">CssMinimizerPlugin</span><span style="color:#24292E;">(), </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">TerserPlugin</span><span style="color:#24292E;">()], </span><span style="color:#6A737D;">//代码压缩 mode改为 production</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  performance: {</span></span>
<span class="line"><span style="color:#24292E;">    hints: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 关闭性能提示</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h5 id="webpack-config-js-运行-webpack-c-webpack-config-js-env-development" tabindex="-1">webpack.config.js 运行：webpack -c ./webpack.config.js --env development <a class="header-anchor" href="#webpack-config-js-运行-webpack-c-webpack-config-js-env-development" aria-label="Permalink to &quot;webpack.config.js 运行：webpack -c ./webpack.config.js --env development&quot;">​</a></h5><div class="language-javascript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">merge</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;webpack-merge&#39;</span><span style="color:#E1E4E8;">) </span><span style="color:#6A737D;">// npm install webpack-merge -D</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">commonConfig</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;./webpack.config.common&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">productionConfig</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;./webpack.config.prod&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">developmentConfig</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;./webpack.config.dev&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">module</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">exports</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">env</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">switch</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">case</span><span style="color:#E1E4E8;"> env.development:</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">merge</span><span style="color:#E1E4E8;">(commonConfig, developmentConfig)</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">case</span><span style="color:#E1E4E8;"> env.production:</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">merge</span><span style="color:#E1E4E8;">(commonConfig, productionConfig)</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">defult</span><span style="color:#E1E4E8;">: </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Error</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> { </span><span style="color:#005CC5;">merge</span><span style="color:#24292E;"> } </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">require</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;webpack-merge&#39;</span><span style="color:#24292E;">) </span><span style="color:#6A737D;">// npm install webpack-merge -D</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">commonConfig</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">require</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;./webpack.config.common&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">productionConfig</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">require</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;./webpack.config.prod&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">developmentConfig</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">require</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;./webpack.config.dev&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">module</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">exports</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">env</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">switch</span><span style="color:#24292E;"> (</span><span style="color:#005CC5;">true</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">case</span><span style="color:#24292E;"> env.development:</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">merge</span><span style="color:#24292E;">(commonConfig, developmentConfig)</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">case</span><span style="color:#24292E;"> env.production:</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">merge</span><span style="color:#24292E;">(commonConfig, productionConfig)</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">defult</span><span style="color:#24292E;">: </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Error</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h3 id="封装-webpack-自定义插件" tabindex="-1">封装 webpack 自定义插件 <a class="header-anchor" href="#封装-webpack-自定义插件" aria-label="Permalink to &quot;封装 webpack 自定义插件&quot;">​</a></h3><div class="language-javascript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">1.</span><span style="color:#E1E4E8;"> 创建一个 JavaScript 文件，并导出一个函数。这个函数将作为你的插件的构造函数。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">2.</span><span style="color:#E1E4E8;"> 在函数中定义一个 apply 方法，该方法接收一个 compiler 参数。这个 compiler 对象是 Webpack 的核心，它包含了 Webpack 的所有配置和工作流程。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">3.</span><span style="color:#E1E4E8;"> 在 apply 方法中，可以通过 compiler.hooks 对象访问 Webpack 的生命周期钩子。通过这些钩子，你可以在 Webpack 运行的不同阶段执行自定义代码。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">4.</span><span style="color:#E1E4E8;"> 实现你的插件逻辑，例如在特定的 Webpack 钩子上注册回调函数，向编译器添加自定义插件等。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">5.</span><span style="color:#E1E4E8;"> 将你的插件打包成一个 npm 模块，并在项目中引入和使用它。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">下面是一个简单的 Webpack 插件示例：</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">MyPlugin</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;">() {};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">MyPlugin</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">prototype</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">apply</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">compiler</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  compiler.hooks.done.</span><span style="color:#B392F0;">tap</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;MyPlugin&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">stats</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;Webpack is done!&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">module</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">exports</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> MyPlugin;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">在这个示例中，我们定义了一个 MyPlugin 插件，它在 Webpack 编译完成后输出一条信息。</span></span>
<span class="line"><span style="color:#E1E4E8;">在 apply 方法中，我们使用 compiler.hooks.done 钩子注册了一个回调函数，在编译完成后输出一条消息。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">要使用这个插件，你需要将它打包成一个 npm 模块，并在 Webpack 配置文件中引入和使用它：</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">MyPlugin</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;my-plugin&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">module</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">exports</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  plugins: [</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">MyPlugin</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">  ]</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">这个示例中，我们在 Webpack 配置文件中引入了 MyPlugin 插件，并将它作为插件数组的一项传递给 plugins 选项。</span></span>
<span class="line"><span style="color:#E1E4E8;">这样，当 Webpack 编译时，MyPlugin 将会被启用并执行它的逻辑。</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">1.</span><span style="color:#24292E;"> 创建一个 JavaScript 文件，并导出一个函数。这个函数将作为你的插件的构造函数。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">2.</span><span style="color:#24292E;"> 在函数中定义一个 apply 方法，该方法接收一个 compiler 参数。这个 compiler 对象是 Webpack 的核心，它包含了 Webpack 的所有配置和工作流程。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">3.</span><span style="color:#24292E;"> 在 apply 方法中，可以通过 compiler.hooks 对象访问 Webpack 的生命周期钩子。通过这些钩子，你可以在 Webpack 运行的不同阶段执行自定义代码。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">4.</span><span style="color:#24292E;"> 实现你的插件逻辑，例如在特定的 Webpack 钩子上注册回调函数，向编译器添加自定义插件等。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">5.</span><span style="color:#24292E;"> 将你的插件打包成一个 npm 模块，并在项目中引入和使用它。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">下面是一个简单的 Webpack 插件示例：</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">MyPlugin</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;">() {};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">MyPlugin</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">prototype</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">apply</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;">(</span><span style="color:#E36209;">compiler</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">  compiler.hooks.done.</span><span style="color:#6F42C1;">tap</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;MyPlugin&#39;</span><span style="color:#24292E;">, </span><span style="color:#E36209;">stats</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;Webpack is done!&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">  });</span></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">module</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">exports</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> MyPlugin;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">在这个示例中，我们定义了一个 MyPlugin 插件，它在 Webpack 编译完成后输出一条信息。</span></span>
<span class="line"><span style="color:#24292E;">在 apply 方法中，我们使用 compiler.hooks.done 钩子注册了一个回调函数，在编译完成后输出一条消息。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">要使用这个插件，你需要将它打包成一个 npm 模块，并在 Webpack 配置文件中引入和使用它：</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">MyPlugin</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">require</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;my-plugin&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">module</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">exports</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  plugins: [</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">MyPlugin</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">  ]</span></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">这个示例中，我们在 Webpack 配置文件中引入了 MyPlugin 插件，并将它作为插件数组的一项传递给 plugins 选项。</span></span>
<span class="line"><span style="color:#24292E;">这样，当 Webpack 编译时，MyPlugin 将会被启用并执行它的逻辑。</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br></div></div>`,41)]))}const u=n(e,[["render",o]]);export{b as __pageData,u as default};

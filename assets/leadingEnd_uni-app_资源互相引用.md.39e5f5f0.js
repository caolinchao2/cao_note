import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.b5309610.js";const b=JSON.parse('{"title":"资源互相引用","description":"","frontmatter":{},"headers":[],"relativePath":"leadingEnd/uni-app/资源互相引用.md","filePath":"leadingEnd/uni-app/资源互相引用.md","lastUpdated":null}'),p={name:"leadingEnd/uni-app/资源互相引用.md"},e=l(`<h1 id="资源互相引用" tabindex="-1">资源互相引用 <a class="header-anchor" href="#资源互相引用" aria-label="Permalink to &quot;资源互相引用&quot;">​</a></h1><h3 id="npm支持" tabindex="-1">NPM支持 <a class="header-anchor" href="#npm支持" aria-label="Permalink to &quot;NPM支持&quot;">​</a></h3><p>在项目根目录执行命令安装npm包：</p><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">packageName</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--save</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span><span style="color:#24292E;"> </span><span style="color:#032F62;">packageName</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--save</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><strong>使用</strong></p><p>安装完即可使用npm包，js中引入npm包：</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> package </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;packageName&#39;</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">package</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;packageName&#39;</span><span style="color:#E1E4E8;">)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> package </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;packageName&#39;</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">package</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">require</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;packageName&#39;</span><span style="color:#24292E;">)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ul><li>为多端兼容考虑，建议优先从 <a href="https://ext.dcloud.net.cn/" target="_blank" rel="noreferrer">uni-app插件市场 (opens new window)</a>获取插件。直接从 npm 下载库很容易只兼容H5端。</li><li>非 H5 端不支持使用含有 <code>dom</code>、<code>window</code> 等操作的 <code>vue</code> 组件和 js 模块，安装的模块及其依赖的模块使用的 API 必须是 uni-app 已有的 <a href="https://uniapp.dcloud.net.cn/api/" target="_blank" rel="noreferrer">API (opens new window)</a>（兼容小程序 API），比如：支持<a href="https://www.npmjs.com/package/amap-wx" target="_blank" rel="noreferrer">高德地图微信小程序 SDK (opens new window)</a>。类似<a href="https://www.npmjs.com/package/jquery" target="_blank" rel="noreferrer">jQuery (opens new window)</a>等库只能用于H5端。</li><li><code>node_modules</code> 目录必须在项目根目录下。不管是cli项目还是<code>HBuilderX</code>创建的项目</li></ul><h3 id="模板内引入静态资源" tabindex="-1">模板内引入静态资源 <a class="header-anchor" href="#模板内引入静态资源" aria-label="Permalink to &quot;模板内引入静态资源&quot;">​</a></h3><blockquote><p><code>template</code>内引入静态资源，如<code>image</code>、<code>video</code>等标签的<code>src</code>属性时，可以使用相对路径或者绝对路径，形式如下</p></blockquote><div class="language-html vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">&lt;!-- 绝对路径，/static指根目录下的static目录，在cli项目中/static指src目录下的static目录 --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#FDAEB7;font-style:italic;">image</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;logo&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">src</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;/static/logo.png&quot;</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#FDAEB7;font-style:italic;">image</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#FDAEB7;font-style:italic;">image</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;logo&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">src</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;@/static/logo.png&quot;</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#FDAEB7;font-style:italic;">image</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- 相对路径 --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#FDAEB7;font-style:italic;">image</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;logo&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">src</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;../../static/logo.png&quot;</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#FDAEB7;font-style:italic;">image</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">&lt;!-- 绝对路径，/static指根目录下的static目录，在cli项目中/static指src目录下的static目录 --&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#B31D28;font-style:italic;">image</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;logo&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">src</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;/static/logo.png&quot;</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#B31D28;font-style:italic;">image</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#B31D28;font-style:italic;">image</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;logo&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">src</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;@/static/logo.png&quot;</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#B31D28;font-style:italic;">image</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- 相对路径 --&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#B31D28;font-style:italic;">image</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;logo&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">src</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;../../static/logo.png&quot;</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#B31D28;font-style:italic;">image</span><span style="color:#24292E;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p><strong>注意</strong></p><ul><li><code>@</code>开头的绝对路径以及相对路径会经过 base64 转换规则校验</li><li>引入的静态资源在非 h5 平台，均不转为 <code>base64</code>。</li><li>H5 平台，小于 <code>4kb</code> 的资源会被转换成 <code>base64</code>，其余不转。</li><li>自<code>HBuilderX 2.6.6</code>起<code>template</code>内支持<code>@</code>开头路径引入静态资源，旧版本不支持此方式</li><li>App 平台自<code>HBuilderX 2.6.9</code>起<code>template</code>节点中引用静态资源文件时（如：图片），调整查找策略为【基于当前文件的路径搜索】，与其他平台保持一致</li><li>支付宝小程序组件内 image 标签不可使用相对路径</li></ul><h3 id="css-引入静态资源" tabindex="-1">css 引入静态资源 <a class="header-anchor" href="#css-引入静态资源" aria-label="Permalink to &quot;css 引入静态资源&quot;">​</a></h3><blockquote><p><code>css</code>文件或<code>style标签</code>内引入<code>css</code>文件时（scss、less 文件同理），可以使用相对路径或绝对路径（<code>HBuilderX 2.6.6</code>）</p></blockquote><div class="language-css vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">/* 绝对路径 */</span></span>
<span class="line"><span style="color:#F97583;">@import</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">url</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;/common/uni.css&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">@import</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">url</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;@/common/uni.css&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#6A737D;">/* 相对路径 */</span></span>
<span class="line"><span style="color:#F97583;">@import</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">url</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;../../common/uni.css&#39;</span><span style="color:#E1E4E8;">);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">/* 绝对路径 */</span></span>
<span class="line"><span style="color:#D73A49;">@import</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">url</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;/common/uni.css&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#D73A49;">@import</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">url</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;@/common/uni.css&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#6A737D;">/* 相对路径 */</span></span>
<span class="line"><span style="color:#D73A49;">@import</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">url</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;../../common/uni.css&#39;</span><span style="color:#24292E;">);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p><strong>注意</strong></p><ul><li>自<code>HBuilderX 2.6.6</code>起支持绝对路径引入静态资源，旧版本不支持此方式</li></ul><blockquote><p><code>css</code>文件或<code>style标签</code>内引用的图片路径可以使用相对路径也可以使用绝对路径，需要注意的是，有些小程序端 css 文件不允许引用本地文件（请看注意事项）。</p></blockquote><div class="language-css vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">/* 绝对路径 */</span></span>
<span class="line"><span style="color:#85E89D;">background-image</span><span style="color:#E1E4E8;">: url(/static/logo</span><span style="color:#B392F0;">.png</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#85E89D;">background-image</span><span style="color:#E1E4E8;">: url(@/static/logo</span><span style="color:#B392F0;">.png</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#6A737D;">/* 相对路径 */</span></span>
<span class="line"><span style="color:#85E89D;">background-image</span><span style="color:#E1E4E8;">: url(.</span><span style="color:#FDAEB7;font-style:italic;">./</span><span style="color:#E1E4E8;">.</span><span style="color:#FDAEB7;font-style:italic;">./static</span><span style="color:#E1E4E8;">/logo</span><span style="color:#B392F0;">.png</span><span style="color:#E1E4E8;">);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">/* 绝对路径 */</span></span>
<span class="line"><span style="color:#22863A;">background-image</span><span style="color:#24292E;">: url(/static/logo</span><span style="color:#6F42C1;">.png</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#22863A;">background-image</span><span style="color:#24292E;">: url(@/static/logo</span><span style="color:#6F42C1;">.png</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#6A737D;">/* 相对路径 */</span></span>
<span class="line"><span style="color:#22863A;">background-image</span><span style="color:#24292E;">: url(.</span><span style="color:#B31D28;font-style:italic;">./</span><span style="color:#24292E;">.</span><span style="color:#B31D28;font-style:italic;">./static</span><span style="color:#24292E;">/logo</span><span style="color:#6F42C1;">.png</span><span style="color:#24292E;">);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p><strong>Tips</strong></p><ul><li>引入字体图标请参考，<a href="https://uniapp.dcloud.net.cn/tutorial/syntax-css.html#%E5%AD%97%E4%BD%93%E5%9B%BE%E6%A0%87" target="_blank" rel="noreferrer">字体图标(opens new window)</a></li><li><code>@</code>开头的绝对路径以及相对路径会经过 <code>base64</code> 转换规则校验</li><li>不支持本地图片的平台，小于 <code>40kb</code>，一定会转 <code>base64</code>。（共四个平台 mp-weixin, mp-qq, mp-toutiao, app v2）</li><li><code>h5</code> 平台，小于 <code>4kb</code> 会转 <code>base64</code>，超出 <code>4kb</code> 时不转。</li><li>其余平台不会转 <code>base64</code></li></ul><h3 id="引入原生插件" tabindex="-1">引入原生插件 <a class="header-anchor" href="#引入原生插件" aria-label="Permalink to &quot;引入原生插件&quot;">​</a></h3><div class="language-text vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">const PluginName = uni.requireNativePlugin(PluginName); // PluginName 为原生插件名称</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">const PluginName = uni.requireNativePlugin(PluginName); // PluginName 为原生插件名称</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><strong>内置原生插件</strong></p><p>内置原生插件,uni-app已默认集成，支持直接在内置基座运行。</p><p>仅在nvue页面，支持引入BindingX，animation， DOM.addRule等。</p><p>在vue页面，支持引入clipboard，storage，stream，deviceInfo等。</p><p>使用方式：可通过<code>uni.requireNativePlugin</code>直接使用。</p><div class="language-text vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">		&lt;view&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">			&lt;text class=&quot;my-iconfont&quot;&gt;&amp;#xe85c;&lt;/text&gt;	</span></span>
<span class="line"><span style="color:#e1e4e8;">		&lt;/view&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">	&lt;/template&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">	&lt;script&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">		export default{</span></span>
<span class="line"><span style="color:#e1e4e8;">			beforeCreate() {</span></span>
<span class="line"><span style="color:#e1e4e8;">				const domModule = uni.requireNativePlugin(&#39;dom&#39;)</span></span>
<span class="line"><span style="color:#e1e4e8;">				domModule.addRule(&#39;fontFace&#39;, {</span></span>
<span class="line"><span style="color:#e1e4e8;">					&#39;fontFamily&#39;: &quot;myIconfont&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">					&#39;src&#39;: &quot;url(&#39;http://at.alicdn.com/t/font_2234252_v3hj1klw6k9.ttf&#39;)&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">				});</span></span>
<span class="line"><span style="color:#e1e4e8;">			}</span></span>
<span class="line"><span style="color:#e1e4e8;">		}</span></span>
<span class="line"><span style="color:#e1e4e8;">	&lt;/script&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">	&lt;style&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">		.my-iconfont {</span></span>
<span class="line"><span style="color:#e1e4e8;">			font-family:myIconfont;</span></span>
<span class="line"><span style="color:#e1e4e8;">			font-size:60rpx;</span></span>
<span class="line"><span style="color:#e1e4e8;">			color: #00AAFF;</span></span>
<span class="line"><span style="color:#e1e4e8;">		}</span></span>
<span class="line"><span style="color:#e1e4e8;">	&lt;/style&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#24292e;">		&lt;view&gt;</span></span>
<span class="line"><span style="color:#24292e;">			&lt;text class=&quot;my-iconfont&quot;&gt;&amp;#xe85c;&lt;/text&gt;	</span></span>
<span class="line"><span style="color:#24292e;">		&lt;/view&gt;</span></span>
<span class="line"><span style="color:#24292e;">	&lt;/template&gt;</span></span>
<span class="line"><span style="color:#24292e;">	&lt;script&gt;</span></span>
<span class="line"><span style="color:#24292e;">		export default{</span></span>
<span class="line"><span style="color:#24292e;">			beforeCreate() {</span></span>
<span class="line"><span style="color:#24292e;">				const domModule = uni.requireNativePlugin(&#39;dom&#39;)</span></span>
<span class="line"><span style="color:#24292e;">				domModule.addRule(&#39;fontFace&#39;, {</span></span>
<span class="line"><span style="color:#24292e;">					&#39;fontFamily&#39;: &quot;myIconfont&quot;,</span></span>
<span class="line"><span style="color:#24292e;">					&#39;src&#39;: &quot;url(&#39;http://at.alicdn.com/t/font_2234252_v3hj1klw6k9.ttf&#39;)&quot;</span></span>
<span class="line"><span style="color:#24292e;">				});</span></span>
<span class="line"><span style="color:#24292e;">			}</span></span>
<span class="line"><span style="color:#24292e;">		}</span></span>
<span class="line"><span style="color:#24292e;">	&lt;/script&gt;</span></span>
<span class="line"><span style="color:#24292e;">	&lt;style&gt;</span></span>
<span class="line"><span style="color:#24292e;">		.my-iconfont {</span></span>
<span class="line"><span style="color:#24292e;">			font-family:myIconfont;</span></span>
<span class="line"><span style="color:#24292e;">			font-size:60rpx;</span></span>
<span class="line"><span style="color:#24292e;">			color: #00AAFF;</span></span>
<span class="line"><span style="color:#24292e;">		}</span></span>
<span class="line"><span style="color:#24292e;">	&lt;/style&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><p>非内置原生插件，分为 <a href="https://uniapp.dcloud.net.cn/api/extend/native-plugin#%E6%9C%AC%E5%9C%B0%E6%8F%92%E4%BB%B6%E9%9D%9E%E5%86%85%E7%BD%AE%E5%8E%9F%E7%94%9F%E6%8F%92%E4%BB%B6" target="_blank" rel="noreferrer">本地插件 (opens new window)</a>和 <a href="https://uniapp.dcloud.net.cn/api/extend/native-plugin#%E4%BA%91%E7%AB%AF%E6%8F%92%E4%BB%B6%E9%9D%9E%E5%86%85%E7%BD%AE%E5%8E%9F%E7%94%9F%E6%8F%92%E4%BB%B6" target="_blank" rel="noreferrer">云端插件 (opens new window)</a>。集成原生插件后，需要提交云端打包或制作自定义基座运行才会生效</p><h4 id="本地插件-非内置原生插件" tabindex="-1">本地插件(非内置原生插件) <a class="header-anchor" href="#本地插件-非内置原生插件" aria-label="Permalink to &quot;本地插件(非内置原生插件)&quot;">​</a></h4><p><strong>本地插件</strong>，是uni-app项目nativeplugins目录(目录不存在则创建)下的原生插件</p><h5 id="第一步-获取本地原生插件" tabindex="-1">第一步：获取本地原生插件 <a class="header-anchor" href="#第一步-获取本地原生插件" aria-label="Permalink to &quot;第一步：获取本地原生插件&quot;">​</a></h5><ul><li>方式一：插件市场下载免费uni-app原生插件</li></ul><p>可以登录<a href="https://ext.dcloud.net.cn/?cat1=5&amp;cat2=51" target="_blank" rel="noreferrer">uni原生插件市场 (opens new window)</a>，在免费的插件详情页中点击“下载for离线打包”下载原生插件（zip格式），解压到HBuilderX的uni-app项目下的“nativeplugins”目录（如不存在则创建），以下是“DCloud-RichAlert”插件举例，它的下载地址是：<a href="https://ext.dcloud.net.cn/plugin?id=36" target="_blank" rel="noreferrer">https://ext.dcloud.net.cn/plugin?id=36</a></p><p>下载解压后目录结构如下：</p><p><img src="https://raw.githubusercontent.com/caolinchao2/blogimg/main/img/9114fad0ae7013b0.png" alt="img"></p><ul><li>方式二：开发者自己开发uni-app原生插件</li></ul><p>原生插件开发完成后按指定格式压缩为zip包，参考<a href="https://nativesupport.dcloud.net.cn/NativePlugin/course/package" target="_blank" rel="noreferrer">uni-app原生插件格式说明文档 (opens new window)</a>。 按上图的格式配置到uni-app项目下的“nativeplugins”目录</p><h5 id="第二步-配置本地原生插件" tabindex="-1">第二步：配置本地原生插件 <a class="header-anchor" href="#第二步-配置本地原生插件" aria-label="Permalink to &quot;第二步：配置本地原生插件&quot;">​</a></h5><p>在manifest.json -&gt; App原生插件配置 -&gt; 选择本地插件 -&gt; 选择需要打包生效的插件 -&gt; 保存后提交云端打包生效。</p><p><img src="https://raw.githubusercontent.com/caolinchao2/blogimg/main/img/cc82b9bd7fccdaea.png" alt="img"></p><h5 id="第三步-开发调试本地原生插件" tabindex="-1">第三步：开发调试本地原生插件 <a class="header-anchor" href="#第三步-开发调试本地原生插件" aria-label="Permalink to &quot;第三步：开发调试本地原生插件&quot;">​</a></h5><p>在vue页面或nvue页面引入这个原生插件。</p><p>使用uni.requireNativePlugin的api，参数为插件的id。</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">dcRichAlert</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> uni.</span><span style="color:#B392F0;">requireNativePlugin</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;DCloud-RichAlert&#39;</span><span style="color:#E1E4E8;">)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">	</span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">dcRichAlert</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> uni.</span><span style="color:#6F42C1;">requireNativePlugin</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;DCloud-RichAlert&#39;</span><span style="color:#24292E;">)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h5 id="第四步-打包发布" tabindex="-1">第四步：打包发布 <a class="header-anchor" href="#第四步-打包发布" aria-label="Permalink to &quot;第四步：打包发布&quot;">​</a></h5><p>使用自定义基座开发调试本地原生插件后，不可直接将自定义基座apk作为正式版发布。 应该重新提交云端打包（不能勾选“自定义基座”）生成正式版本。</p><h4 id="云端插件-非内置原生插件" tabindex="-1">云端插件(非内置原生插件) <a class="header-anchor" href="#云端插件-非内置原生插件" aria-label="Permalink to &quot;云端插件(非内置原生插件)&quot;">​</a></h4><p><strong>云端插件</strong>，已经在插件市场绑定或购买的插件，无需下载插件到工程中，云打包时会直接合并打包原生插件到APP中。（试用插件只能在自定义基座中使用）</p><h5 id="第一步-购买或下载uni-app原生插件" tabindex="-1">第一步：购买或下载uni-app原生插件 <a class="header-anchor" href="#第一步-购买或下载uni-app原生插件" aria-label="Permalink to &quot;第一步：购买或下载uni-app原生插件&quot;">​</a></h5><p>使用前需先登录<a href="https://ext.dcloud.net.cn/?cat1=5&amp;cat2=51" target="_blank" rel="noreferrer">uni原生插件市场 (opens new window)</a>，在插件详情页中购买，免费插件也可以在插件市场0元购。购买后才能够云端打包使用插件。</p><blockquote><p>购买插件时请选择正确的appid，以及绑定正确包名</p></blockquote><h5 id="第二步-使用自定义基座打包uni原生插件-注-请使用真机运行自定义基座" tabindex="-1">第二步：使用自定义基座打包uni原生插件 （注：请使用真机运行自定义基座） <a class="header-anchor" href="#第二步-使用自定义基座打包uni原生插件-注-请使用真机运行自定义基座" aria-label="Permalink to &quot;第二步：使用自定义基座打包uni原生插件 （注：请使用真机运行自定义基座）&quot;">​</a></h5><p>在manifest.json -&gt; App原生插件配置 -&gt; 选择云端插件 -&gt; 选择需要打包的插件 -&gt; 保存后提交云端打包生效。</p><p><img src="https://raw.githubusercontent.com/caolinchao2/blogimg/main/img/e21bf86932d0da66.png" alt="img"></p><h5 id="第三步-开发调试uni-app原生插件" tabindex="-1">第三步：开发调试uni-app原生插件 <a class="header-anchor" href="#第三步-开发调试uni-app原生插件" aria-label="Permalink to &quot;第三步：开发调试uni-app原生插件&quot;">​</a></h5><p>在vue页面或nvue页面引入这个原生插件。</p><p>使用uni.requireNativePlugin的api，参数为插件的id。</p><p>1.在页面引入原生插件，uni.requireNativePlugin 使用后返回一个对象：</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">dcRichAlert</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> uni.</span><span style="color:#B392F0;">requireNativePlugin</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;DCloud-RichAlert&#39;</span><span style="color:#E1E4E8;">)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">dcRichAlert</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> uni.</span><span style="color:#6F42C1;">requireNativePlugin</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;DCloud-RichAlert&#39;</span><span style="color:#24292E;">)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>2.使用原生插件</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">	dcRichAlert.</span><span style="color:#B392F0;">show</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">		position: </span><span style="color:#9ECBFF;">&#39;bottom&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">		title: </span><span style="color:#9ECBFF;">&quot;提示信息&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">		titleColor: </span><span style="color:#9ECBFF;">&#39;#FF0000&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">		content: </span><span style="color:#9ECBFF;">&quot;&lt;a href=&#39;https://uniapp.dcloud.io/&#39; value=&#39;Hello uni-app&#39;&gt;uni-app&lt;/a&gt; 是一个使用 Vue.js 开发跨平台应用的前端框架!</span><span style="color:#79B8FF;">\\n</span><span style="color:#9ECBFF;">免费的</span><span style="color:#79B8FF;">\\n</span><span style="color:#9ECBFF;">免费的</span><span style="color:#79B8FF;">\\n</span><span style="color:#9ECBFF;">免费的</span><span style="color:#79B8FF;">\\n</span><span style="color:#9ECBFF;">重要的事情说三遍&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">		contentAlign: </span><span style="color:#9ECBFF;">&#39;left&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">		checkBox: {</span></span>
<span class="line"><span style="color:#E1E4E8;">			title: </span><span style="color:#9ECBFF;">&#39;不再提示&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">			isSelected: </span><span style="color:#79B8FF;">true</span></span>
<span class="line"><span style="color:#E1E4E8;">		},</span></span>
<span class="line"><span style="color:#E1E4E8;">		buttons: [{</span></span>
<span class="line"><span style="color:#E1E4E8;">			title: </span><span style="color:#9ECBFF;">&#39;取消&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">		}, {</span></span>
<span class="line"><span style="color:#E1E4E8;">			title: </span><span style="color:#9ECBFF;">&#39;否&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">		}, {</span></span>
<span class="line"><span style="color:#E1E4E8;">			title: </span><span style="color:#9ECBFF;">&#39;确认&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">			titleColor: </span><span style="color:#9ECBFF;">&#39;#3F51B5&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">		}]</span></span>
<span class="line"><span style="color:#E1E4E8;">	}, </span><span style="color:#FFAB70;">result</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">		console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(result)</span></span>
<span class="line"><span style="color:#E1E4E8;">	});</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">	dcRichAlert.</span><span style="color:#6F42C1;">show</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">		position: </span><span style="color:#032F62;">&#39;bottom&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">		title: </span><span style="color:#032F62;">&quot;提示信息&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">		titleColor: </span><span style="color:#032F62;">&#39;#FF0000&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">		content: </span><span style="color:#032F62;">&quot;&lt;a href=&#39;https://uniapp.dcloud.io/&#39; value=&#39;Hello uni-app&#39;&gt;uni-app&lt;/a&gt; 是一个使用 Vue.js 开发跨平台应用的前端框架!</span><span style="color:#005CC5;">\\n</span><span style="color:#032F62;">免费的</span><span style="color:#005CC5;">\\n</span><span style="color:#032F62;">免费的</span><span style="color:#005CC5;">\\n</span><span style="color:#032F62;">免费的</span><span style="color:#005CC5;">\\n</span><span style="color:#032F62;">重要的事情说三遍&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">		contentAlign: </span><span style="color:#032F62;">&#39;left&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">		checkBox: {</span></span>
<span class="line"><span style="color:#24292E;">			title: </span><span style="color:#032F62;">&#39;不再提示&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">			isSelected: </span><span style="color:#005CC5;">true</span></span>
<span class="line"><span style="color:#24292E;">		},</span></span>
<span class="line"><span style="color:#24292E;">		buttons: [{</span></span>
<span class="line"><span style="color:#24292E;">			title: </span><span style="color:#032F62;">&#39;取消&#39;</span></span>
<span class="line"><span style="color:#24292E;">		}, {</span></span>
<span class="line"><span style="color:#24292E;">			title: </span><span style="color:#032F62;">&#39;否&#39;</span></span>
<span class="line"><span style="color:#24292E;">		}, {</span></span>
<span class="line"><span style="color:#24292E;">			title: </span><span style="color:#032F62;">&#39;确认&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">			titleColor: </span><span style="color:#032F62;">&#39;#3F51B5&#39;</span></span>
<span class="line"><span style="color:#24292E;">		}]</span></span>
<span class="line"><span style="color:#24292E;">	}, </span><span style="color:#E36209;">result</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">		console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(result)</span></span>
<span class="line"><span style="color:#24292E;">	});</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><h5 id="第四步-打包发布-1" tabindex="-1">第四步：打包发布 <a class="header-anchor" href="#第四步-打包发布-1" aria-label="Permalink to &quot;第四步：打包发布&quot;">​</a></h5><p>使用自定义基座开发调试uni-app原生插件后，不可直接将自定义基座apk作为正式版发布。 应该重新提交云端打包（不能勾选“自定义基座”）生成正式版本。</p><h5 id="注意事项" tabindex="-1">注意事项 <a class="header-anchor" href="#注意事项" aria-label="Permalink to &quot;注意事项&quot;">​</a></h5><p>1.可以在 插件市场 查看更多插件，如需开发uni原生插件请参考 <a href="https://nativesupport.dcloud.net.cn/NativePlugin/README" target="_blank" rel="noreferrer">uni原生插件开发文档 (opens new window)</a>。 2.如果插件需要传递文件路径，则需要传手机文件的绝对路径，可使用 5+ <a href="http://www.html5plus.org/doc/zh_cn/io.html" target="_blank" rel="noreferrer">IO模块 (opens new window)</a>的相关 API 得到文件的绝对路径</p>`,68),o=[e];function t(c,r,i,y,E,u){return n(),a("div",null,o)}const g=s(p,[["render",t]]);export{b as __pageData,g as default};

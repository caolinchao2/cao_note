import{_ as s,o as l,c as a,Q as n}from"./chunks/framework.b5309610.js";const m=JSON.parse('{"title":"小程序-02 模板、组件","description":"","frontmatter":{},"headers":[],"relativePath":"前端/mini-programe/小程序-02 模板、组件.md","filePath":"前端/mini-programe/小程序-02 模板、组件.md","lastUpdated":1715053679000}'),o={name:"前端/mini-programe/小程序-02 模板、组件.md"},p=n(`<h1 id="小程序-02-模板、组件" tabindex="-1">小程序-02 模板、组件 <a class="header-anchor" href="#小程序-02-模板、组件" aria-label="Permalink to &quot;小程序-02 模板、组件&quot;">​</a></h1><h2 id="一、渲染" tabindex="-1">一、渲染 <a class="header-anchor" href="#一、渲染" aria-label="Permalink to &quot;一、渲染&quot;">​</a></h2><ol><li>使用if/elif/else进行判断语句</li></ol><div class="language-html vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#FDAEB7;font-style:italic;">view</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">wx:if</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;{{条件}}&quot;</span><span style="color:#E1E4E8;">&gt; WEBVIEW &lt;/</span><span style="color:#FDAEB7;font-style:italic;">view</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#FDAEB7;font-style:italic;">view</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">wx:elif</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;{{条件}}&quot;</span><span style="color:#E1E4E8;">&gt; APP &lt;/</span><span style="color:#FDAEB7;font-style:italic;">view</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#FDAEB7;font-style:italic;">view</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">wx:else</span><span style="color:#E1E4E8;">&gt; MINA &lt;/</span><span style="color:#FDAEB7;font-style:italic;">view</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">data: view: &#39;MINA&#39;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#B31D28;font-style:italic;">view</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">wx:if</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;{{条件}}&quot;</span><span style="color:#24292E;">&gt; WEBVIEW &lt;/</span><span style="color:#B31D28;font-style:italic;">view</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#B31D28;font-style:italic;">view</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">wx:elif</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;{{条件}}&quot;</span><span style="color:#24292E;">&gt; APP &lt;/</span><span style="color:#B31D28;font-style:italic;">view</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#B31D28;font-style:italic;">view</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">wx:else</span><span style="color:#24292E;">&gt; MINA &lt;/</span><span style="color:#B31D28;font-style:italic;">view</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">data: view: &#39;MINA&#39;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><ol start="2"><li>使用wx:for进行渲染模块，值可以是变量，也可以是数组</li></ol><div class="language-html vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#FDAEB7;font-style:italic;">view</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">wx:for</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&#39;{{arr}}&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">wx:key</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&#39;{{index}}&#39;</span><span style="color:#E1E4E8;">&gt;{{item}}&lt;/</span><span style="color:#FDAEB7;font-style:italic;">view</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#FDAEB7;font-style:italic;">view</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">wx:for</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&#39;{{[1,2,3]}}&#39;</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#B31D28;font-style:italic;">view</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">wx:for</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&#39;{{arr}}&#39;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">wx:key</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&#39;{{index}}&#39;</span><span style="color:#24292E;">&gt;{{item}}&lt;/</span><span style="color:#B31D28;font-style:italic;">view</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#B31D28;font-style:italic;">view</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">wx:for</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&#39;{{[1,2,3]}}&#39;</span><span style="color:#24292E;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ol start="3"><li>可以使用block标签进行渲染模板，block标签是一个特殊的标签，不会出现在页面上，最多的是做列表渲染，当然也可以直接使用渲染标签；</li></ol><p>block不是一个组件，仅仅是一个包装元素，不会在页面中做任何渲染，只接受控制属性；</p><div class="language-html vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#FDAEB7;font-style:italic;">block</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">wx:for</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&#39;&#39;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#FDAEB7;font-style:italic;">view</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#FDAEB7;font-style:italic;">view</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#FDAEB7;font-style:italic;">block</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#B31D28;font-style:italic;">block</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">wx:for</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&#39;&#39;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#B31D28;font-style:italic;">view</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#B31D28;font-style:italic;">view</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#B31D28;font-style:italic;">block</span><span style="color:#24292E;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ol start="4"><li>index和item是固定的，如果需要修改可以使用wx:for-item=&#39;itm&#39;和wx:for-index=&#39;x&#39;；</li></ol><p>九九乘法表案例：</p><div class="language-html vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#FDAEB7;font-style:italic;">view</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">wx:for</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&#39;{{list}}&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">wx:key</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&#39;{{index}}&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">wx:for-item</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;x&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;lists&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#FDAEB7;font-style:italic;">text</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">wx:for</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&#39;{{list}}&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">wx:key</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&#39;{{index}}&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">wx:for-item</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&#39;y&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">wx:if</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&#39;{{x&gt;=y}}&#39;</span><span style="color:#E1E4E8;">&gt;{{y}}*{{x}}={{x*y}}&lt;/</span><span style="color:#FDAEB7;font-style:italic;">text</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#FDAEB7;font-style:italic;">view</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#B31D28;font-style:italic;">view</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">wx:for</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&#39;{{list}}&#39;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">wx:key</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&#39;{{index}}&#39;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">wx:for-item</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;x&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;lists&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#B31D28;font-style:italic;">text</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">wx:for</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&#39;{{list}}&#39;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">wx:key</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&#39;{{index}}&#39;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">wx:for-item</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&#39;y&#39;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">wx:if</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&#39;{{x&gt;=y}}&#39;</span><span style="color:#24292E;">&gt;{{y}}*{{x}}={{x*y}}&lt;/</span><span style="color:#B31D28;font-style:italic;">text</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#B31D28;font-style:italic;">view</span><span style="color:#24292E;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="二、模板" tabindex="-1">二、模板 <a class="header-anchor" href="#二、模板" aria-label="Permalink to &quot;二、模板&quot;">​</a></h2><ol><li>相当于一个组件，定义name作为模板的名称，使用时用is来指定显示哪一个模板；</li></ol><p>在小程序里，如果标签中没有内容，可以直接使用闭合标签；</p><div class="language-html vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">name</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&#39;tem&#39;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#FDAEB7;font-style:italic;">view</span><span style="color:#E1E4E8;">&gt;这是模板内容&lt;/</span><span style="color:#FDAEB7;font-style:italic;">view</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">is</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&#39;header&#39;</span><span style="color:#FDAEB7;font-style:italic;">/</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">name</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&#39;tem&#39;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#B31D28;font-style:italic;">view</span><span style="color:#24292E;">&gt;这是模板内容&lt;/</span><span style="color:#B31D28;font-style:italic;">view</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">is</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&#39;header&#39;</span><span style="color:#B31D28;font-style:italic;">/</span><span style="color:#24292E;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><ol start="2"><li>引用模板</li></ol><p>（1）使用import标签来引入；引入之后直接使用is，is等于引用进来的模板文件里定义的name名；引入可以不带后缀</p><div class="language-html vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#FDAEB7;font-style:italic;">import</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">src</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&#39;../&#39;</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">is</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&#39;&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#FDAEB7;font-style:italic;">/</span><span style="color:#E1E4E8;">&gt;   // 可以复制多个;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#B31D28;font-style:italic;">import</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">src</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&#39;../&#39;</span><span style="color:#24292E;"> /&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">is</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&#39;&#39;</span><span style="color:#24292E;"> </span><span style="color:#B31D28;font-style:italic;">/</span><span style="color:#24292E;">&gt;   // 可以复制多个;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>（2）使用include引用，会直接显示文件里除template标签外的内容。</p><div class="language-html vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#FDAEB7;font-style:italic;">include</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">src</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&#39;../&#39;</span><span style="color:#E1E4E8;"> /&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#B31D28;font-style:italic;">include</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">src</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&#39;../&#39;</span><span style="color:#24292E;"> /&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>import和include的区别：</p><ul><li>import 可以引入模板template的内容</li><li>include在没有定义模板时使用，显示除template标签外的内容</li></ul><p>也可以两个全部引入；</p><ol start="3"><li>模板传值</li></ol><p>在引入的标签上绑定data属性，在模板可以直接使用data绑定的属性变量，如果是对象，需要使用...扩展运算符；</p><div class="language-html vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">src</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&#39;&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">data</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&#39;{{title}}&#39;</span><span style="color:#FDAEB7;font-style:italic;">/</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">src</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&#39;&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">data</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&#39;{{...obj}}&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#FDAEB7;font-style:italic;">/</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">src</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&#39;&#39;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">data</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&#39;{{title}}&#39;</span><span style="color:#B31D28;font-style:italic;">/</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">src</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&#39;&#39;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">data</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&#39;{{...obj}}&#39;</span><span style="color:#24292E;"> </span><span style="color:#B31D28;font-style:italic;">/</span><span style="color:#24292E;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>如果是include可以直接使用父组件的变量，不需要通过data绑定数据传值；</p><ol start="4"><li>模板作用域 C import B，B import A，在C中可以使用B定义的template，在B中可以使用A定义的template，但是C不能使用A定义的template。</li></ol><h2 id="三、常用组件" tabindex="-1">三、常用组件 <a class="header-anchor" href="#三、常用组件" aria-label="Permalink to &quot;三、常用组件&quot;">​</a></h2><ol><li>scroll-view：滚动视图组件，需要设置一个固定的高度，并允许某个方向滚动，属性：</li></ol><ul><li>scroll-x/y 开启横/竖向滚动；</li><li>scroll-top/left 设置滚动条初始位置，参数为数字；</li><li>enable-back-to-top ios点击顶部状态栏/安卓双击标题回到顶部；</li><li>bindscroll 滚动时触发的函数</li><li>scroll-into-view 滚动到设置的id位置;</li></ul><ol start="2"><li>swiper： 轮播图组件，直接子元素旋转swiper-item组件；</li></ol><ul><li>indicator-dots 显示面板指示点 .wx-swiper-dots.wx-swiper-dots-horizontal可以选中指示点；</li><li>autoplay 自动切换</li><li>interval 自动切换时间间隔</li><li>circular 开启循环滚动，会加一张图；</li><li>vertical 开启纵向轮播图；</li></ul><ol start="3"><li>icon图标</li></ol><ul><li>type 指定显示的类型，只能是 success, success_no_circle, info, warn, waiting, cancel, download, search, clear</li><li>size icon的大小，使用数字单位，默认23；</li><li>color icon的颜色；</li></ul><ol start="4"><li>progress 进度条；</li></ol><ul><li>percent 百分比进度，数字单位；</li><li>show-info 在进度条右侧显示百分比数字；</li><li>border-radius 圆角大小</li><li>activeColor 已选择进度条颜色</li><li>backgroundColor 未选择进度条颜色</li></ul><ol start="5"><li>button：按钮组件</li></ol><ul><li>size：default / mini 两种尺寸</li><li>type： default / primary / warn 修改按钮的颜色</li><li>plain： true 按钮透明背景</li><li>disabled：禁用</li><li>loading：带loading图标的按钮；</li><li>form-type：submit / reset 在form表单时，触发提交功能；</li><li>hover-class：按下去的样式；</li></ul><p>（1）open-type：微信开放 能力</p><ul><li>contact： 打开客服会话，可以绑定bindcontact(e)获取具体信息；</li><li>getPhoneNumber： 获取用户手机号，绑定bindgetphonenumber获取信息；</li><li>getUserInfo： 获取用户信息，绑定bindgetuserinfo获取信息；</li><li>feedback：意见反馈页面，用户可以获取信息；</li></ul><ol start="6"><li>image： 图片组件</li></ol><ul><li>src： 图片资源地址;</li><li>lazy-load： 图片懒加载，布尔值；</li></ul><p>（1）mode： 图片裁剪、缩放模式</p><ul><li>aspectFit： 缩放模式，保持纵横缩放比，可以将图片完整的显示出来；（常用）</li><li>scaleToFill： 不保持纵横缩放图片，使图片完全适应；</li><li>aspectFill： 保持纵横缩放比，只保证图片短边能完全显示；</li></ul><h2 id="四、表单组件" tabindex="-1">四、表单组件 <a class="header-anchor" href="#四、表单组件" aria-label="Permalink to &quot;四、表单组件&quot;">​</a></h2><ol><li><p>form：表单控件；</p><p>需要给button添加form-type属性，提交表单需要添加name属性来作为key，在表单上添加value属性来作为值；</p></li></ol><ul><li><p>bindsubmit： 触发提交事件；</p></li><li><p>bindrestet： 触发reset事件；</p></li></ul><ol start="2"><li>input： 输入框，默认没有边框；</li></ol><ul><li>password： 是否为密码框；</li><li>placeholder-style： 指定提示信息样式；</li><li>maxlength： 最大输入长度；</li><li>focus： 获取焦点；</li><li>adjust-position： 键盘弹起时，是否自动上推页面；</li><li>bindinput： 键盘输入时触发，相当于keyup；</li><li>bindfocus： 获取焦点；</li><li>bindblur：失去焦点</li><li>bindconfirm： 点击完成按钮触发；</li></ul><p>（1）type：指定输入框类型</p><ul><li>text：文本键盘</li><li>number：数字键盘</li><li>idcard：身份证输入键盘</li><li>digit：带小数点的键盘；</li></ul><p>（2）confirm-type：设置键盘右下角的文字提示；</p><ul><li>send：右下角按钮文字为发送</li><li>search /搜索、next /下一个、go /前往、done /完成；</li></ul><ol start="3"><li>label：绑定id属性，可以将输入控件直接包裹；</li><li>checkbox：复选框，多个复选框需要添加到checkbox-group，给group添加name属性，提交之后会获取到一个数组；</li><li>radio： 单选框，多个使用radio-group包裹；</li><li>slider： 滑动选择器；</li></ol><ul><li>min/max： 设置范围；</li><li>step： 步长；</li><li>value： 当前值，</li><li>show-value： 是否显示当前value；</li><li>bindchange： 完成拖动触发；</li><li>bindchanging： 拖动过程触发；</li></ul><ol start="7"><li>switch： 开关选择器，返回一个布尔值；8. textarea：文本框，拥有大部分input属性；</li></ol><ul><li>auto-height： 自动增高，设置之后style.height失效；</li><li>fixed： 如果在position:fixed区域，则需要指定，否则不显示；</li></ul><ol start="9"><li>picker 底部弹起的滚动选择器；</li></ol><ul><li>bindcancel： 取消选择时触发；</li><li>mode： 指定类型</li></ul><p>（1）selector：普通选择器；</p><ul><li>range： 指定一个数组，填写可选项；</li><li>value： 表示数组下标是第几个；</li><li>bindchange： value改变时触发；</li></ul><p>（2）multiSelector：多列选择器；</p><ul><li>range： 指定一个二维数组；</li><li>value： value也是一个数组，数组中的每一项代表一列的值；</li><li>bindcolumnchange：列改变时触发，返回信息会告知第几列，通过switch来进行判断，修改多列选择器的第二列数据；</li></ul><p>（3）time：时间选择器；</p><ul><li>vlaue： 选中的时间，格式：hh:mm</li><li>start / end： 限制时间；</li><li>bindchange： 改变时触发；</li></ul><p>（4）date：日期选择器；</p><ul><li>fields：限制选项，year/month/day；当选择month时，只有year和month;</li></ul><p>（5）region：省市区选择器</p>`,70),t=[p];function e(i,c,r,y,E,d){return l(),a("div",null,t)}const F=s(o,[["render",e]]);export{m as __pageData,F as default};
